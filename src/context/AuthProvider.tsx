import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState();

  const { ethereum } = window;
  const provider: any =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setIsConnected(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      const signer = provider?.getSigner();
      const signature = await signer.signMessage(message);
  
      setSignature(signature)
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accountAddress,
        setAccountAddress,
        accountBalance,
        setAccountBalance,
        isConnected,
        setIsConnected,
        connectWallet,
        setMessage,
        signature
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
