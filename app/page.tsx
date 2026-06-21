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
  BookOpen,
  FlaskConical,
  Database,
  Server,
  Cpu,
  Globe,
  Wrench
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import developerAnimation from '../public/developer-animation.json';

// PreLoader Component
function PreLoader({ onComplete }: { onComplete: () => void }) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [answer, setAnswer] = useState("")
  const [showPuzzle, setShowPuzzle] = useState(false)
  const [error, setError] = useState("")
  const [terminalHeight, setTerminalHeight] = useState(0)
  
  const bootupPhrases = [
    "Initializing quantum matrix...",
    "Scanning neural pathways...",
    "Locating Ravi Pajiyar's neural signature...",
    "Establishing secure connection...",
    "Loading interface protocols...",
    "Syncing quantum databases...",
    "Calibrating neural interface..."
  ]

  useEffect(() => {
    if (currentPhase < bootupPhrases.length) {
      const timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1)
        setTerminalHeight(prev => prev + 30) // Increase terminal height as lines are added
      }, 800)
      return () => clearTimeout(timer)
    } else if (currentPhase === bootupPhrases.length) {
      setShowPuzzle(true)
    }
  }, [currentPhase])

  const handlePuzzleSubmit = () => {
    if (answer === "7") {
      setError("")
      setCurrentPhase(currentPhase + 1)
      setTimeout(() => {
        onComplete()
      }, 2000)
    } else {
      setError("Incorrect answer. Please try again.")
    }
  }

  // Generate random positions for background grid
  const gridItems = [...Array(100)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1
  }))

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0">
        {gridItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-500/30"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Circular gradient animations */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Terminal window */}
      <motion.div
        className="relative z-10 w-full max-w-2xl mx-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal header */}
        <div className="bg-gray-800/90 rounded-t-lg border-b border-purple-500/30 p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono ml-2">ravi@portfolio:~</div>
        </div>

        {/* Terminal content */}
        <motion.div 
          className="bg-gray-900/90 rounded-b-lg border border-t-0 border-purple-500/30 backdrop-blur-xl"
          animate={{ height: Math.max(350, terminalHeight) }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 font-mono text-sm">
            {bootupPhrases.slice(0, currentPhase).map((phrase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-green-400 mb-2 flex items-start gap-2"
              >
                <span className="text-purple-400">$</span>
                <span className="flex-1">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block whitespace-nowrap overflow-hidden"
                    style={{ textIndent: "0" }}
                  >
                    {phrase}
                  </motion.span>
                </span>
              </motion.div>
            ))}

            {showPuzzle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 border border-purple-500/30 rounded-lg p-6 bg-black/50"
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-purple-400 font-bold mb-4 text-center"
                >
                  SECURITY VERIFICATION REQUIRED
                </motion.div>
                <div className="text-white mb-4 text-center">Complete the verification: 5 + 2 = ?</div>
                <div className="flex flex-col gap-4 items-center">
                  <motion.div className="flex gap-4 w-full max-w-xs" whileHover={{ scale: 1.02 }}>
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handlePuzzleSubmit()}
                      className="flex-1 bg-gray-800/50 border-2 border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter answer"
                    />
                    <motion.button
                      onClick={handlePuzzleSubmit}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit
                    </motion.button>
                  </motion.div>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}
                  <motion.button
                    onClick={onComplete}
                    className="text-purple-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    Skip Verification
                    <span className="text-lg">→</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {currentPhase > bootupPhrases.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-center"
              >
                <div className="text-green-400 font-bold text-lg mb-2">Access Granted</div>
                <motion.div 
                  className="text-purple-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Welcome to Ravi's Portfolio
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

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
      "Mid-Level Full Stack Developer & Team Lead (CRM Product) at Skill Prompt - January 2026 to Present",
      "Managing Director & Full Stack Developer at Suindra Groups Pvt. Ltd. (Part-Time) - June 2026 to Present",
      "Full-Stack Developer at Procit BV, Netherlands (Remote) - April 2025 to December 2025",
      "Research Intern at IOT R&D, Kathmandu University - March 2025 to Present",
      "Internship as Full Stack Developer & LLM Engineer at Yagya Foundry - June 2024 to March 2025",
      "Full Stack Web Developer at Kathmandu University Youth Red Cross Circle - November 2024 to April 2025",
      "Open Source Contributor at IAGA Sentinel - June 2026 to Present",
    ],
    research: [
      "Multi Scale Deep Learning for Hairline Crack Detection and Analysis using Hybrid CNN and Transformer Architecture - Submitted for publication",
      "High-Quality Neural Text-to-Speech for Low-Resource Nepali: A Data-Efficient Transfer Learning Approach - Submitted for publication",
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
      "Buynow - Full-fledged multi-vendor e-commerce website and mobile app",
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

    if (input.includes("research") || input.includes("paper") || input.includes("publication")) {
      return `Ravi has been involved in academic research: ${raviData.research.join("; ")}.`
    }

    if (input.includes("experience") || input.includes("work") || input.includes("job")) {
      return `Ravi has diverse professional experience: ${raviData.experience.slice(0, 2).join("; ")}. He's currently working as a Team Lead at Skill Prompt and is also Managing Director & Full Stack Developer at Suindra Groups.`
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
      return "Ravi is passionate about AI and ML! He has experience with LLMs, NLP, Computer Vision, and AI Integration. He's worked on projects like CourseCraft (AI-powered course generation) and Health Lens (AI nutrition guidance). He's also conducting research on AI-driven structural health monitoring and contributing to IAGA Sentinel, an AI governance and compliance platform."
    }

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return `Hello! I'm here to tell you about Ravi Kumar Pajiyar, a talented ${raviData.personal.title} from ${raviData.personal.location}. What would you like to know about him?`
    }

    return "I'd be happy to tell you more about Ravi! You can ask me about his skills, projects, work experience, research, education, achievements, or how to contact him. What interests you most?"
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
      <Image 
        src="/ravifinallogo.png" 
        alt="Ravi Logo"
        width={120}
        height={150}
        className="h-16 w-auto"
      />
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
                  <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-900/20" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> View on GitHub
                    </Link>
                  </Button>
                  {project.website && project.website !== "#" && (
                    <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20" asChild>
                      <Link href={project.website} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="w-4 h-4 mr-2" /> Live Site
                      </Link>
                    </Button>
                  )}
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
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showIagaAlert, setShowIagaAlert] = useState(false)
  const [experienceTab, setExperienceTab] = useState<"work" | "research">("work")

  useEffect(() => {
    if (!loading) {
      setShowIagaAlert(true)
      const timer = setTimeout(() => setShowIagaAlert(false), 10000)
      return () => clearTimeout(timer)
    }
  }, [loading])

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
      title: "Buynow E-Commerce Platform & App",
      description:
        "Developed a full-featured multi-vendor e-commerce platform and mobile application as part of a two-developer team, contributing to both frontend and backend development. Built customer, seller, admin, and support portals with features including product management, advanced search and filtering, shopping cart, secure checkout, order tracking, reviews, real-time chat, seller analytics, advertising campaigns, ticket management, and refund processing. Integrated multiple payment gateways including eSewa, Khalti, Fonepay Dynamic QR, and Cash on Delivery, along with Nepal Can Move (NCM) logistics for shipping and tracking. Developed scalable backend services, authentication systems, notifications, and cloud storage integrations, delivering a complete end-to-end e-commerce solution for web and mobile platforms.",
      tech: ["React", "React Native", "Node.js", "MongoDB"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Built customer, seller, admin, and support portals with role-based access",
        "Implemented product management, advanced search/filtering, cart, and secure checkout",
        "Added order tracking, reviews, real-time chat, seller analytics, and advertising campaigns",
        "Integrated eSewa, Khalti, Fonepay Dynamic QR, Cash on Delivery, and NCM logistics for shipping",
        "Built ticket management and refund processing workflows for customer support",
        "Developed scalable backend services, authentication, notifications, and cloud storage integration",
      ],
      tags: ["ecommerce", "multi-vendor", "react-native", "payments"],
      tabs: ["Customer", "Seller", "Admin"],
      roles: [
        {
          name: "Customer Portal",
          features: ["Product Browsing", "Cart & Checkout", "Order Tracking"],
        },
        {
          name: "Seller Portal",
          features: ["Product Management", "Analytics", "Ad Campaigns"],
        },
        {
          name: "Admin & Support",
          features: ["Ticket Management", "Refunds", "Platform Oversight"],
        },
      ],
      badges: ["Multi-Vendor", "Multi-Payment Gateway", "Web + Mobile"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "ProjectNest",
      description:
        "Developed a MERN-based project management app with role-based views for Admin, Supervisor, and Student. Enabled task allocation, real-time chat, project tracking, and secure access with API integration.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/ravipajiyar/ProjectNest",
      website: "#",
      image: "/projectnest.svg",
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
      screenshot: "/projectnest.svg",
    },
    {
      title: "Netflix Analytics",
      description:
        "Developed a web app using React, Flask, and Plotly to visualize Netflix content trends, genres, and user sentiments with interactive filtering and insights for content strategy.",
      tech: ["React", "Flask", "Plotly", "Python"],
      github: "https://github.com/ravipajiyar/Netflix-Analytics",
      website: "#",
      image: "/netflix.svg",
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
      screenshot: "/netflix.svg",
    },
    {
      title: "CourseCraft",
      description:
        "AI-powered course generation platform using MERN stack and Generative AI to create structured study modules and content for targeted subjects.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      github: "https://github.com/ravipajiyar/Course-Craft",
      website: "#",
      image: "/coursecraft.svg",
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
      screenshot: "/coursecraft.svg",
    },
    {
      title: "Health Lens",
      description:
        "React Native app with AI-powered food scanning for nutritional analysis and personalized diet recommendations.",
      tech: ["React Native", "Node.js", "AI", "Computer Vision"],
      github: "https://github.com/ravipajiyar/HealthLens",
      website: "#",
      image: "/healthlensmob.svg",
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
      screenshot: "/healthlensmob.svg",
    },
    {
      title: "Agniparikshya",
      description:
        "Emergency route optimization system using Dijkstra's algorithm and OpenStreetMap for fire brigade assistance in congested urban areas.",
      tech: ["JavaScript", "OpenStreetMap", "Algorithms"],
      github: "https://github.com/ravipajiyar/Agniparkishya",
      website: "#",
      image: "/agniparikshya.svg",
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
      screenshot: "/agniparikshya.svg",
    },
    {
      title: "RentNread",
      description:
        "Responsive web platform using Django and SQL for online book renting with interactive reader and bookmarking features.",
      tech: ["Django", "SQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/ravipajiyar/rentNread",
      website: "#",
      image: "/rentandread.svg",
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
      screenshot: "/rentandread.svg",
    },
    {
      title: "Sticky Notes",
      description:
        "A lightweight, intuitive sticky notes web app for quickly jotting down ideas, to-dos, and reminders, featuring a clean drag-and-drop interface with persistent storage so notes are always there when you come back.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/ravipajiyar/Sticky-Note",
      website: "https://sticky-notes-pro.onrender.com/",
      image: "/placeholder.svg",
      features: [
        "Drag-and-drop sticky notes with customizable colors",
        "Persistent local storage so notes remain after refresh",
        "Quick create, edit, and delete workflow for fast note-taking",
        "Responsive layout for desktop and mobile use",
      ],
      tags: ["productivity", "react", "notes-app"],
      tabs: ["Board", "Notes", "Settings"],
      roles: [
        {
          name: "Note Board",
          features: ["Drag & Drop", "Color Coding", "Resizing"],
        },
        {
          name: "Note Editor",
          features: ["Quick Edit", "Auto-Save", "Delete"],
        },
        {
          name: "Storage",
          features: ["Persistent Save", "Local Sync", "Reload Recovery"],
        },
      ],
      badges: ["Drag & Drop", "Persistent Storage", "Lightweight"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "Red Cross Website Redesign",
      description:
        "Led the redesign and rebuild of the official Kathmandu University Youth Red Cross Circle (KUYRCC) website, delivering a fully mobile-responsive experience built with React.js to better showcase the organization's activities, events, and volunteer programs.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/ravipajiyar/redcross-website",
      website: "https://yrcc.ku.edu.np/",
      image: "/placeholder.svg",
      features: [
        "Rebuilt the beta version of the site using React.js with a fully responsive layout",
        "Collaborated with the Media Head on creative direction and content presentation",
        "Implemented sections for events, programs, gallery, and volunteer information",
        "Conducted research and incorporated feedback to optimize user experience",
      ],
      tags: ["nonprofit", "react", "responsive-design"],
      tabs: ["Home", "Events", "About"],
      roles: [
        {
          name: "Public Site",
          features: ["Events Listing", "Gallery", "Volunteer Info"],
        },
        {
          name: "Content Layer",
          features: ["Media Integration", "Responsive Sections", "SEO Basics"],
        },
        {
          name: "Maintenance",
          features: ["Content Updates", "Bug Fixes", "Performance Tuning"],
        },
      ],
      badges: ["Mobile-Responsive", "Nonprofit", "Developer Head Led"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "AI Cyber Law",
      description:
        "A research-driven platform exploring the intersection of artificial intelligence and cyber law, providing resources, case analysis, and tools to help understand legal and compliance considerations around AI systems.",
      tech: ["React", "Node.js", "AI"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Curated repository of AI-related cyber law cases and regulations",
        "Searchable knowledge base with topic-based filtering",
        "Summaries of key legal frameworks relevant to AI governance",
        "Clean, content-first reading experience",
      ],
      tags: ["ai", "legal-tech", "research"],
      tabs: ["Library", "Cases", "Resources"],
      roles: [
        {
          name: "Knowledge Base",
          features: ["Case Library", "Topic Filters", "Search"],
        },
        {
          name: "Content Layer",
          features: ["Article Summaries", "Tagging", "Citations"],
        },
        {
          name: "Admin",
          features: ["Content Management", "Updates", "Moderation"],
        },
      ],
      badges: ["AI Governance", "Legal-Tech", "Research"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "Expense Tracker",
      description:
        "A personal finance web app for logging daily expenses, categorizing spending, and visualizing monthly trends to help users stay on top of their budget.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Add, edit, and categorize expenses with custom tags",
        "Monthly and category-wise spending visualizations",
        "Budget limit alerts and progress tracking",
        "Exportable expense reports",
      ],
      tags: ["fintech", "react", "dashboard"],
      tabs: ["Overview", "Add Expense", "Reports"],
      roles: [
        {
          name: "Dashboard",
          features: ["Spending Overview", "Category Breakdown", "Trends"],
        },
        {
          name: "Entry Form",
          features: ["Quick Add", "Categories", "Notes"],
        },
        {
          name: "Reports",
          features: ["Monthly Reports", "Export", "Budget Alerts"],
        },
      ],
      badges: ["Personal Finance", "Data Visualization", "Budgeting"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "Finance Manager",
      description:
        "A broader financial management tool for tracking income, expenses, savings goals, and investments in one consolidated dashboard, built to give users a clear picture of their overall financial health.",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Unified dashboard for income, expenses, and savings goals",
        "Investment tracking with simple performance summaries",
        "Custom financial goal setting and progress tracking",
        "Secure authentication and data encryption",
      ],
      tags: ["fintech", "dashboard", "react"],
      tabs: ["Dashboard", "Goals", "Investments"],
      roles: [
        {
          name: "Overview",
          features: ["Income vs Expense", "Net Worth", "Trends"],
        },
        {
          name: "Goals",
          features: ["Savings Targets", "Progress Bars", "Reminders"],
        },
        {
          name: "Investments",
          features: ["Portfolio Summary", "Performance", "Allocation"],
        },
      ],
      badges: ["Financial Planning", "Secure", "Dashboard"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "SLR Parser",
      description:
        "A compiler design project implementing an SLR (Simple LR) parser that builds parsing tables from a given context-free grammar and validates input strings against it, built as part of academic coursework in compiler construction.",
      tech: ["Python", "Algorithms", "Compiler Design"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Generates LR(0) item sets and SLR parsing tables from input grammar",
        "Validates input strings using shift-reduce parsing logic",
        "Visualizes parsing steps and stack states for learning purposes",
        "Handles grammar conflict detection and reporting",
      ],
      tags: ["compiler-design", "academic", "parsing"],
      tabs: ["Grammar", "Parse Table", "Trace"],
      roles: [
        {
          name: "Grammar Input",
          features: ["Rule Entry", "Validation", "Conflict Detection"],
        },
        {
          name: "Parse Table",
          features: ["Action Table", "Goto Table", "Item Sets"],
        },
        {
          name: "Parser Trace",
          features: ["Step-by-Step Trace", "Stack View", "Accept/Reject"],
        },
      ],
      badges: ["Compiler Design", "Academic Project", "Algorithm-Heavy"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "Saloon Management System",
      description:
        "A management system built for salons to handle appointment booking, staff scheduling, service catalogs, and billing, streamlining day-to-day salon operations for owners and customers alike.",
      tech: ["React", "Node.js", "MySQL"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Online appointment booking with staff and time-slot selection",
        "Staff scheduling and availability management",
        "Service catalog with pricing and duration management",
        "Billing and invoice generation for completed services",
      ],
      tags: ["booking-system", "management", "react"],
      tabs: ["Bookings", "Staff", "Billing"],
      roles: [
        {
          name: "Customer Booking",
          features: ["Service Selection", "Staff Pick", "Time Slots"],
        },
        {
          name: "Staff Panel",
          features: ["Schedule View", "Availability", "Service Updates"],
        },
        {
          name: "Admin Billing",
          features: ["Invoicing", "Revenue Tracking", "Service Pricing"],
        },
      ],
      badges: ["Booking System", "Salon Ops", "Billing"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "Suindra Groups Website",
      description:
        "Corporate website for Suindra Groups Pvt. Ltd., presenting the organization's ventures including Buynow, Sellnow, and Giftnow, along with company information, leadership, and contact details for partners and customers.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Showcases the organization's ventures: Buynow, Sellnow, and Giftnow",
        "Company overview, leadership, and contact sections",
        "Responsive corporate design optimized for all devices",
        "SEO-friendly structure for better discoverability",
      ],
      tags: ["corporate-website", "react", "nextjs"],
      tabs: ["Home", "Ventures", "Contact"],
      roles: [
        {
          name: "Home",
          features: ["Hero Section", "Venture Highlights", "News"],
        },
        {
          name: "Ventures",
          features: ["Buynow", "Sellnow", "Giftnow"],
        },
        {
          name: "Contact",
          features: ["Inquiry Form", "Location", "Social Links"],
        },
      ],
      badges: ["Corporate Site", "Multi-Venture", "Responsive"],
      screenshot: "/placeholder.svg",
    },
    {
      title: "Todo App",
      description:
        "A clean and minimal to-do list application for managing daily tasks, featuring task prioritization, due dates, and progress tracking to help users stay organized.",
      tech: ["React", "JavaScript", "CSS"],
      github: "#",
      website: "#",
      image: "/placeholder.svg",
      features: [
        "Create, complete, and delete tasks with a simple interface",
        "Task prioritization and due-date tagging",
        "Progress tracking with completed vs pending task counts",
        "Persistent storage so tasks remain across sessions",
      ],
      tags: ["productivity", "react", "todo"],
      tabs: ["Tasks", "Completed", "Settings"],
      roles: [
        {
          name: "Task List",
          features: ["Add Task", "Mark Complete", "Delete"],
        },
        {
          name: "Organization",
          features: ["Priority Tags", "Due Dates", "Filters"],
        },
        {
          name: "Tracking",
          features: ["Progress Stats", "Completed View", "History"],
        },
      ],
      badges: ["Minimal", "Task Management", "Productivity"],
      screenshot: "/placeholder.svg",
    },
  ]

  // Work Experience — ordered newest to oldest
  const workExperiences = [
    {
      title: "Mid-Level Full Stack Developer & Team Lead (CRM Product)",
      company: "Skill Prompt",
      location: "Remote, Full-Time",
      period: "January 2026 - Present",
      description:
        "Leading the CRM product team as Team Lead, managing both new feature development and bug fixes across frontend and backend. Responsible for technical direction, code quality, and coordinating delivery across the team.",
    },
    {
      title: "Managing Director & Full Stack Developer",
      company: "Suindra Groups Pvt. Ltd.",
      location: "Part-Time",
      period: "June 2026 - Present",
      description:
        "Maintain the Buynow e-commerce website and mobile app, and oversee the development and progress of Sellnow and Giftnow under the organization. Involved in development work as well as broader decisional and strategic matters for the group.",
    },
    {
      title: "Open Source Contributor",
      company: "IAGA Sentinel",
      location: "Remote",
      period: "June 2026 - Present",
      description:
        "Contributing to IAGA Sentinel, an AI governance and compliance platform focused on creating verifiable audit trails for AI agents and supporting EU AI Act requirements. Collaborating with an international development team, exploring AI security and governance concepts, participating in open-source workflows, and gaining hands-on experience with modern software engineering practices, APIs, and AI infrastructure.",
    },
    {
      title: "Full-Stack Developer",
      company: "Procit BV",
      location: "Netherlands (Remote)",
      period: "April 2025 - December 2025",
      description:
        "Contributed to Smartflow project, developing scalable web and mobile applications with focus on performance optimization.",
    },
    {
      title: "Full Stack Developer & LLM Engineer",
      company: "Yagya Foundry Pvt. Ltd.",
      location: "Nepal",
      period: "June 2024 - March 2025",
      description:
        "Contributed to Rishi Chat development and led multi-threat detection project using CCTV and computer vision.",
    },
    {
      title: "Full Stack Web Developer",
      company: "Kathmandu University Youth Red Cross Circle (KUYRCC)",
      location: "Nepal",
      period: "November 2024 - April 2025",
      description:
        "Led the development of the official website for KUYRCC as Developer Head. Built the beta version using React.js, ensuring a fully mobile-responsive design for seamless usability across devices. Collaborated closely with the Media Head to incorporate creative inputs, conduct research, and implement valuable feedback for an optimized user experience.",
    },
  ]

  // Research Experience — ordered newest to oldest
  const researchExperiences = [
    {
      title: "Research Intern",
      company: "IOT R&D, Kathmandu University",
      location: "Nepal",
      period: "March 2025 - Present (6 months)",
      description:
        "Conducting IoT and AI-based research on natural disaster prediction using LoRaWAN and computer vision.",
    },
    {
      title: "Multi Scale Deep Learning for Hairline Crack Detection and Analysis using Hybrid CNN and Transformer Architecture",
      company: "Dept. of Computer Engineering, Kathmandu University",
      location: "Under Prof. Dr. Sudan Jha, with Sarita Sapkota",
      period: "Submitted for publication",
      description:
        "Developed a hybrid CNN-Transformer model for structural crack detection and classification to enhance predictive maintenance. Tools: Python, TensorFlow, OpenCV.",
    },
    {
      title: "High-Quality Neural Text-to-Speech for Low-Resource Nepali: A Data-Efficient Transfer Learning Approach",
      company: "Dept. of Software Engineering, NCIT",
      location: "Under Assoc. Prof. Dr. Prakash Poudyal, with Sristi Ghimire",
      period: "Submitted for publication",
      description:
        "Developed a FastSpeech 2–based neural TTS system with a Devanagari text pipeline for low-resource Nepali, improving speech naturalness and clarity. Tools: Python, TensorFlow, ESPnet, Praat.",
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

  // Technical Expertise — redesigned as icon-led category cards with skill chips (no percentage bars)
  const techStack = [
    {
      category: "Frontend",
      icon: Globe,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Django", "WebSockets", "RESTful APIs"],
    },
    {
      category: "Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "C++", "HTML/CSS", "SQL"],
    },
    {
      category: "AI & Data",
      icon: Cpu,
      skills: ["LLMs", "NLP", "Computer Vision", "Data Analysis", "Machine Learning"],
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["Git & GitHub", "Docker", "AWS", "CI/CD", "Figma"],
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

  const activeExperiences = experienceTab === "work" ? workExperiences : researchExperiences

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence>
        {loading && <PreLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>


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
          <section className="min-h-screen relative pt-24 overflow-hidden">
            <div className="relative z-10 w-full">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Text Content */}
                  <div className="text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                      <TypeAnimation
                        sequence={[
                          'Hey, This is Ravi Pajiyar',
                          1000,
                          'Full Stack Developer',
                          1000,
                          'AI/ML Enthusiast',
                          1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                      />
                    </h1>

                    <div className="max-w-xl">
                      <motion.p
                        className="text-2xl text-gray-300 mb-6 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                      >
                        Transforming Ideas into 
                        <span className="text-purple-400 font-medium"> Scalable Solutions</span>
                      </motion.p>
                      
                      <motion.p
                        className="text-lg text-gray-400 mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        A passionate Full Stack Developer specializing in building exceptional digital experiences. 
                        With expertise in React, Node.js, and AI/ML technologies, I combine technical skills with 
                        creative problem-solving to deliver innovative solutions.
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg">
                          <Download className="w-5 h-5 mr-2" />
                          Download Resume
                        </Button>
                        <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-6 rounded-full text-lg">
                          <Download className="w-5 h-5 mr-2" />
                          Download CV
                        </Button>
                      </motion.div>

                      <motion.div
                        className="flex flex-wrap gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      >
                        <Link href="https://github.com/ravipajiyar" className="text-gray-400 hover:text-white transition-colors">
                          <Github className="w-6 h-6" />
                        </Link>
                        <Link href="https://linkedin.com/in/ravipajiyar" className="text-gray-400 hover:text-white transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href="https://medium.com/@ravipajiyar" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                          </svg>
                        </Link>
                        <Link href="https://leetcode.com/ravipajiyar" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                          </svg>
                        </Link>
                        <Link href="https://blog.ravipajiyar.com" className="text-gray-400 hover:text-white transition-colors">
                          <BookOpen className="w-6 h-6" />
                        </Link>
                        <Link href="mailto:pajiyargravi20011@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                          <Mail className="w-6 h-6" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Column - Images */}
                  <div className="relative h-[600px]">
                    {/* Profile Photo */}
                    <motion.div 
                      className="absolute top-4 right-10 z-20"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <Image
                          src="/ravi-photo.jpg"
                          alt="Ravi Pajiyar"
                          width={160}
                          height={160}
                          className="rounded-full border-4 border-purple-500/30 object-cover w-full h-full relative z-10"
                          priority
                        />
                        <motion.div
                          className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* 3D Animation with Steam */}
                    <motion.div 
                      className="relative w-full max-w-lg mt-20 mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <div className="relative z-10">
                        <Lottie
                          animationData={developerAnimation}
                          className="w-full h-auto"
                          loop={true}
                        />
                        {/* Steam Animation */}
                        <div className="absolute top-[35%] right-[35%] w-8 h-16 opacity-70">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white rounded-full"
                              animate={{
                                y: [-10, -40],
                                x: [0, i === 0 ? -5 : i === 2 ? 5 : 0],
                                scale: [1, 0],
                                opacity: [0.8, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IAGA Sentinel Alert Banner */}
          <AnimatePresence>
            {showIagaAlert && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="container mx-auto px-6 -mt-10 mb-6"
              >
                <div className="bg-green-900/90 border border-green-500/50 rounded-lg shadow-lg backdrop-blur-md p-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-green-300 font-semibold text-sm">
                      Now Open Source Contributor at IAGA Sentinel
                    </p>
                    <p className="text-green-100/80 text-xs mt-1 leading-relaxed">
                      Contributing to an AI governance and compliance platform creating verifiable audit trails for AI agents and supporting EU AI Act requirements — collaborating with an international team on AI security, open-source workflows, and AI infrastructure.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowIagaAlert(false)}
                    className="text-green-400 hover:text-green-200 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience.</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
              </motion.div>

              {/* Tab Switcher */}
              <div className="flex justify-center mb-16">
                <div className="inline-flex bg-gray-900/60 border border-purple-900/30 rounded-full p-1.5">
                  <button
                    onClick={() => setExperienceTab("work")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      experienceTab === "work"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    Work Experience
                  </button>
                  <button
                    onClick={() => setExperienceTab("research")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      experienceTab === "research"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <FlaskConical className="w-4 h-4" />
                    Research Experience
                  </button>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  key={experienceTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>

                  {activeExperiences.map((exp, index) => (
                    <motion.div
                      key={`${experienceTab}-${index}`}
                      className={`relative flex items-center mb-12 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                        <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4 gap-3">
                              <div>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                <p className="text-purple-400 font-medium">{exp.company}</p>
                                <p className="text-gray-400 text-sm">{exp.location}</p>
                              </div>
                              <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-600/30 whitespace-nowrap">
                                {exp.period}
                              </Badge>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>
                    </motion.div>
                  ))}
                </motion.div>
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((category, catIndex) => {
                  const CategoryIcon = category.icon
                  return (
                    <motion.div
                      key={catIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="relative bg-gray-900/50 border border-purple-900/30 rounded-xl p-6 overflow-hidden group hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {/* subtle corner glow */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-colors duration-300" />

                      <div className="relative flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center border border-purple-500/30">
                          <CategoryIcon className="w-5 h-5 text-purple-300" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                      </div>

                      <div className="relative flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="text-sm px-3 py-1.5 rounded-full bg-gray-800/80 text-gray-200 border border-gray-700/80 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
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
                          />
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
        </>
      )}
    </div>
  )
}