"use client"
import { ChevronRight } from "lucide-react"
import { LastWorkoutCard } from "./last-workout-card"
import { motion } from "framer-motion"
import { Link } from "react-router"
import { EmptyWorkoutState } from "./empty-workout-state"
interface LastWorkoutSectionProps {
    lastWorkout: any | null
}

export function LastWorkoutSection({ lastWorkout }: LastWorkoutSectionProps) {
    return (
        <section className="relative z-50 mt-6">
            <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                    Last Workout
                </h2>
                {lastWorkout && (
                    <Link
                        to="/workouts"
                        className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-300 hover:text-blue-100 transition-all duration-200 rounded-full hover:bg-blue-900/30"
                    >
                        View all <ChevronRight className="h-4 w-4 animate-pulse" />
                    </Link>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                {lastWorkout ? (
                    <LastWorkoutCard
                        title={lastWorkout.title}
                        date={lastWorkout.date}
                        duration={lastWorkout.duration}
                        exerciseCount={lastWorkout.exerciseCount}
                        volume={lastWorkout.volume}
                        onViewDetails={() => console.log("View last workout details")}
                    />
                ) : (
                    <EmptyWorkoutState
                        title="No Workouts Yet"
                        description="Start tracking your first workout"
                        buttonText="Start Workout"
                        buttonLink="/create"
                    />
                )}
            </motion.div>
        </section>
    )
}
