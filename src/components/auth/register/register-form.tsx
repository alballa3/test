"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import StepOne from "./step-one"
import StepTwo from "./step-two"
import StepThree from "./step-three"
import StepFour from "./step-four"
import SuccessAnimation from "./success-animation"
import ProgressIndicator from "./progress-indicator"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router"
import { toast, Toaster } from "sonner"
import { client } from "@/supabase/supabase"

// Enhanced keyframes for mobile animations
const mobileAnimations = `
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(0) translateX(10px);
  }
  75% {
    transform: translateY(10px) translateX(5px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes progress-fill {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes auto-progress {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}
`

export default function RegisterForm() {
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState({
    // Physical info
    height: "190",
    heightUnit: "cm",
    weight: "25",
    weightUnit: "kg",

    // Fitness profile
    day: "2",
    month: "4",
    year: "2024",
    gender: "male",

    // Account info
    name: "mgsa",
    email: "gakngs@gmail.com",
    password: "mgnasngj114AC$#",
  })
  const [registrationComplete] = useState(false)
  const [autoProgressEnabled, setAutoProgressEnabled] = useState(false)
  const [autoProgressDelay, setAutoProgressDelay] = useState(2000) // 2 seconds default
  const [showAutoProgressIndicator, setShowAutoProgressIndicator] = useState(false)
  const [isProgressing, setIsProgressing] = useState(false)
  const router = useNavigate()

  // Enhanced animation states
  const [rotation, setRotation] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null)
  const [swipeLocked, setSwipeLocked] = useState(false)

  // Handle ResizeObserver error
  useEffect(() => {
    const errorHandler = (e: ErrorEvent) => {
      if (e.message.includes("ResizeObserver") || e.message.includes("ResizeObserver loop limit exceeded")) {
        e.stopImmediatePropagation()
      }
    }

    window.addEventListener("error", errorHandler)
    return () => window.removeEventListener("error", errorHandler)
  }, [])

  // Enhanced background animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Check if current step is complete for auto-progression
  const isStepComplete = useCallback(() => {
    switch (step) {
      case 1:
        return true // Step 1 is just welcome, always complete
      case 2:
        return userData.height && userData.weight
      case 3:
        return userData.day && userData.month && userData.year && userData.gender
      case 4:
        return userData.name && userData.email && userData.password && userData.password.length >= 6
      default:
        return false
    }
  }, [step, userData])

  // Auto-progression logic
  useEffect(() => {
    if (!autoProgressEnabled || step >= 4 || !isStepComplete()) return

    const timer = setTimeout(() => {
      if (isStepComplete() && !isProgressing) {
        setShowAutoProgressIndicator(true)
        setIsProgressing(true)

        // Show indicator for 1 second before progressing
        setTimeout(() => {
          nextStep()
          setShowAutoProgressIndicator(false)
          setIsProgressing(false)
        }, 1000)
      }
    }, autoProgressDelay)

    return () => clearTimeout(timer)
  }, [userData, step, autoProgressEnabled, isStepComplete, autoProgressDelay, isProgressing])

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  // Enhanced touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (swipeLocked) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      setSwipeLocked(true)

      if (diff > 0 && step < 4) {
        setSwipeDirection("left")
        nextStep()
      } else if (diff < 0 && step > 1) {
        setSwipeDirection("right")
        prevStep()
      }

      setTimeout(() => {
        setSwipeDirection(null)
        setSwipeLocked(false)
      }, 500)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const gymBios = [
      "Pushing limits every day 💪",
      "Stronger than yesterday 🔥",
      "Fitness is a lifestyle, not a phase 🧠",
      "Tracking progress, crushing goals 📈",
      "No excuses, just results 🎯",
      "Building muscle and discipline 🏗️",
      "Gym rat with a plan 🐀",
      "Reps. Sets. Sweat. Repeat. ♻️",
      "On the road to greatness 🚀",
      "Eat. Train. Sleep. Repeat 🛌",
      "Not just lifting weights, lifting myself up 🏋️",
      "One workout at a time ⏱️",
      "Training like a beast 🐺",
      "Fitness fuels my focus ⚡",
      "Sweat now, shine later 🌟",
      "Discipline over motivation 👊",
      "My gym time is sacred ⛪",
      "Tracking my grind 📓",
      "Your body is your home. Build it strong 🧱",
      "Dedication in every rep 🙌"
    ]

    let response = await client.auth.signUp(
      {
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            height: `${userData.height} ${userData.heightUnit}`,
            weight: `${userData.weight} ${userData.weightUnit}`,
            gender: userData.gender,
            birthdate: `${userData.year}-${userData.month}-${userData.day}`,
            bio: gymBios[Math.floor(Math.random() * gymBios.length)]
          }
        }
      }
    )
    if (response.error) {
      toast.error(response.error.message)
      return;
    }
    router("/")
    console.log(response)

  }

  const handleContinue = () => {
    router("/")
  }

  // Toggle auto-progression
  const toggleAutoProgress = () => {
    setAutoProgressEnabled(!autoProgressEnabled)
    toast.success(autoProgressEnabled ? "Auto-progression disabled" : "Auto-progression enabled")
  }

  return (
    <div className="relative">
      <Toaster />
      <style dangerouslySetInnerHTML={{ __html: mobileAnimations }} />

      {/* Auto-progression settings */}
      <div className="absolute -top-16 right-0 flex items-center gap-3 mb-4">
        <button
          onClick={toggleAutoProgress}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${autoProgressEnabled
            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
            : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
            }`}
        >
          Auto-progress: {autoProgressEnabled ? "ON" : "OFF"}
        </button>

        {autoProgressEnabled && (
          <select
            value={autoProgressDelay}
            onChange={(e) => setAutoProgressDelay(Number(e.target.value))}
            className="px-2 py-1 bg-gray-800/80 border border-gray-600/30 rounded text-xs text-gray-300"
          >
            <option value={1000}>1s</option>
            <option value={2000}>2s</option>
            <option value={3000}>3s</option>
            <option value={5000}>5s</option>
          </select>
        )}
      </div>

      {/* Enhanced animated border effect */}
      <div
        className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur-sm transition-all duration-300"
        style={{
          background: `conic-gradient(from ${rotation}deg at 50% 50%, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.1) 25%, rgba(59, 130, 246, 0.4) 50%, rgba(37, 99, 235, 0.1) 75%, rgba(59, 130, 246, 0.4) 100%)`,
        }}
      />

      <div
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-blue-500/30 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Enhanced inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />

        {/* Dynamic top accent */}
        <div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, ${0.3 + Math.sin(rotation * 0.02) * 0.3}) 50%, transparent 100%)`
          }}
        />

        {/* Auto-progression indicator */}
        {showAutoProgressIndicator && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-blue-500/90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-blue-400/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Auto-progressing to next step...
              </div>
            </div>
          </motion.div>
        )}

        {/* Enhanced mobile swipe indicator */}
        {!registrationComplete && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-2 md:hidden">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ${i === step
                  ? "bg-blue-500 w-6 shadow-lg shadow-blue-500/50"
                  : i < step
                    ? "bg-green-500 w-2"
                    : "bg-gray-600 w-2"
                  }`}
              />
            ))}
          </div>
        )}

        <div className="p-4 sm:p-6 relative z-10">
          {!registrationComplete && (
            <div className="relative">
              <ProgressIndicator currentStep={step} totalSteps={4} />

              {/* Step completion indicator */}
              {isStepComplete() && step < 4 && autoProgressEnabled && !showAutoProgressIndicator && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-0 top-0 flex items-center gap-2 text-green-400 text-sm"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Complete
                </motion.div>
              )}
            </div>
          )}

          <div className="min-h-[450px] sm:min-h-[500px] flex flex-col relative">
            <AnimatePresence initial={false} mode="wait" custom={swipeDirection}>
              {registrationComplete ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col h-full"
                >
                  <SuccessAnimation userName={userData.name} onContinue={handleContinue} />
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  custom={swipeDirection}
                  variants={{
                    initial: {
                      x: swipeDirection === "left" ? 100 : swipeDirection === "right" ? -100 : 0,
                      opacity: 0,
                      scale: 0.95,
                      position: "absolute" as const,
                      width: "100%"
                    },
                    animate: {
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      position: "relative" as const,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 }
                      }
                    },
                    exit: {
                      x: swipeDirection === "left" ? -100 : swipeDirection === "right" ? 100 : 0,
                      opacity: 0,
                      scale: 0.95,
                      position: "absolute" as const,
                      width: "100%",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 }
                      }
                    }
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col h-full"
                >
                  {step === 1 && <StepOne onNext={nextStep} />}
                  {step === 2 && (
                    <StepTwo
                      userData={userData}
                      updateUserData={updateUserData}
                      onNext={nextStep}
                      onPrev={prevStep}
                    />
                  )}
                  {step === 3 && (
                    <StepThree
                      userData={userData}
                      updateUserData={updateUserData}
                      onNext={nextStep}
                      onPrev={prevStep}
                    />
                  )}
                  {step === 4 && (
                    <StepFour
                      userData={userData}
                      updateUserData={updateUserData}
                      onPrev={prevStep}
                      onSubmit={handleSubmit}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced navigation hints */}
          {!registrationComplete && (
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                {step > 1 && (
                  <span className="hidden sm:inline">← Previous</span>
                )}
                <span className="sm:hidden">Swipe to navigate</span>
              </div>

              <div className="flex items-center gap-2">
                {autoProgressEnabled && isStepComplete() && step < 4 && (
                  <span className="text-blue-400 animate-pulse">Auto-progressing...</span>
                )}
                {step < 4 && (
                  <span className="hidden sm:inline">Next →</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}