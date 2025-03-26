"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Hi, I'm <span className="text-primary">Amit Kumar Meena</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">Computer Science & Engineering Student at IIT Kanpur</p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Passionate about Machine Learning, Web Development, and Competitive Programming. Currently exploring
              opportunities in software development and data science.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">Download Resume</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/akmeena6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/amit-kumar-meena-9b6aa125b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:amitkmeena22@iitk.ac.in" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-3">
              <div className="text-sm font-medium">
                <span className="text-muted-foreground">Competitive Coder</span>
                <div className="flex items-center mt-1">
                  <span className="text-primary font-bold">Specialist</span>
                  <span className="ml-2 text-muted-foreground">@Codeforces</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

