import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Zap, Award, Star, Users, ArrowRight, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Charity Background Image */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Hands reaching out to help"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            About AlaoMe Transformation
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            We stand out by redefining the way personal and professional growth is approached. Our commitment to
            Transforming Lives, Differently means we go beyond conventional methods to facilitate deep, meaningful
            change.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section - Bright & Modern */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Bright Background with Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(99_102_241)_1px,_transparent_0)] bg-[length:30px_30px] sm:bg-[length:40px_40px] lg:bg-[length:50px_50px] opacity-[0.03]"></div>
        
        {/* Floating Gradient Orbs - Responsive sizes */}
        <div className="absolute top-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-green-400/20 rounded-full blur-[50px] sm:blur-[70px] lg:blur-[100px] animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xl border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse" />
              <span className="text-sm sm:text-base text-blue-600 font-semibold tracking-wide">OUR FOUNDATION</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight px-4">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built for
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
              At AlaoMe Transformation, we don't just adapt to change—we create it. Every transformation 
              journey is engineered with precision, powered by innovation, and designed for exponential impact.
            </p>
          </div>

          {/* Cards Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Mission Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-blue-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-blue-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-indigo-50/80"></div>
                
                <CardHeader className="relative z-10 p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6 sm:px-8 pb-6 sm:pb-8">
                  <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    To ignite exponential growth through revolutionary mentorship. We don't just guide transformation—we 
                    architect futures, turning potential into unstoppable momentum that reshapes entire life trajectories.
                  </CardDescription>
                  
                  <div className="mt-4 sm:mt-6 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs sm:text-sm font-semibold">Explore Mission</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-purple-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-purple-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-transparent to-pink-50/80"></div>
                
                <CardHeader className="relative z-10 p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-purple-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6 sm:px-8 pb-6 sm:pb-8">
                  <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    A world where transformation transcends limits. We envision individuals breaking through impossible barriers, 
                    redefining success, and creating ripple effects that transform communities, industries, and generations.
                  </CardDescription>
                  
                  <div className="mt-4 sm:mt-6 flex items-center text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs sm:text-sm font-semibold">Explore Vision</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>

            {/* Purpose Card */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-xl border border-emerald-200/50 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-emerald-400/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-teal-50/80"></div>
                
                <CardHeader className="relative z-10 p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    Our Purpose
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6 sm:px-8 pb-6 sm:pb-8">
                  <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    To be the catalyst for impossible transformations. We exist to unlock hidden superpowers, amplify human potential, 
                    and turn ordinary stories into legendary testimonies of purpose-driven excellence.
                  </CardDescription>
                  
                  <div className="mt-4 sm:mt-6 flex items-center text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs sm:text-sm font-semibold">Explore Purpose</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Vibrant Light Design */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Bright Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_50%,transparent_50%,transparent_75%,rgba(147,51,234,0.03)_75%)] bg-[length:40px_40px] sm:bg-[length:50px_50px] lg:bg-[length:60px_60px]"></div>
        
        {/* Animated Gradient Orbs - Responsive */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-300/30 to-indigo-400/30 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-300/30 to-pink-400/30 rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-purple-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-sm sm:text-base text-purple-600 font-semibold tracking-wide">WHAT SETS US APART</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight px-4">
              <span className="bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Content Side */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Next-Gen Growth
                </span>
                <br />
                <span className="text-slate-800">Solutions</span>
              </h3>

              {/* Feature Items */}
              <div className="space-y-4 sm:space-y-6">
                <div className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/60 hover:border-blue-400/80 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-blue-400/30 rounded-lg sm:rounded-xl blur-md sm:blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        AI-Powered Personalization
                      </h4>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Advanced algorithms analyze your unique patterns, challenges, and goals to create hyper-personalized transformation roadmaps that adapt in real-time to your progress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-xl border border-purple-200/60 hover:border-purple-400/80 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Award className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-purple-400/30 rounded-lg sm:rounded-xl blur-md sm:blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        Quantum Leap Methodology
                      </h4>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Revolutionary strategies that compress years of growth into months, using neuroscience-backed techniques and exponential thinking frameworks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-xl border border-emerald-200/60 hover:border-emerald-400/80 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl fl
