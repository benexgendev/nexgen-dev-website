"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Heart, Star, CheckCircle2 } from "lucide-react";

interface ChatMessage {
  id: number;
  sender: "student" | "bishal";
  name: string;
  message: string;
  time: string;
  avatar?: string;
  isTyping?: boolean;
}

const chatMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "student",
    name: "Alex",
    message: "Hi, Bishal Sir, Do I need extra skills apart from college subjects?",
    time: "2:30 PM",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    sender: "bishal",
    name: "Bishal",
    message: "Absolutely! College gives you theory, but industry needs practical skills. That's exactly why I created NexgenDev - to bridge that gap with real projects and modern tools.",
    time: "2:32 PM",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    sender: "student",
    name: "Priya",
    message: "Your B.Tech won't get you a job. Your skills will.",
    time: "2:35 PM",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 4,
    sender: "bishal",
    name: "Bishal",
    message: "Exactly right, Priya! 🎯 I've seen too many talented students struggle because they only learned theory. In our program, you'll build 8+ real projects, work with AI tools, and gain the confidence that comes from actually building things.",
    time: "2:36 PM",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 5,
    sender: "student",
    name: "Rahul",
    message: "Will you personally help us with our projects and career guidance?",
    time: "2:40 PM",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 6,
    sender: "bishal",
    name: "Bishal",
    message: "Of course! Think of me as your elder brother in tech. I'll personally review your projects, conduct 1:1 sessions, help with resume building, and even do mock interviews. You're not just joining a course - you're joining a family that cares about your success.",
    time: "2:42 PM",
    avatar: "/api/placeholder/40/40"
  }
];

export function ChatMessages() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, chatMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, currentMessageIndex === 0 ? 500 : 2500);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const MessageBubble = ({ message, isLast }: { message: ChatMessage; isLast: boolean }) => {
    const isBishal = message.sender === "bishal";
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex ${isBishal ? 'justify-start' : 'justify-end'} mb-4`}
      >
        <div className={`flex ${isBishal ? 'flex-row' : 'flex-row-reverse'} items-end max-w-[80%] gap-3`}>
          {/* Avatar */}
          <Avatar className={`w-10 h-10 ${isBishal ? 'order-first' : 'order-last'}`}>
            <AvatarFallback 
              className={`text-white font-bold ${
                isBishal 
                  ? 'bg-gradient-to-br from-orange-500 to-red-500' 
                  : 'bg-gradient-to-br from-blue-500 to-purple-500'
              }`}
            >
              {message.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          {/* Message Content */}
          <div className={`flex flex-col ${isBishal ? 'items-start' : 'items-end'}`}>
            <div className={`flex items-center gap-2 mb-1 ${isBishal ? 'flex-row' : 'flex-row-reverse'}`}>
              <span className={`text-sm font-medium ${isBishal ? 'text-orange-300' : 'text-blue-300'}`}>
                {message.name}
                {isBishal && <Star className="w-4 h-4 inline ml-1 text-yellow-400" />}
              </span>
              <span className="text-xs text-slate-400">{message.time}</span>
            </div>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className={`relative px-4 py-3 rounded-2xl max-w-md ${
                isBishal
                  ? 'bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/30 text-white'
                  : 'bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30 text-white'
              } backdrop-blur-sm`}
            >
              {/* Message tail */}
              <div className={`absolute bottom-0 w-4 h-4 transform rotate-45 ${
                isBishal 
                  ? '-left-2 bg-gradient-to-br from-orange-500/20 to-red-500/10 border-l border-b border-orange-500/30'
                  : '-right-2 bg-gradient-to-br from-blue-500/20 to-purple-500/10 border-r border-b border-blue-500/30'
              }`} />
              
              <p className="text-sm leading-relaxed relative z-10">
                {message.message}
              </p>
              
              {/* Special indicators for Bishal's messages */}
              {isBishal && (
                <div className="flex items-center mt-2 text-xs text-orange-200/80">
                  <Heart className="w-3 h-3 mr-1" />
                  <span>Personal mentor</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900/30 via-purple-900/20 to-slate-800/30 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="inline-block w-12 h-12 mr-4" style={{ color: '#F68A4E' }} />
            Personalized Support
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real conversations with students showing the personal guidance you'll receive
          </motion.p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 border-b border-white/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <h3 className="text-white font-semibold">NexgenDev Community</h3>
                    <p className="text-slate-300 text-sm">Bishal is online • Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm">Verified Mentor</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <CardContent className="p-6 max-h-[600px] overflow-y-auto">
              <div className="space-y-1">
                {visibleMessages.map((message, index) => (
                  <MessageBubble 
                    key={message.id} 
                    message={message} 
                    isLast={index === visibleMessages.length - 1}
                  />
                ))}
                
                {/* Typing indicator for next message */}
                {currentMessageIndex < chatMessages.length && visibleMessages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start mb-4"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold">
                          B
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>

            {/* Chat Footer */}
            <div className="bg-slate-800/50 border-t border-white/10 px-6 py-4">
              <div className="flex items-center justify-center">
                <motion.p 
                  className="text-slate-300 text-sm flex items-center gap-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400" />
                  Join the community and get personalized guidance like this
                  <Heart className="w-4 h-4 text-red-400" />
                </motion.p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}