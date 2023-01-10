import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
        return
      }
      sethaveMetamask(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
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
        haveMetamask,
        sethaveMetamask,
        accountAddress,
        setAccountAddress,
        accountBalance,
        setAccountBalance,
        isConnected,
        setIsConnected,
        connectWallet
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
