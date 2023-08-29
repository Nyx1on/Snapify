import HeaderMain from "@/components/HeaderMain";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-4 flex flex-col min-h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <HeaderMain />

      {children}
    </section>
  );
}
