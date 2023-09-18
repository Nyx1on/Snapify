import React from "react";
import HeaderMain from "@/components/HeaderMain";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderMain />
      <section className="p-4 flex flex-col min-h-screen">{children}</section>
      <Footer />
    </>
  );
}
