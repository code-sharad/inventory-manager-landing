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
  Package,
  MapPin,
  Tag,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Scan,
  Box,
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {/* Main gradient blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
          {/* Secondary blobs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-float-delayed" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <a
                href="#features"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors group"
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Track Every Item,
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Anywhere, Anytime
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mb-10">
                Powerful inventory management with QR code tracking, real-time analytics, and seamless team collaboration. Know exactly what you have and where it is.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`${MAIN_APP_URL}/login`}
                  className="gradient-border-btn gap-2"
                >
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#" className="gradient-border-btn gap-2">
                  <Play className="h-4 w-4" /> Watch Demo
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right side - Animated Dashboard Mockup */}
            <div className="relative lg:h-[500px] flex items-center justify-center">
              {/* Main Dashboard Card */}
              <div className="relative w-full max-w-md">
                {/* Dashboard container with glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />

                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Package className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Inventory Dashboard</h3>
                        <p className="text-xs text-gray-400">Real-time overview</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hero-stat-card">
                      <div className="text-2xl font-bold text-white">847</div>
                      <div className="text-xs text-gray-400">Total Items</div>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-green-400">+12%</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hero-stat-card" style={{ animationDelay: '0.1s' }}>
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-xs text-gray-400">Locations</div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3 text-cyan-400" />
                        <span className="text-xs text-cyan-400">Active</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hero-stat-card" style={{ animationDelay: '0.2s' }}>
                      <div className="text-2xl font-bold text-white">5</div>
                      <div className="text-xs text-gray-400">Low Stock</div>
                      <div className="flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3 w-3 text-yellow-400" />
                        <span className="text-xs text-yellow-400">Alert</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Items List */}
                  <div className="space-y-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Recent Activity</div>

                    {/* Item 1 - Scanning animation */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hero-item-card">
                      <div className="h-10 w-10 rounded-lg bg-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                        <QrCode className="h-5 w-5 text-cyan-400" />
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 animate-scan-line" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">MacBook Pro M3</div>
                        <div className="text-xs text-gray-400">Scanned just now</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-green-400">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>In Stock</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hero-item-card" style={{ animationDelay: '0.15s' }}>
                      <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Box className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">Office Supplies Kit</div>
                        <div className="text-xs text-gray-400">Updated 2 min ago</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-yellow-400">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Low Stock</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hero-item-card" style={{ animationDelay: '0.3s' }}>
                      <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                        <Tag className="h-5 w-5 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">Server Rack #12</div>
                        <div className="text-xs text-gray-400">Moved to Warehouse B</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-cyan-400">
                        <MapPin className="h-3 w-3" />
                        <span>Relocated</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating QR Scanner Card */}
                <div className="absolute -left-16 top-1/4 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl animate-float-card hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center relative overflow-hidden">
                      <Scan className="h-6 w-6 text-white z-10" />
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Quick Scan</div>
                      <div className="text-xs text-green-400">Ready to scan</div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification Card */}
                <div className="absolute -right-12 bottom-1/4 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl animate-float-card-delayed hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center animate-bell-ring">
                      <Bell className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Low Stock Alert</div>
                      <div className="text-xs text-yellow-400">3 items need reorder</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Badge */}
                <div className="absolute right-4 -top-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-4 py-2 shadow-lg animate-bounce-slow hidden lg:block">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-white" />
                    <span className="text-sm font-semibold text-white">+24% efficiency</span>
                  </div>
                </div>
              </div>
            </div>
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
              animation="feature-card-realtime"
            />
            <FeatureCard
              icon={<QrCode className="h-6 w-6 text-green-400" />}
              title="QR Code Scanning"
              description="Quickly scan and manage items with QR codes."
              gradient="from-green-500/20 via-green-500/10 to-transparent"
              animation="feature-card-qr"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-purple-400" />}
              title="Team Collaboration"
              description="Manage roles and keep your team synchronized."
              gradient="from-purple-500/20 via-purple-500/10 to-transparent"
              animation="feature-card-team"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-blue-400" />}
              title="Enterprise Security"
              description="SOC 2 compliant with end-to-end encryption."
              gradient="from-blue-500/20 via-blue-500/10 to-transparent"
              animation="feature-card-security"
            />

            {/* Wide Card - Spans 2 columns */}
            <div className="md:col-span-2 relative group p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden flex items-center gap-6 feature-card-alerts">
              <div className="feature-icon h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
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
              animation="feature-card-globe"
            />
            <FeatureCard
              icon={<Smartphone className="h-6 w-6 text-orange-400" />}
              title="Mobile Ready"
              description="Access your inventory from any device, anywhere."
              gradient="from-orange-500/20 via-orange-500/10 to-transparent"
              animation="feature-card-mobile"
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
  animation = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
  animation?: string;
}) {
  return (
    <div
      className={`relative group p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${animation}`}
    >
      <div className="feature-icon relative h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
