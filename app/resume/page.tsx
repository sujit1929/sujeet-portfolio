"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Download, Calendar, MapPin, Building } from "lucide-react"

const education = [
  {
    id: "education-1",
    degree: "Bachelor of Science in Computer Science",
    school: "Indira Gandhi National Open University (IGNOU)",
    location: "India",
    period: "2020 - 2023",
    description:
      "Focused on computer science fundamentals and software development. Gained a solid foundation in data structures, DBMS, and web technologies.",
    achievements: [
      "Completed with strong academic performance",
      "Special focus on web development",
      "Built practical projects using React.js and Next.js",
    ],
  },
  {
    id: "education-2",
    degree: "Java Full Stack Development",
    school: "Ducat The It Training Institute",
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Deepened understanding of frontend development, including React.js, Next.js.",
    achievements: [
      "Built frontend web using React.js and Next.js",
      "Practiced state management with Redux Toolkit",
    ],
  },
]

const experience = [
  {
    id: "experience-1",
    title: "Frontend Developer",
    company: "AI Tools Bazaar",
    location: "Delhi",
    period: "jan 2025 - jul 2025",
    description:
      "Building and maintaining the AI Tools platform using modern frontend tools with modular, scalable UI components.",
    responsibilities: [
      "Created post creation flow with media uploads & rich text",
      "Used React Hook Form + Zod for validation",
      "Integrated AI tool tagging and user mentions",
      "Managed state with TanStack Query and Zustand",
      "Styled UI using Tailwind CSS and ShadCN components",
    ],
  },
  {
    id: "experience-2",
    title: "Full Stack Developer (Personal Project)",
    company: "WhatsApp Clone – Chat App",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Built a full-stack real-time chat app with phone number authentication and contact-based chat flow.",
    responsibilities: [
      "Used Twilio for OTP authentication",
      "Handled backend with Node.js, Express, MongoDB",
      "Implemented real-time messaging with Socket.IO",
      "Frontend built using Next.js App Router & TypeScript",
      "Focused on user privacy: no public user listing",
    ],
  },
  {
    id: "experience-3",
    title: "Self-Taught Frontend Developer",
    company: "Personal Projects",
    location: "India",
    period: "2022 - 2023",
    description:
      "Learned and practiced frontend development through personal projects and clones with real-world features.",
    responsibilities: [
      "Created responsive UI using Tailwind CSS and Framer Motion",
      "Built component libraries and reusable UI blocks",
      "Integrated APIs and used TanStack Query for fetching",
      "Practiced clean folder structures and code architecture",
      "Built login/signup flows with JWT-based auth",
    ],
  },
]

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Sujeet-Sharma-Resume.pdf"
    link.download = "Sujeet-Sharma-Resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
            <p className="text-xl text-muted-foreground mb-6">My professional journey and qualifications</p>
            <Button onClick={handleDownload} size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Professional Experience
                  </CardTitle>
                  <CardDescription>Recent roles and hands-on frontend/full-stack projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {experience.map((job) => (
                      <AccordionItem key={job.id} value={job.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <span className="font-medium text-primary">{job.company}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {job.location}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {job.period}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-4 space-y-4">
                            <p className="text-muted-foreground">{job.description}</p>
                            <div>
                              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {job.responsibilities.map((res, idx) => (
                                  <li key={idx}>{res}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Education & Certifications</CardTitle>
                  <CardDescription>Academic background and self-taught learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {education.map((edu) => (
                      <AccordionItem key={edu.id} value={edu.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg">{edu.degree}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <span className="font-medium text-primary">{edu.school}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {edu.location}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {edu.period}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-4 space-y-4">
                            <p className="text-muted-foreground">{edu.description}</p>
                            <div>
                              <h4 className="font-medium mb-2">Achievements:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {edu.achievements.map((ach, idx) => (
                                  <li key={idx}>{ach}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
