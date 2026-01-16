import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FEATURES, PRICING_PLANS } from "@/lib/constants";
import { Check, ArrowRight, PlayCircle } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_nigerian_fintech_background.png";
import digitalArt from "@assets/generated_images/3d_digital_compliance_art.png";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0">
           <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Now Live: 2026 FIRS TaxPro-Max Integration
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]"
              >
                Audit Compliance, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Made for Nigeria
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                The first platform that unifies FIRS tax filings, CAC annual returns, and state-level compliance for Nigerian businesses. 
                Save 40+ hours monthly.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link href="/signup">
                  <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 rounded-full">
                    Start 30-Day Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-primary/20 hover:bg-primary/5">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Book Demo (Lagos Team)
                </Button>
              </motion.div>
              
              <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="text-sm text-muted-foreground pt-4"
              >
                Trusted by 500+ Nigerian Businesses • NDPC Compliant
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-1 w-full max-w-[600px]"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                 <img 
                  src={digitalArt} 
                  alt="Compliance Dashboard Preview" 
                  className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Widgets */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-8 right-8 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-border/50 max-w-[200px]"
                >
                  <div className="text-xs text-muted-foreground mb-1">Tax Liability</div>
                  <div className="text-2xl font-bold text-red-500">₦450,200</div>
                  <div className="text-xs text-red-400 mt-1">Due in 5 days</div>
                </motion.div>

                 <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-12 left-8 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">VAT Remitted</div>
                    <div className="text-xs text-green-600">Successfully filed</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">Trusted by innovative Nigerian companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for logos as per mockup constraint */}
             <span className="text-xl font-bold font-heading">Flutterwave</span>
             <span className="text-xl font-bold font-heading">Paystack</span>
             <span className="text-xl font-bold font-heading">PiggyVest</span>
             <span className="text-xl font-bold font-heading">Kuda</span>
             <span className="text-xl font-bold font-heading">Dangote</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Complete Compliance Coverage</h2>
            <p className="text-muted-foreground text-lg">
              Designed specifically for the Nigerian regulatory environment, covering everything from federal taxes to state levies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to simplify your compliance?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of Nigerian businesses saving time and avoiding penalties with ComplyNG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/signup">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold text-primary bg-white hover:bg-white/90">
                Get Started for Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg text-white border-white/30 hover:bg-white/10">
              Call Sales: +234 800 AUDITNG
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
