import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock, MessageCircle, Sparkles, ArrowRight, Zap, Heart, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Contact Background Image */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Modern office space with communication"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        {/* Floating Gradient Orbs - Responsive sizes */}
        <div className="absolute top-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-green-400/20 rounded-full blur-[50px] sm:blur-[70px] lg:blur-[100px] animate-pulse"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 animate-pulse" />
            <span className="text-sm sm:text-base text-blue-300 font-semibold tracking-wide">LET'S CONNECT</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent block">
              Ready to Start Your
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Transformation?
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Your extraordinary journey begins with a single conversation. Let's connect and explore 
            how we can unlock your unlimited potential together.
          </p>
        </div>
      </section>

      {/* Contact Methods Section - Big Bold Cards */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Bright Background with Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(99_102_241)_1px,_transparent_0)] bg-[length:30px_30px] sm:bg-[length:40px_40px] lg:bg-[length:50px_50px] opacity-[0.03]"></div>
        
        {/* Floating Gradient Orbs - Responsive */}
        <div className="absolute top-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-green-400/20 rounded-full blur-[50px] sm:blur-[70px] lg:blur-[100px] animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xl border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse" />
              <span className="text-sm sm:text-base text-blue-600 font-semibold tracking-wide">CONNECT WITH US</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight px-2 sm:px-4">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Let's Start Your
              </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
                Journey
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Choose your preferred way to connect. Every transformation begins with a single step forward.
            </p>
          </div>

          {/* Contact Methods Grid - Responsive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-20 sm:mb-24 lg:mb-32">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-blue-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-blue-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-indigo-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8 text-center">
                  <div className="mb-6 sm:mb-8 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Email Us
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg break-all">hello@alaome.com</p>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg break-all">transform@alaome.com</p>
                  </div>
                  
                  <p className="text-slate-600 text-sm sm:text-base">
                    Get detailed responses to your transformation questions
                  </p>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-emerald-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-emerald-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-teal-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8 text-center">
                  <div className="mb-6 sm:mb-8 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    Call Us
                  </h3>
                  
                  <p className="text-emerald-600 font-semibold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">+1 (555) 123-TRANSFORM</p>
                  
                  <p className="text-slate-600 text-sm sm:text-base">
                    Direct conversations for immediate transformation guidance
                  </p>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-purple-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-purple-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-transparent to-pink-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8 text-center">
                  <div className="mb-6 sm:mb-8 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-purple-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Visit Us
                  </h3>
                  
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p className="font-semibold">123 Excellence Boulevard</p>
                    <p>Innovation District, CA 94105</p>
                    <p>United States</p>
                  </div>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* Hours Card */}
            <div className="group relative sm:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-orange-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-orange-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-transparent to-red-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8 text-center">
                  <div className="mb-6 sm:mb-8 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-orange-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    Our Hours
                  </h3>
                  
                  <div className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    <p><strong>Mon - Fri:</strong> 8AM - 8PM PST</p>
                    <p><strong>Saturday:</strong> 10AM - 4PM PST</p>
                    <p><strong>Sunday:</strong> By appointment</p>
                  </div>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Different Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_50%,transparent_50%,transparent_75%,rgba(147,51,234,0.03)_75%)] bg-[length:40px_40px] sm:bg-[length:50px_50px] lg:bg-[length:60px_60px]"></div>
        
        {/* Animated Gradient Orbs - Responsive */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-300/30 to-indigo-400/30 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-300/30 to-pink-400/30 rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-purple-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-sm sm:text-base text-purple-600 font-semibold tracking-wide">QUICK ANSWERS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight px-2 sm:px-4">
              <span className="bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent block">
                Questions &
              </span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent block">
                Answers
              </span>
            </h2>
          </div>

          {/* FAQ Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="group relative lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-blue-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-blue-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-indigo-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    How quickly can I see results?
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Our quantum leap methodology delivers visible results within 30 days, with major breakthroughs typically occurring within 90 days of consistent application.
                  </p>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* FAQ Item 2 */}
            <div className="group relative lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-purple-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-purple-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-transparent to-pink-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-purple-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                    What makes you different?
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    We use AI-powered personalization, neuroscience-backed techniques, and exponential thinking frameworks to compress years of growth into months.
                  </p>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* FAQ Item 3 */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-emerald-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-emerald-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-teal-50/80"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                    Do you offer ongoing support?
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Absolutely! We become integrated partners in your success ecosystem, providing continuous guidance, resources, and network connections.
                  </p>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
