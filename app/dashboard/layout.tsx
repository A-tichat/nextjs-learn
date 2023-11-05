import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-60">
        <SideNav />
      </div>
      <div className="flex-1 md:overflow-hidden md:hover:overflow-y-auto">
        <div className="px-3 py-4 md:px-2">
          <div className="rounded-md p-6 dark:bg-slate-800 dark:text-slate-50  md:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
