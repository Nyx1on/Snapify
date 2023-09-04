import AccountNav from "@/components/AccountNav";
import React, { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AccountNav />
      {children}
    </>
  );
}
