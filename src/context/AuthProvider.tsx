import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [authRouter, setAuthRouter] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        authRouter,
        setAuthRouter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
