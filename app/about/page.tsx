"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User } from "lucide-react"

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js (App Router)",
  "React Query (TanStack Query)",
  "Redux Toolkit",
  "Zod",
  "React Hook Form",
  "ShadCN UI",
  "Framer Motion",
  "Lucide-react",
  "Axios",
  "Git & GitHub",
  "Responsive Design",
  "API Integration",
  "Component-based Architecture",
  "MongoDB",
  "Express.js",
  "Node.js",
  "Socket.IO",
  "Twilio API",
]

const timeline = [
  {
    year: "2025",
    title: "Building WhatsApp-like Chat App",
    company: "Self-Project",
    description:
      "Developing a full-stack chat app with OTP login, real-time messaging, and dynamic contacts using MERN, Next.js, and Socket.IO.",
  },
  {
    year: "2024",
    title: "Frontend Developer (Next.js)",
    company: "Freelance & Personal Projects",
    description:
      "Built several modular apps using Next.js App Router, Tailwind, TanStack Query, and ShadCN UI. Worked on UI/UX improvements, post creation forms, and AI integrations.",
  },
  {
    year: "2024",
    title: "Learning Backend Development",
    company: "Self-Learning",
    description:
      "Focused on Node.js, Express, MongoDB, JWT authentication, and RESTful APIs to complement frontend expertise.",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    company: "Freelancer",
    description:
      "Developed responsive websites using React.js and Tailwind CSS. Started exploring state management and form validation tools.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">About Me</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm Sujeet Sharma, a frontend-focused full-stack developer passionate about creating seamless, real-time, and interactive web applications. My expertise lies in building modern, scalable UIs using React, Next.js, and Tailwind CSS.
                </p>
                <p className="text-muted-foreground">
                  I enjoy solving problems, building full-stack features (like chat, post creation, and OTP auth), and continuously learning tools that elevate the user experience. I'm currently expanding my backend skills with Node.js, MongoDB, and WebSockets.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  India
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
                <CardDescription>Technologies I work with daily</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-primary font-medium">{item.company}</p>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
