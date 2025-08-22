import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, MessageCircle, X, Send, Sparkles } from "lucide-react"

const quickQuestions = [
  "How do I get started?",
  "What's included in the free trial?",
  "Can I upgrade my plan?",
  "Do you offer support?",
  "Is my data secure?"
]

export function AssistantBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: message,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        content: getBotResponse(message),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes("start") || msg.includes("begin")) {
      return "Great! You can start with our free 14-day trial. Just click 'Get Started' on any of our plans, and you'll be up and running in minutes!"
    } else if (msg.includes("trial") || msg.includes("free")) {
      return "Our free trial includes full access to all features for 14 days. No credit card required, and you can upgrade or cancel anytime."
    } else if (msg.includes("upgrade") || msg.includes("plan")) {
      return "You can upgrade your plan anytime from your dashboard. Changes take effect immediately, and we'll only charge the prorated difference."
    } else if (msg.includes("support") || msg.includes("help")) {
      return "We offer 24/7 support for all plans. Professional and Enterprise customers get priority support with faster response times."
    } else if (msg.includes("secure") || msg.includes("security") || msg.includes("data")) {
      return "Your data is protected with enterprise-grade security including end-to-end encryption, SOC 2 compliance, and zero-trust architecture."
    } else {
      return "I'd be happy to help! Feel free to ask about our features, pricing, security, or getting started. You can also contact our sales team for more detailed assistance."
    }
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="neon"
          size="icon"
          className="w-16 h-16 rounded-full shadow-2xl hover:scale-110 pulse-glow"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <div className="glass-card rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-primary p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Assistant</h3>
                  <p className="text-white/80 text-sm">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-gradient-primary text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-glass-border/20">
                <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
                <div className="space-y-2">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left text-sm p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-glass-border/20">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  variant="neon"
                  size="icon"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}