export const metadata = {
  title: "마이 히스토리",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:mx-auto lg:max-w-[1200px] mx-4 pb-20 md:mx-6">
      {children}
    </div>
  );
}
