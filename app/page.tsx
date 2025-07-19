import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/modeToggle";
import { HeartHandshake, Users, Briefcase, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b">
        <div className="flex items-center gap-2">
          <HeartHandshake className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold">Sahaayi</h1>
        </div>
        <ModeToggle />
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Hero Section */}
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              സ്വാഗതം, Sahaayi!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A humble platform to connect people who need help with the hands
              that are ready to work. Start by choosing your role below.
            </p>
          </section>

          {/* Call to Action Buttons */}
          <section className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button asChild size="lg" className="flex-1">
              <Link href="/dashboard/user" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                I want to hire a worker
              </Link>
            </Button>
            <Button variant="secondary" asChild size="lg" className="flex-1">
              <Link href="/dashboard/worker" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                I am a worker
              </Link>
            </Button>
          </section>

          <Separator className="max-w-md mx-auto" />

          {/* Feature Cards */}
          <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-primary" />
                  Trusted Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with verified workers and trusted employers in your community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Easy Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Find the right person for your job or discover work opportunities nearby.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Quality Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built on trust, reviews, and a commitment to quality service.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Additional CTA */}
          <section className="pt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More About Sahaayi</Link>
            </Button>
          </section>

          {/* Footer */}
          <footer className="text-xs text-muted-foreground pt-12 border-t max-w-2xl mx-auto">
            <p>Built with ❤️ by Kannan | Sahaayi Prototype</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}