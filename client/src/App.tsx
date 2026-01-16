import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Auth from "@/pages/auth";
import Dashboard from "@/pages/dashboard";
import Filings from "@/pages/dashboard/filings";
import AuditTrails from "@/pages/dashboard/audit-trails";
import CACManager from "@/pages/dashboard/cac";
import FIRSPortal from "@/pages/dashboard/firs";
import StateTaxes from "@/pages/dashboard/state-taxes";
import Team from "@/pages/dashboard/team";
import Settings from "@/pages/dashboard/settings";
import { Layout } from "@/components/layout";
import { DashboardLayout } from "@/components/dashboard-layout";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/login">
        <Layout>
          <Auth />
        </Layout>
      </Route>
      <Route path="/signup">
        <Layout>
          <Auth />
        </Layout>
      </Route>
      
      {/* Dashboard Routes */}
      <Route path="/dashboard">
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/filings">
        <DashboardLayout>
          <Filings />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/audit-trails">
        <DashboardLayout>
          <AuditTrails />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/cac">
        <DashboardLayout>
          <CACManager />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/firs">
        <DashboardLayout>
          <FIRSPortal />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/state-taxes">
        <DashboardLayout>
          <StateTaxes />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/team">
        <DashboardLayout>
          <Team />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/settings">
        <DashboardLayout>
          <Settings />
        </DashboardLayout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
