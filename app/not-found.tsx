'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const excuses = [
  "This page went on vacation and forgot to leave a forwarding address 🏖️",
  "Our AI got distracted by cat videos and lost track of your page 🐱",
  "404: Page is probably stuck in digital traffic somewhere 🚗",
  "This URL took a wrong turn at the internet highway 🛣️",
  "Page not found - it's hiding behind the couch with the TV remote 🛋️"
]

export default function NotFound() {
  const [robotMood, setRobotMood] = useState('🤖❓')
  const [excuse] = useState(excuses[Math.floor(Math.random() * excuses.length)])
  
  useEffect(() => {
    const timer = setTimeout(() => setRobotMood('🤖💡'), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-primary/20 
                    flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-1/4 text-3xl animate-bounce">🌍</div>
        <div className="absolute top-32 right-1/3 text-2xl animate-pulse delay-500">⭐</div>
        <div className="absolute bottom-24 left-1/5 text-2xl animate-bounce delay-1000">🚀</div>
        <div className="absolute top-1/2 right-20 text-xl animate-pulse delay-700">✨</div>
      </div>

      <div className="max-w-xl mx-auto text-center z-10 bg-card/90 backdrop-blur-sm 
                      rounded-2xl p-8 shadow-xl border">
        
        {/* Error display */}
        <div className="mb-6">
          <div className="text-7xl font-bold text-primary mb-4 animate-bounce">4🌍4</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Oops! Page Not Found
          </h1>
          <p className="text-muted-foreground text-sm">
            Looks like you've discovered uncharted digital territory
          </p>
        </div>

        {/* AI helper */}
        <div className="mb-6">
          <div className="text-5xl mb-3 transition-all duration-1000">
            {robotMood}
          </div>
          <p className="text-sm text-muted-foreground">
            {robotMood === '🤖❓' 
              ? 'Sahaayi is investigating...' 
              : 'Found some options for you!'
            }
          </p>
        </div>

        {/* Fun message */}
        <div className="mb-6 p-4 bg-secondary/50 rounded-lg border-l-4 border-accent">
          <p className="text-foreground font-medium text-sm mb-2">{excuse}</p>
          <p className="text-muted-foreground text-xs">
            Don't worry, even GPS gets confused sometimes! 🧭
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <Link href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary 
                           text-primary-foreground rounded-xl font-medium
                           hover:bg-primary/90 transition-all duration-300 
                           hover:scale-105">
            🏠 Take Me Home
          </Link>

          <div className="flex justify-center gap-2">
            <Link href="/help" 
                  className="inline-flex items-center gap-1 px-3 py-2 bg-accent/20 
                             text-accent-foreground rounded-lg hover:bg-accent/30 
                             transition-all text-sm">
              🆘 Help
            </Link>
            
            <button onClick={() => window.history.back()} 
                    className="inline-flex items-center gap-1 px-3 py-2 bg-secondary 
                               text-secondary-foreground rounded-lg hover:bg-secondary/80 
                               transition-all text-sm">
              ↩️ Back
            </button>

            <button onClick={() => window.location.reload()} 
                    className="inline-flex items-center gap-1 px-3 py-2 bg-muted 
                               text-muted-foreground rounded-lg hover:bg-muted/80 
                               transition-all text-sm">
              🔄 Retry
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Lost traveler #{Math.floor(Math.random() * 500) + 1} today 🌐
          </p>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 
                      bg-gradient-to-t from-accent/5 to-transparent" />
    </div>
  )
}

/* Add to your global.css:
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
}
.animate-float { animation: float 4s ease-in-out infinite; }
*/