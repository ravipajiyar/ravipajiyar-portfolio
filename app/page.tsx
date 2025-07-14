"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  ArrowRight,
  Star,
  Heart,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Chatbot Component
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi! I'm Ravi's AI assistant. Ask me anything about his background, skills, projects, or experience!",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const raviData = {
    personal: {
      name: "Ravi Kumar Pajiyar",
      title: "Computer Science and Engineering Student & Full-Stack Developer",
      location: "Kathmandu, Nepal",
      email: "pajiyargravi20011@gmail.com",
      phone: "+9779841038932",
      website: "www.ravipajiyar.com",
    },
    education: {
      current: "Bachelor of Computer Science and Engineering at Kathmandu University (CGPA: 3.5/4.0)",
      graduation: "Expected 2025",
    },
    experience: [
      "Full-Stack Developer at Procit BV, Netherlands (Remote) - April 2025 to Present",
      "Co-Founder & CTO at Softrflow Pvt. Ltd. (Remote), USA - June 2024 to Present",
      "Research Intern at IOT R&D, Kathmandu University - March 2025 to Present",
      "Internship as Full Stack Developer & LLM Engineer at Yagya Foundry - June 2024 to March 2025",
    ],
    skills: [
      "Programming: JavaScript, Python, C++, TypeScript",
      "Frontend: React.js, Next.js, Tailwind CSS, React Native",
      "Backend: Node.js, Express.js, Django, WebSockets",
      "AI & Data Science: LLMs, NLP, Computer Vision, AI Integration",
      "Databases: MongoDB, MySQL, PostgreSQL",
      "Tools: Git, GitHub",
    ],
    projects: [
      "Netflix Analytics - Interactive content analysis dashboard using React, Flask, and Plotly",
      "ProjectNest - MERN-based project management with role-based views",
      "CourseCraft - AI-powered course generation platform using Generative AI",
      "Health Lens - React Native app with AI-powered nutrition guidance",
      "Agniparikshya - Emergency route optimization system using Dijkstra's algorithm",
    ],
    achievements: [
      "Hult Prize Participant 2024/2025 with Health Lens project",
      "Data Fellowship 2024 - DataCamp",
      "Winner of Sustainable Development category at Kuhackfest 2023",
      "Developer Head at KUYRCC (2024/25)",
    ],
  }

  const generateResponse = (userInput: string) => {
    const input = userInput.toLowerCase()

    if (input.includes("skill") || input.includes("technology") || input.includes("programming")) {
      return `Ravi is skilled in multiple technologies: ${raviData.skills.join(", ")}. He's particularly strong in full-stack development with React.js, Node.js, and has experience with AI/ML technologies.`
    }

    if (input.includes("project")) {
      return `Ravi has worked on several impressive projects: ${raviData.projects.slice(0, 3).join("; ")}. His projects span from AI-powered applications to emergency response systems.`
    }

    if (input.includes("experience") || input.includes("work") || input.includes("job")) {
      return `Ravi has diverse professional experience: ${raviData.experience.slice(0, 2).join("; ")}. He's currently working as a Full-Stack Developer at Procit BV and is also a Co-Founder & CTO at Softrflow.`
    }

    if (input.includes("education") || input.includes("study") || input.includes("university")) {
      return `Ravi is pursuing ${raviData.education.current}, graduating in ${raviData.education.graduation}. He has maintained a strong academic record with a CGPA of 3.5/4.0.`
    }

    if (input.includes("achievement") || input.includes("award") || input.includes("recognition")) {
      return `Ravi has several notable achievements: ${raviData.achievements.join("; ")}. He's particularly proud of his Hult Prize participation and winning the Sustainable Development category at Kuhackfest 2023.`
    }

    if (input.includes("contact") || input.includes("reach") || input.includes("email") || input.includes("phone")) {
      return `You can contact Ravi at ${raviData.personal.email}, call him at ${raviData.personal.phone}, or visit his website at ${raviData.personal.website}. He's based in ${raviData.personal.location}.`
    }

    if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("machine learning")) {
      return "Ravi is passionate about AI and ML! He has experience with LLMs, NLP, Computer Vision, and AI Integration. He's worked on projects like CourseCraft (AI-powered course generation) and Health Lens (AI nutrition guidance). He's also conducting research on AI-driven structural health monitoring."
    }

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return `Hello! I'm here to tell you about Ravi Kumar Pajiyar, a talented ${raviData.personal.title} from ${raviData.personal.location}. What would you like to know about him?`
    }

    return "I'd be happy to tell you more about Ravi! You can ask me about his skills, projects, work experience, education, achievements, or how to contact him. What interests you most?"
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = { role: "bot", content: generateResponse(input) }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-black dark:bg-black rounded-lg shadow-2xl border border-purple-900/50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-900/50 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Ask about Ravi</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 dark:bg-gray-800 text-purple-400"
                    }`}
                  >
                    {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-900 dark:bg-gray-900 text-gray-100 dark:text-gray-100 border border-purple-900/50"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-800 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="bg-gray-900 dark:bg-gray-900 p-3 rounded-lg border border-purple-900/50">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-900/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Ravi's skills, projects, experience..."
                className="flex-1 px-3 py-2 border border-purple-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900 dark:bg-gray-900 text-white text-sm"
              />
              <Button onClick={handleSend} size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

// Logo Component
function Logo() {
  return (
    <div className="flex items-center">
      <div className="text-3xl font-bold text-blue-400 mr-1">R</div>
      <div className="text-3xl font-bold text-purple-400">P</div>
    </div>
  )
}

// Project Detail Modal
function ProjectDetailModal({ project, isOpen, onClose }: any) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 border border-purple-900/50 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Key Features & Highlights</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="text-purple-400 mt-1">•</div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Rate this project</h3>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${star <= 4 ? "text-yellow-400" : "text-gray-600"}`}
                        fill={star <= 4 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, index: number) => (
                    <Badge key={index} className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                    <FileText className="w-4 h-4 mr-2" /> Download Report
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-900/20">
                    <Github className="w-4 h-4 mr-2" /> View on GitHub
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-gray-400 hover:bg-gray-800">
                    <Heart className="w-4 h-4 mr-2" /> Like
                  </Button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <div className="bg-gray-800 p-2 flex justify-between items-center">
                  <div className="text-sm font-medium text-blue-400">{project.title}</div>
                  <div className="flex gap-2">
                    {project.tabs.map((tab: string, index: number) => (
                      <div
                        key={index}
                        className={`text-xs px-2 py-1 rounded ${
                          index === 0
                            ? "bg-purple-600/20 text-purple-400"
                            : "text-gray-400 hover:bg-gray-700/50 cursor-pointer"
                        }`}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <Image
                    src={project.screenshot || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full rounded border border-gray-800"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-4">
                  {project.roles.map((role: any, index: number) => (
                    <div key={index} className="bg-gray-800 rounded p-3 border border-gray-700">
                      <div className="text-sm font-medium text-white mb-2">{role.name}</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {role.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start gap-1">
                            <span className="text-xs text-purple-400">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 p-4 border-t border-gray-800">
                  {project.badges.map((badge: string, index: number) => (
                    <Badge key={index} className="bg-gray-800 text-gray-300 border-gray-700">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Certificate Slider Component
function CertificateSlider({ certificates }: { certificates: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, certificates.length])

  const handleMouseEnter = () => {
    setAutoplay(false)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
  }

  return (
    <div className="relative w-full overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 w-full px-4">
        <button
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="relative h-[350px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="grid md:grid-cols-3 gap-6 h-full">
              {[currentIndex, (currentIndex + 1) % certificates.length, (currentIndex + 2) % certificates.length].map(
                (index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 h-full"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{certificates[index].title}</h3>
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                          {certificates[index].icon}
                        </div>
                      </div>
                      <p className="text-purple-400 mb-2">{certificates[index].provider}</p>
                      <p className="text-gray-400 text-sm">{certificates[index].date}</p>
                      <div className="mt-auto pt-4">
                        <Button className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-400 w-full">
                          View Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-purple-500" : "bg-gray-600"
            } transition-colors`}
            aria-label={`Go to certificate ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "AI/ML", level: 75 },
    { name: "React Native", level: 80 },
  ]

  const projects = [
    {
      title: "ProjectNest",
      description:
        "Developed a MERN-based project management app with role-based views for Admin, Supervisor, and Student. Enabled task allocation, real-time chat, project tracking, and secure access with API integration.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/ravipajiyar/ProjectNest",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Implemented role-based authentication system for Admin, Supervisor, and Student access",
        "Developed real-time chat functionality using Socket.io for team communication",
        "Created comprehensive project tracking system with milestone management",
        "Integrated secure REST API endpoints with JWT authentication",
      ],
      tags: ["mern", "project-management", "real-time"],
      tabs: ["Features", "Roles", "Login"],
      roles: [
        {
          name: "Admin Dashboard",
          features: ["Project Overview", "User Management", "Access Control"],
        },
        {
          name: "Supervisor Portal",
          features: ["Task Allocation", "Progress Tracking", "Team Chat"],
        },
        {
          name: "Student View",
          features: ["Task Management", "Collaboration", "File Sharing"],
        },
      ],
      badges: ["Real-time Chat", "Project Tracking", "Secure API Access"],
      screenshot: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Netflix Analytics",
      description:
        "Developed a web app using React, Flask, and Plotly to visualize Netflix content trends, genres, and user sentiments with interactive filtering and insights for content strategy.",
      tech: ["React", "Flask", "Plotly", "Python"],
      github: "https://github.com/ravipajiyar/Netflix-Analytics",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Built interactive dashboards for content analysis using Plotly and React",
        "Implemented data processing pipeline with Python and Flask backend",
        "Created filtering system for genre, release date, and rating analysis",
        "Designed sentiment analysis visualization for user reviews and feedback",
      ],
      tags: ["data-visualization", "analytics", "react", "python"],
      tabs: ["Dashboard", "Filters", "Settings"],
      roles: [
        {
          name: "Content Analysis",
          features: ["Genre Distribution", "Release Trends", "Rating Analysis"],
        },
        {
          name: "User Insights",
          features: ["Viewing Patterns", "Engagement Metrics", "Retention Data"],
        },
        {
          name: "Recommendation",
          features: ["Content Suggestions", "Similarity Analysis", "Trend Prediction"],
        },
      ],
      badges: ["Data Visualization", "Interactive Filters", "API Integration"],
      screenshot: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "CourseCraft",
      description:
        "AI-powered course generation platform using MERN stack and Generative AI to create structured study modules and content for targeted subjects.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      github: "https://github.com/ravipajiyar/Course-Craft",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Integrated Generative AI models for automatic course content creation",
        "Built customizable templates for different learning styles and subjects",
        "Implemented content validation and quality assurance system",
        "Created user-friendly interface for course customization and export",
      ],
      tags: ["ai", "education", "mern", "generative-ai"],
      tabs: ["Generator", "Templates", "Export"],
      roles: [
        {
          name: "Course Creator",
          features: ["Subject Selection", "Module Design", "Content Generation"],
        },
        {
          name: "Template Manager",
          features: ["Layout Options", "Style Customization", "Format Selection"],
        },
        {
          name: "Export Tools",
          features: ["PDF Export", "LMS Integration", "Sharing Options"],
        },
      ],
      badges: ["AI-Powered", "Customizable Templates", "Multi-format Export"],
      screenshot: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Health Lens",
      description:
        "React Native app with AI-powered food scanning for nutritional analysis and personalized diet recommendations.",
      tech: ["React Native", "Node.js", "AI", "Computer Vision"],
      github: "https://github.com/ravipajiyar/HealthLens",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Developed computer vision system for food recognition from photos",
        "Created nutritional database with over 10,000 food items",
        "Implemented personalized recommendation engine based on dietary goals",
        "Built cross-platform mobile app with React Native for iOS and Android",
      ],
      tags: ["mobile-app", "health-tech", "ai", "react-native"],
      tabs: ["Scan", "Analysis", "History"],
      roles: [
        {
          name: "Food Scanner",
          features: ["Image Recognition", "Barcode Scanning", "Manual Entry"],
        },
        {
          name: "Nutrition Panel",
          features: ["Calorie Breakdown", "Nutrient Analysis", "Dietary Flags"],
        },
        {
          name: "Recommendation",
          features: ["Meal Suggestions", "Alternative Foods", "Goal Tracking"],
        },
      ],
      badges: ["AI Vision", "Cross-Platform", "Personalized Insights"],
      screenshot: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Agniparikshya",
      description:
        "Emergency route optimization system using Dijkstra's algorithm and OpenStreetMap for fire brigade assistance in congested urban areas.",
      tech: ["JavaScript", "OpenStreetMap", "Algorithms"],
      github: "https://github.com/ravipajiyar/Agniparkishya",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Implemented Dijkstra's algorithm for optimal route calculation in emergency scenarios",
        "Integrated real-time traffic data for dynamic route adjustments",
        "Created interactive map interface with OpenStreetMap for emergency responders",
        "Built system for marking and avoiding high-risk or inaccessible areas",
      ],
      tags: ["emergency-response", "algorithms", "mapping", "optimization"],
      tabs: ["Map", "Routes", "Traffic"],
      roles: [
        {
          name: "Dispatcher View",
          features: ["Emergency Logging", "Resource Allocation", "Route Planning"],
        },
        {
          name: "Responder Interface",
          features: ["Navigation", "Status Updates", "Obstacle Reporting"],
        },
        {
          name: "Admin Dashboard",
          features: ["System Monitoring", "Data Analysis", "Configuration"],
        },
      ],
      badges: ["Route Optimization", "Real-time Updates", "Interactive Maps"],
      screenshot: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "RentNread",
      description:
        "Responsive web platform using Django and SQL for online book renting with interactive reader and bookmarking features.",
      tech: ["Django", "SQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/ravipajiyar/rentNread",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Built comprehensive book catalog with advanced search and filtering",
        "Implemented secure user authentication and rental management system",
        "Created interactive online reader with bookmarking and note-taking",
        "Designed responsive interface for seamless experience across devices",
      ],
      tags: ["web-app", "django", "e-library", "responsive-design"],
      tabs: ["Browse", "Reader", "Account"],
      roles: [
        {
          name: "User Dashboard",
          features: ["Rental History", "Bookmarks", "Recommendations"],
        },
        {
          name: "Book Reader",
          features: ["Page Navigation", "Bookmarking", "Night Mode"],
        },
        {
          name: "Admin Panel",
          features: ["Inventory Management", "User Management", "Analytics"],
        },
      ],
      badges: ["Online Reader", "Rental System", "Responsive Design"],
      screenshot: "/placeholder.svg?height=300&width=400",
    },
  ]

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Procit BV",
      location: "Netherlands (Remote)",
      period: "April 2025 - Present",
      description:
        "Contributing to Smartflow project, developing scalable web and mobile applications with focus on performance optimization.",
    },
    {
      title: "Co-Founder & CTO",
      company: "Softrflow Pvt. Ltd.",
      location: "USA (Remote)",
      period: "June 2024 - Present",
      description:
        "Leading product development for e-wallet fraud detection system and educational trip management platform.",
    },
    {
      title: "Research Intern",
      company: "IOT R&D, Kathmandu University",
      location: "Nepal",
      period: "March 2025 - Present",
      description:
        "Conducting IoT and AI-based research on natural disaster prediction using LoRaWAN and computer vision.",
    },
    {
      title: "Full Stack Developer & LLM Engineer",
      company: "Yagya Foundry Pvt. Ltd.",
      location: "Nepal",
      period: "June 2024 - March 2025",
      description:
        "Contributed to Rishi Chat development and led multi-threat detection project using CCTV and computer vision.",
    },
  ]

  const certificates = [
    {
      title: "Associate Data Analyst",
      provider: "DataCamp",
      date: "2024",
      icon: "✓",
    },
    {
      title: "JavaScript Core Concepts",
      provider: "ScalerTopics",
      date: "2023",
      icon: "✓",
    },
    {
      title: "Unsupervised Learning in Python",
      provider: "DataCamp",
      date: "2024",
      icon: "✓",
    },
    {
      title: "Introduction to Statistics",
      provider: "Coursera",
      date: "2023",
      icon: "✓",
    },
    {
      title: "React & Redux",
      provider: "Udemy",
      date: "2023",
      icon: "✓",
    },
    {
      title: "Machine Learning Fundamentals",
      provider: "Stanford Online",
      date: "2024",
      icon: "✓",
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2024",
      icon: "✓",
    },
    {
      title: "Full Stack Web Development",
      provider: "freeCodeCamp",
      date: "2022",
      icon: "✓",
    },
    {
      title: "Data Science with Python",
      provider: "IBM",
      date: "2023",
      icon: "✓",
    },
  ]

  const techStack = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React Native", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 75 },
        { name: "WebSockets", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 85 },
        { name: "C++", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      category: "AI & Data",
      skills: [
        { name: "LLMs", level: 80 },
        { name: "NLP", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 75 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Figma", level: 80 },
      ],
    },
  ]

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-purple-900/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Logo />
              <div className="ml-3 text-xl font-bold text-white">
                Ravi <span className="text-gray-400">| Computer Engineer</span>
              </div>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Tech Stack", id: "tech-stack" },
                { name: "Certificates", id: "certificates" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hey, This is{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ravi
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science & Engineering Student
              <br />
              <span className="text-purple-400">Full-Stack Developer & AI Enthusiast</span>
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="https://github.com/ravipajiyar" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/ravipajiyar"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:pajiyargravi20011@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <Image
                src="/ravi-photo.jpg"
                alt="Ravi Kumar Pajiyar"
                width={320}
                height={320}
                className="relative z-10 rounded-full border-4 border-purple-400/50 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </section>

      {/* Overview Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Overview.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Computer Engineering graduate passionate about solving real-world challenges through technology.
                Currently engaged in research on AI-driven structural health monitoring and disaster resilience. Eager
                to pursue advanced studies in Artificial Intelligence to develop sustainable and intelligent solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With hands-on experience in full-stack development using React.js, TypeScript, Node.js, and Django, I
                specialize in building scalable web applications and have a strong foundation in AI/ML technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>Kathmandu University</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                  <p className="text-gray-400 text-sm">Full-stack web & mobile app development</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI & ML</h3>
                  <p className="text-gray-400 text-sm">LLMs, NLP, Computer Vision integration</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Research</h3>
                  <p className="text-gray-400 text-sm">IoT, AI-driven structural monitoring</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Leadership</h3>
                  <p className="text-gray-400 text-sm">Project management & team coordination</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/80">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.location}</p>
                        </div>
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section id="tech-stack" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-center mb-6 text-purple-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/80">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Showcasing my latest work in web development, mobile apps, and AI integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-gray-300 mb-4 flex-1 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-purple-900/30 text-purple-400 border-purple-900/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-800/80 text-gray-400 border-gray-700/50">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                      <Link
                        href={project.github}
                        className="text-purple-400 hover:text-white transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </Link>

                      <div className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-400 px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-400 border border-purple-600/30">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: 15, icon: Code },
              { label: "Years Experience", value: 3, icon: Briefcase },
              { label: "Technologies", value: 20, icon: Zap },
              { label: "Certifications", value: 6, icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} />+
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className="py-20 bg-black/80">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <CertificateSlider certificates={certificates} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">pajiyargravi20011@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+977 9841038932</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-none"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/30 bg-black/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Logo />
              <p className="text-gray-400 ml-3">© 2025 Ravi Kumar Pajiyar. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com/ravipajiyar" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/ravipajiyar"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:pajiyargravi20011@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}
