import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow py-4 px-3 md:px-2">
        <div className="p-6 md:overflow-y-auto md:p-12 dark:bg-slate-800 text-slate-50 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}
