import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased dark:bg-slate-950 md:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
