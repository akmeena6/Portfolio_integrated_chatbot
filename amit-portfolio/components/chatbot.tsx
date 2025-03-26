"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm Amit's virtual assistant. How can I help you today?",
      role: "assistant",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API call to get response
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase())
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: "assistant",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const getBotResponse = (message: string): string => {
    // Simple rule-based responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm Amit's virtual assistant. How can I help you today?"
    } else if (message.includes("skills") || message.includes("technologies")) {
      return "Amit is skilled in C, C++, Python, Java, JavaScript, HTML, CSS. He's also familiar with libraries like NumPy, TensorFlow, PyTorch, and frameworks like React."
    } else if (message.includes("project") || message.includes("work")) {
      return "Amit has worked on several projects including TradeThrill (an e-commerce website), House Price Prediction using ML, and an SMS Spam Classifier. You can check out more details in the Projects section!"
    } else if (message.includes("education") || message.includes("study")) {
      return "Amit is currently pursuing B.Tech in Computer Science and Engineering at IIT Kanpur (expected graduation: April 2026). He scored 92.4% in Class XII and 91.6% in Class X from Jawahar Navodaya Vidyalaya, Bundi."
    } else if (message.includes("contact") || message.includes("reach") || message.includes("email")) {
      return "You can contact Amit via email at amitkmeena22@iitk.ac.in or call at +91-9798805269. Alternatively, you can use the contact form on this website!"
    } else if (message.includes("achievement") || message.includes("accomplishment")) {
      return "Amit secured AIR 6388 in JEE Advanced 2022 and was among the top 2% in JEE Mains 2022. He's also a Specialist on Codeforces (Rating 1454) and a 3 Star coder on Codechef (Rating 1647)."
    } else if (message.includes("competitive") || message.includes("coding") || message.includes("programming")) {
      return "Amit is active in competitive programming. He's a Specialist on Codeforces with a rating of 1454 and a 3 Star coder on Codechef with a rating of 1647."
    } else if (message.includes("thank")) {
      return "You're welcome! If you have any more questions about Amit, feel free to ask!"
    } else if (message.includes("bye") || message.includes("goodbye")) {
      return "Goodbye! Feel free to reach out if you have more questions about Amit in the future!"
    } else {
      return "I'm not sure I understand. Would you like to know about Amit's skills, projects, education, or contact information?"
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => setIsOpen(true)} size="icon" className="h-14 w-14 rounded-full shadow-lg">
                <MessageCircle className="h-6 w-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-full sm:w-96 z-50"
          >
            <Card className="shadow-xl border-primary/10">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg flex flex-row justify-between items-center">
                <CardTitle className="text-lg font-medium">Chat with Amit's Assistant</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-4 py-2",
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                          <span className="text-xs font-medium">{message.role === "user" ? "You" : "Assistant"}</span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                        <div className="flex items-center space-x-2 mb-1">
                          <Bot className="h-4 w-4" />
                          <span className="text-xs font-medium">Assistant</span>
                        </div>
                        <div className="flex space-x-1">
                          <div
                            className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

