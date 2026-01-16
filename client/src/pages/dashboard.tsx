import { useState } from "react";
import { Link } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  ChevronDown,
  MoreHorizontal,
  Download,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DASHBOARD_STATS, RECENT_ACTIVITIES } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/10 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-card fixed inset-y-0 z-30">
        <div className="h-16 flex items-center px-6 border-b">
           <Link href="/">
              <a className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
                <span>Comply<span className="text-primary">NG</span></span>
              </a>
            </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <NavItem icon={LayoutDashboard} label="Overview" active />
          <NavItem icon={FileText} label="Filings & Returns" />
          <NavItem icon={FileText} label="Documents" />
          <div className="pt-4 pb-2">
            <h4 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Compliance</h4>
          </div>
          <NavItem icon={FileText} label="FIRS Portal" />
          <NavItem icon={FileText} label="CAC Manager" />
          <NavItem icon={FileText} label="State Taxes" />
        </div>
        <div className="p-4 border-t">
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={LogOut} label="Log Out" />
        </div>
      </aside>

      {/* Mobile Sidebar Sheet */}
       <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-16 flex items-center px-6 border-b">
             <span className="font-heading font-bold text-xl">ComplyNG</span>
          </div>
          <div className="flex-1 py-6 px-4 space-y-1">
             <NavItem icon={LayoutDashboard} label="Overview" active />
             <NavItem icon={FileText} label="Filings" />
             <NavItem icon={Settings} label="Settings" />
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
              <Input placeholder="Search returns, documents, or regulations..." className="pl-9 bg-muted/50 border-none focus-visible:ring-1" />
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

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-bold font-heading">Dashboard</h1>
            <p className="text-muted-foreground">Here's your compliance overview for October 2025</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DASHBOARD_STATS.map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className={`text-xs mt-1 font-medium ${
                      stat.status === 'good' ? 'text-green-600' : 
                      stat.status === 'warning' ? 'text-orange-500' : 'text-red-500'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                     stat.status === 'good' ? 'bg-green-100 text-green-600' : 
                     stat.status === 'warning' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                  }`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Deadlines & Recent Activity */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest compliance actions and alerts</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {RECENT_ACTIVITIES.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                        <Badge variant={activity.status === "Completed" ? "default" : "secondary"} className={
                          activity.status === "Completed" ? "bg-green-100 text-green-700 hover:bg-green-200 shadow-none border-transparent" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 shadow-none border-transparent"
                        }>
                          {activity.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
               <Card className="bg-primary text-white border-none">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="secondary" className="w-full justify-start text-primary bg-white/90 hover:bg-white border-none">
                    <Download className="mr-2 h-4 w-4" /> Generate FIRS Ticket
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-white border-white/20 hover:bg-white/10">
                    <FileText className="mr-2 h-4 w-4" /> New WHT Credit Note
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-white border-white/20 hover:bg-white/10">
                    <MoreHorizontal className="mr-2 h-4 w-4" /> File Annual Returns
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "VAT Remittance", date: "Oct 21", days: "5 days left" },
                    { title: "WHT Filing", date: "Oct 21", days: "5 days left" },
                    { title: "PAYE Remittance", date: "Nov 10", days: "25 days left" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border">
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground">Due: {item.date}</div>
                      </div>
                      <Badge variant="outline" className="border-orange-200 text-orange-600 bg-orange-50">
                        {item.days}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      active 
        ? "bg-primary/10 text-primary" 
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`}>
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
