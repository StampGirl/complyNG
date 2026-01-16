import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  ChevronDown,
  Building2,
  Landmark,
  ShieldCheck,
  History,
  FileSearch,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: FileSearch, label: "Filings & Returns", href: "/dashboard/filings" },
  { icon: History, label: "Audit Trails", href: "/dashboard/audit-trails" },
  { icon: Building2, label: "CAC Manager", href: "/dashboard/cac" },
  { icon: Landmark, label: "FIRS Portal", href: "/dashboard/firs" },
  { icon: ShieldCheck, label: "State Taxes", href: "/dashboard/state-taxes" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-muted/10 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-card fixed inset-y-0 z-30">
        <div className="h-16 flex items-center px-6 border-b">
           <Link href="/">
              <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
                <span>Comply<span className="text-primary">NG</span></span>
              </div>
            </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <NavItem 
              key={link.href} 
              icon={link.icon} 
              label={link.label} 
              href={link.href} 
              active={location === link.href} 
            />
          ))}
        </div>
        <div className="p-4 border-t">
          <NavItem icon={LogOut} label="Log Out" href="/login" />
        </div>
      </aside>

      {/* Mobile Sidebar Sheet */}
       <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-16 flex items-center px-6 border-b">
             <span className="font-heading font-bold text-xl">ComplyNG</span>
          </div>
          <div className="flex-1 py-6 px-4 space-y-1">
             {sidebarLinks.map((link) => (
              <NavItem 
                key={link.href} 
                icon={link.icon} 
                label={link.label} 
                href={link.href} 
                active={location === link.href}
                onClick={() => setSidebarOpen(false)}
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 border-b bg-card px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative hidden md:block w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 bg-muted/50 border-none focus-visible:ring-1" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <div className="flex items-center gap-3 border-l pl-4 ml-2">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">Chioma Adebayo</div>
                <div className="text-xs text-muted-foreground">Finance Lead</div>
              </div>
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary">CA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, href, active = false, onClick }: { icon: any, label: string, href: string, active?: boolean, onClick?: () => void }) {
  return (
    <Link href={href}>
      <div 
        onClick={onClick}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
          active 
            ? "bg-primary/10 text-primary" 
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        {label}
      </div>
    </Link>
  );
}
