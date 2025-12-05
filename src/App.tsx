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
  Layers,
  Image,
  FileText,
  GitBranch,
  FolderTree,
  Printer,
  Settings2,
  Lock,
} from "lucide-react";

function App() {
  // Use relative URLs or configure for production
  const APP_URL = "/login";

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
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={APP_URL}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </a>
            <a href={APP_URL} className="gradient-border-btn-animated">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-float-delayed" />
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
                Powerful inventory management with QR code tracking, real-time
                analytics, and seamless team collaboration. Know exactly what
                you have and where it is.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href={APP_URL} className="gradient-border-btn gap-2">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#" className="gradient-border-btn gap-2">
                  <Play className="h-4 w-4" /> Watch Demo
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start flex-wrap">
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
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />

                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Package className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Inventory Dashboard
                        </h3>
                        <p className="text-xs text-gray-400">
                          Real-time overview
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hero-stat-card">
                      <div className="text-2xl font-bold text-white">847</div>
                      <div className="text-xs text-gray-400">Total Items</div>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-green-400">+12%</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hero-stat-card">
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-xs text-gray-400">Locations</div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3 text-cyan-400" />
                        <span className="text-xs text-cyan-400">Active</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hero-stat-card">
                      <div className="text-2xl font-bold text-white">5</div>
                      <div className="text-xs text-gray-400">Low Stock</div>
                      <div className="flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3 w-3 text-yellow-400" />
                        <span className="text-xs text-yellow-400">Alert</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      Recent Activity
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hero-item-card">
                      <div className="h-10 w-10 rounded-lg bg-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                        <QrCode className="h-5 w-5 text-cyan-400" />
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 animate-scan-line" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">
                          MacBook Pro M3
                        </div>
                        <div className="text-xs text-gray-400">
                          Scanned just now
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-green-400">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>In Stock</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hero-item-card">
                      <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Box className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">
                          Office Supplies Kit
                        </div>
                        <div className="text-xs text-gray-400">
                          Updated 2 min ago
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-yellow-400">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Low Stock</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hero-item-card">
                      <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                        <Tag className="h-5 w-5 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">
                          Server Rack #12
                        </div>
                        <div className="text-xs text-gray-400">
                          Moved to Warehouse B
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-cyan-400">
                        <MapPin className="h-3 w-3" />
                        <span>Relocated</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-16 top-1/4 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl animate-float-card hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center relative overflow-hidden">
                      <Scan className="h-6 w-6 text-white z-10" />
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Quick Scan
                      </div>
                      <div className="text-xs text-green-400">
                        Ready to scan
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-12 bottom-1/4 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl animate-float-card-delayed hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center animate-bell-ring">
                      <Bell className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Low Stock Alert
                      </div>
                      <div className="text-xs text-yellow-400">
                        3 items need reorder
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-4 -top-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-4 py-2 shadow-lg animate-bounce-slow hidden lg:block">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-white" />
                    <span className="text-sm font-semibold text-white">
                      +24% efficiency
                    </span>
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
            {/* Featured Card - Label Designer */}
            <div className="md:col-span-2 md:row-span-2 relative group p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                  <Printer className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Label Designer
                </h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-md">
                  Create custom labels with our drag-and-drop designer. Add QR
                  codes, barcodes, text, and logos with precise positioning.
                  Save templates for reuse.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                    Drag & Drop
                  </span>
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">
                    QR & Barcode
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">
                    Templates
                  </span>
                </div>
              </div>
            </div>

            <FeatureCard
              icon={<Settings2 className="h-6 w-6 text-cyan-400" />}
              title="Custom Fields"
              description="Define text, number, date, dropdown fields with validation and conditional logic."
              gradient="from-cyan-500/20 via-cyan-500/10 to-transparent"
            />

            <FeatureCard
              icon={<QrCode className="h-6 w-6 text-green-400" />}
              title="QR Code Scanning"
              description="Generate and print QR labels. Scan to instantly access item details."
              gradient="from-green-500/20 via-green-500/10 to-transparent"
            />

            <FeatureCard
              icon={<FolderTree className="h-6 w-6 text-orange-400" />}
              title="Hierarchical Locations"
              description="Organize with nested locations: Building → Floor → Room → Shelf."
              gradient="from-orange-500/20 via-orange-500/10 to-transparent"
            />

            <FeatureCard
              icon={<Image className="h-6 w-6 text-pink-400" />}
              title="Media Attachments"
              description="Upload images and videos. Auto-generated thumbnails and built-in viewer."
              gradient="from-pink-500/20 via-pink-500/10 to-transparent"
            />

            {/* Wide Card - Guided Workflows */}
            <div className="md:col-span-2 relative group p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 shrink-0">
                <GitBranch className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Guided Workflow Builder
                </h3>
                <p className="text-gray-400">
                  Create step-by-step data entry workflows with conditional
                  branching. Perfect for complex item types.
                </p>
              </div>
            </div>

            <FeatureCard
              icon={<Users className="h-6 w-6 text-blue-400" />}
              title="Team Roles"
              description="Admin, Manager, Contributor, Viewer - control who can access what."
              gradient="from-blue-500/20 via-blue-500/10 to-transparent"
            />

            <FeatureCard
              icon={<Layers className="h-6 w-6 text-yellow-400" />}
              title="Categories & Types"
              description="Organize items with hierarchical categories and customizable item types."
              gradient="from-yellow-500/20 via-yellow-500/10 to-transparent"
            />

            {/* Wide Card - Multi-Tenancy */}
            <div className="md:col-span-2 relative group p-6 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-blue-500/5 to-transparent border border-white/10 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                <Lock className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  Multi-Tenant & Secure
                </h3>
                <p className="text-gray-400">
                  Complete data isolation per organization. Subdomain routing,
                  API key management, and enterprise-grade security.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs">
                  Isolated Data
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                  API Access
                </div>
              </div>
            </div>

            <FeatureCard
              icon={<FileText className="h-6 w-6 text-slate-400" />}
              title="Activity Logs"
              description="Complete audit trail of all changes. Track who did what and when."
              gradient="from-slate-500/20 via-slate-500/10 to-transparent"
            />

            <FeatureCard
              icon={<Zap className="h-6 w-6 text-amber-400" />}
              title="Real-time Updates"
              description="Changes sync instantly across all devices and team members."
              gradient="from-amber-500/20 via-amber-500/10 to-transparent"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                inventory management effortless for businesses of all sizes.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">2024</div>
                  <div className="text-gray-400 text-sm">Founded</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-gray-400 text-sm">Countries</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">$1M+</div>
                  <div className="text-gray-400 text-sm">Saved for Clients</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Innovation First
                </h3>
                <p className="text-gray-400">
                  We continuously push boundaries with powerful features and
                  intuitive interfaces.
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
                  Our dedicated support team is available 24/7 to ensure your
                  success.
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
                  Your data security is our top priority with enterprise-grade
                  encryption.
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
