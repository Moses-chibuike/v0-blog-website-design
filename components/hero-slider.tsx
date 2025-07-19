"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Star } from "lucide-react"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  ctaLink: string
  badge?: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Transform Your Mindset",
    subtitle: "Break Free from Limitations",
    description:
      "Discover powerful strategies to overcome mental barriers and unlock your true potential through purpose-driven transformation.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Start Your Journey",
    ctaLink: "/blog",
    badge: "Personal Growth",
  },
  {
    id: 2,
    title: "Professional Excellence",
    subtitle: "Elevate Your Career",
    description:
      "Learn from real success stories and proven strategies that help professionals achieve extraordinary results in their careers.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Explore Success Stories",
    ctaLink: "/blog",
    badge: "Career Growth",
  },
  {
    id: 3,
    title: "Spiritual Purpose",
    subtitle: "Live with Intention",
    description:
      "Align your life with your higher calling and create meaningful impact that extends beyond yourself for His glory.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Find Your Purpose",
    ctaLink: "/about",
    badge: "Spirituality",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm mb-6 border border-green-500/30">
                    <Star className="w-4 h-4 mr-2" />
                    {slide.badge}
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-400 mb-6">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
                    >
                      <Link href={slide.ctaLink}>
                        {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-transparent px-8 py-4 text-lg font-semibold rounded-lg"
                    >
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          variant="ghost"
          size="lg"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          variant="ghost"
          size="lg"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-6 right-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 backdrop-blur-sm"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-green-500 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div
          className="h-full bg-green-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}
