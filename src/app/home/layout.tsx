import React, { useEffect } from "react";
import HeaderMain from "@/components/HeaderMain";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-4 flex flex-col min-h-screen">
      <HeaderMain />
      {children}
    </section>
  );
}
