import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Box,
  ShieldCheck,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";

function App() {
  const MAIN_APP_URL = "http://localhost:5000";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                IM
              </span>
              <span className="text-muted-foreground text-sm">
                by FormFlow.io
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`${MAIN_APP_URL}/login`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </a>
            <a
              href={`${MAIN_APP_URL}/login`}
              className="px-4 py-2 text-sm font-medium rounded-md bg-cyan-500 text-black hover:bg-cyan-400 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <a
            href="#features"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in duration-500 hover:bg-white/10 transition-colors group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Free 14-day trial • No credit card required
            </span>
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Inventory Management
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            The all-in-one platform for tracking, organizing, and optimizing
            your inventory with powerful features and intuitive design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <a
              href={`${MAIN_APP_URL}/login`}
              className="gradient-border-btn gap-2"
            >
              Get Started Free <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="gradient-border-btn gap-2">
              <Play className="h-4 w-4" /> View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                10,000+
              </div>
              <div className="text-gray-400 text-sm">Items Tracked</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                1,000+
              </div>
              <div className="text-gray-400 text-sm">Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to manage your inventory efficiently and
              effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-yellow-500" />}
              title="Real-time Tracking"
              description="Monitor stock levels in real-time across multiple locations with instant updates."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-cyan-400" />}
              title="Advanced Analytics"
              description="Gain insights with detailed reports, trends, and forecasting tools."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-green-500" />}
              title="Team Collaboration"
              description="Manage user roles and permissions to keep your team synchronized."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-purple-500" />}
              title="Secure & Reliable"
              description="Enterprise-grade security with daily backups and 99.9% uptime."
            />
            <FeatureCard
              icon={<Box className="h-6 w-6 text-orange-500" />}
              title="Barcode Scanning"
              description="Quickly add and update items using our integrated barcode scanner."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-6 w-6 text-cyan-400" />}
              title="Audit Trails"
              description="Keep track of every change with detailed activity logs and history."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                IM
              </span>
              <span className="text-muted-foreground text-sm">
                by FormFlow.io
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 InventoryManager. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default App;
