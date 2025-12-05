import {
  BarChart3,
  ShieldCheck,
  Users,
  Zap,
  ArrowRight,
  Play,
  QrCode,
  Bell,
  Globe,
  Smartphone,
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
              {/* <a */}
              {/*   href="#pricing" */}
              {/*   className="text-muted-foreground hover:text-foreground transition-colors" */}
              {/* > */}
              {/*   Pricing */}
              {/* </a> */}
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              {/* <a */}
              {/*   href="#contact" */}
              {/*   className="text-muted-foreground hover:text-foreground transition-colors" */}
              {/* > */}
              {/*   Contact */}
              {/* </a> */}
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
              className="gradient-border-btn-animated"
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
      <section id="features" className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm text-cyan-400 font-medium">
                Powerful Features
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Everything you need to
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                manage inventory
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Streamline operations with our comprehensive toolkit designed for
              modern businesses.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            {/* Featured Card - Spans 2 columns */}
            <div className="md:col-span-2 md:row-span-2 relative group p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Advanced Analytics
                </h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-md">
                  Unlock powerful insights with real-time dashboards, trend
                  analysis, and AI-powered forecasting to make data-driven
                  decisions.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50" />
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50" />
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/50" />
                  </div>
                  <span className="text-sm text-gray-500">
                    Used by 500+ teams
                  </span>
                </div>
              </div>
            </div>

            {/* Regular Cards */}
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-yellow-400" />}
              title="Real-time Tracking"
              description="Monitor stock levels instantly across all locations."
              gradient="from-yellow-500/20 via-yellow-500/10 to-transparent"
              iconBg="from-yellow-500 to-orange-500"
            />
            <FeatureCard
              icon={<QrCode className="h-6 w-6 text-green-400" />}
              title="QR Code Scanning"
              description="Quickly scan and manage items with QR codes."
              gradient="from-green-500/20 via-green-500/10 to-transparent"
              iconBg="from-green-500 to-emerald-500"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-purple-400" />}
              title="Team Collaboration"
              description="Manage roles and keep your team synchronized."
              gradient="from-purple-500/20 via-purple-500/10 to-transparent"
              iconBg="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-blue-400" />}
              title="Enterprise Security"
              description="SOC 2 compliant with end-to-end encryption."
              gradient="from-blue-500/20 via-blue-500/10 to-transparent"
              iconBg="from-blue-500 to-indigo-500"
            />

            {/* Wide Card - Spans 2 columns */}
            <div className="md:col-span-2 relative group p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
                <Bell className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Smart Alerts & Notifications
                </h3>
                <p className="text-gray-400">
                  Get instant notifications for low stock, expiring items, and
                  critical inventory events across all channels.
                </p>
              </div>
            </div>

            <FeatureCard
              icon={<Globe className="h-6 w-6 text-teal-400" />}
              title="Multi-location"
              description="Manage inventory across warehouses globally."
              gradient="from-teal-500/20 via-teal-500/10 to-transparent"
              iconBg="from-teal-500 to-cyan-500"
            />
            <FeatureCard
              icon={<Smartphone className="h-6 w-6 text-orange-400" />}
              title="Mobile Ready"
              description="Access your inventory from any device, anywhere."
              gradient="from-orange-500/20 via-orange-500/10 to-transparent"
              iconBg="from-orange-500 to-amber-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="text-sm text-purple-400 font-medium">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Built by experts,
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                  trusted by thousands
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We started InventoryManager with a simple mission: make
                inventory management effortless for businesses of all sizes. Our
                team combines decades of supply chain expertise with
                cutting-edge technology.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">2019</div>
                  <div className="text-gray-400 text-sm">Founded</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-gray-400 text-sm">Countries</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">$2M+</div>
                  <div className="text-gray-400 text-sm">Saved for Clients</div>
                </div>
              </div>
            </div>

            {/* Right side - Values */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Innovation First
                </h3>
                <p className="text-gray-400">
                  We continuously push boundaries with AI-powered insights,
                  real-time analytics, and intuitive interfaces that make
                  complex tasks simple.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
                <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Customer Success
                </h3>
                <p className="text-gray-400">
                  Our dedicated support team is available 24/7. We don't just
                  provide software—we partner with you to ensure your success.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
                <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Trust & Security
                </h3>
                <p className="text-gray-400">
                  Your data security is our top priority. We're SOC 2 certified
                  and use enterprise-grade encryption for all your information.
                </p>
              </div>
            </div>
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
  gradient = "from-white/5 to-white/10",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}) {
  return (
    <div
      className={`relative group p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
