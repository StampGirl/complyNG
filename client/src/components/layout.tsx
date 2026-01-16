import { Link, useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthPage = location === "/login" || location === "/signup";
  const isDashboard = location.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <span>Comply<span className="text-primary">NG</span></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!isAuthPage && NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!isAuthPage ? (
            <>
              <Link href="/login">
                <Button variant="ghost" className="font-medium">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button className="font-medium bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  Start Free Trial
                </Button>
              </Link>
            </>
          ) : (
             <Link href="/">
                <Button variant="ghost" className="font-medium">Back to Home</Button>
             </Link>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                 {!isAuthPage && NAV_LINKS.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                   <Link href="/login">
                    <Button variant="outline" className="w-full justify-start" onClick={() => setIsOpen(false)}>Log In</Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full justify-start bg-primary text-white" onClick={() => setIsOpen(false)}>Start Free Trial</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  const [location] = useLocation();
  const isDashboard = location.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <footer className="bg-muted/30 border-t py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading font-bold text-xl">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
              <span>Comply<span className="text-primary">NG</span></span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Automated compliance and audit trails built specifically for the Nigerian business ecosystem.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Integrations</a></li>
              <li><a href="#" className="hover:text-primary">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">FIRS Guides</a></li>
              <li><a href="#" className="hover:text-primary">CAC Help</a></li>
              <li><a href="#" className="hover:text-primary">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lagos, Nigeria</li>
              <li>+234 800 AUDITNG</li>
              <li>hello@complyng.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 ComplyNG. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
