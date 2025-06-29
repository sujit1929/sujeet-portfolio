"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "WhatsApp-like Chat App",
    description:
      "Real-time chat with OTP login, contact management, and Socket.IO messaging.",
    image: "/images/projects/chat-app.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Socket.IO", "Node.js", "MongoDB", "Twilio"],
    githubUrl: "https://github.com/sujeet-sharma/chat-app",
    liveUrl: "https://chat.sujeetsharma.dev",
  },
  {
    id: 2,
    title: "AI Tools Post System",
    description:
      "Post creation with media uploads, tool tagging, mentions, and rich text.",
    image: "/images/projects/ai-posts.png",
    technologies: ["Next.js", "React Hook Form", "Zod", "Cloudinary", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/sujeet-sharma/ai-tools-posts",
    liveUrl: "https://posts.sujeetsharma.dev",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio with animations, responsive layout, and dark mode.",
    image: "/images/projects/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "ShadCN UI"],
    githubUrl: "https://github.com/sujeet-sharma/portfolio",
    liveUrl: "https://sujeetsharma.dev",
  },
  {
    id: 4,
    title: "Post Reaction System",
    description:
      "Like/save/comments with infinite scroll and optimistic UI state.",
    image: "/images/projects/reaction-system.png",
    technologies: ["Next.js", "React Query", "Zod", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/sujeet-sharma/post-system",
    liveUrl: "https://reactions.sujeetsharma.dev",
  },
  {
    id: 5,
    title: "Multi-Step Auth Flow",
    description:
      "Phone number-based OTP login/registration with JWT backend.",
    image: "/images/projects/auth-flow.png",
    technologies: ["React Hook Form", "Zod", "JWT", "Express", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/sujeet-sharma/auth-flow",
    liveUrl: "https://auth.sujeetsharma.dev",
  },
  {
    id: 6,
    title: "AI Tools Bazaar",
    description:
      "AI tools listing site with categories, tags, and animations.",
    image: "/images/projects/ai-tools.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/sujeet-sharma/ai-tools-bazaar",
    liveUrl: "https://aitoolsbazaar.vercel.app",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Real-world projects showcasing my frontend and full-stack skills using modern tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="flex flex-col group hover:shadow-md transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4 flex-1 flex flex-col justify-between space-y-2">
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
