"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
};

type User = {
  name: string;
  email: string;
  password: string;
  _id: string;
  __v: number;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export default UserContextProvider;
