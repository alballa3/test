"use client";

import {
  Dumbbell,
  BarChart,
  Plus,
  Award,
  Info,
  X,
  ChevronRight,
  Flame,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import type { Exercise as LibraryExercise } from "@/types/exercise";
import { cn } from "@/lib/utils";

interface ExerciseDetailModalProps {
  exercise: LibraryExercise | null;
  isOpen: boolean;
  onClose: () => void;
  onAddExercise?: (exercise: LibraryExercise) => void;
}

export function ExerciseDetailModal({
  exercise,
  isOpen,
  onClose,
  onAddExercise,
}: ExerciseDetailModalProps) {
 

  

  if (!exercise) return null;

  // Get primary and secondary muscles
  const primaryMuscles = exercise.primaryMuscles;
  // Get difficulty/level
  const level = exercise.level;

  // Helper function to get level color
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner": return "text-green-400";
      case "intermediate": return "text-yellow-400";
      case "advanced": return "text-red-400";
      default: return "text-purple-400";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-gradient-to-br from-gray-900/95 to-gray-950 border-gray-800/50 text-white max-w-4xl max-h-[90vh] overflow-y-auto p-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 z-10"></div>

        {/* Hero section with exercise name */}
        <div className="relative w-full bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,50,255,0.2),transparent_60%)] z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>

          <DialogClose className="absolute right-4 top-4 rounded-full bg-gray-800/80 p-1.5 text-gray-400 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:text-white focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <DialogHeader className="relative z-10">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-white to-gray-300">
                {exercise.name}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="mt-2 flex items-center gap-2 relative z-10">
            <Badge
              variant="outline"
              className={cn("bg-gray-800/50 border-gray-700/50", getLevelColor(level.toString()))}
            >
              <Award className="h-3 w-3 mr-1" />
              {level}
            </Badge>

            <Badge
              variant="outline"
              className="bg-gray-800/50 text-blue-300 border-blue-500/30"
            >
              <Target className="h-3 w-3 mr-1" />
              {primaryMuscles}
            </Badge>
          </div>
        </div>

        <Tabs
          defaultValue="overview"
          className="px-6 pt-4"
        >
          <TabsList className="grid grid-cols-3 bg-gray-800/70 border border-gray-700/50 mb-4 p-1 rounded-xl overflow-hidden">
            <TabsTrigger
              value="overview"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all duration-200"
            >
              <Info className="h-4 w-4 mr-1.5" />
              Overview
            </TabsTrigger>

            <TabsTrigger
              value="media"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all duration-200"
            >
              <Flame className="h-4 w-4 mr-1.5" />
              Media
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pb-6">
            {/* Exercise Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/10 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                <p className="text-gray-300 text-xs mb-1 uppercase tracking-wider">Level</p>
                <div className="flex items-center gap-1.5">
                  <Award className={cn("h-4 w-4", getLevelColor(level.toString()))} />
                  <p className="font-medium text-white capitalize">{level}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <p className="text-gray-300 text-xs mb-1 uppercase tracking-wider">Equipment</p>
                <div className="flex items-center gap-1.5">
                  <Dumbbell className="h-4 w-4 text-blue-300" />
                  <p className="font-medium text-white capitalize">{exercise.equipment}</p>
                </div>
              </div>
            </motion.div>

            {/* Primary Muscles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-sm font-medium text-blue-300 mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Target Muscles
              </h3>
              <div className="flex flex-wrap gap-2 bg-gray-800/40 p-4 rounded-xl border border-gray-700/30">
                <Badge
                  key={primaryMuscles}
                  variant="outline"
                  className="bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                >
                  {primaryMuscles}
                </Badge>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4 flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-purple-400" />
                Step-by-Step Instructions
              </h3>
              <div className="bg-gray-800/40 rounded-xl border border-gray-700/30 overflow-hidden">
                <div className="p-4 text-gray-300 text-sm">
                  {exercise.instructions.split('. ').map((instruction, index) => (
                    instruction.trim() && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                        className="flex items-start mb-3 last:mb-0"
                      >
                        <div className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 text-white w-6 h-6 rounded-full flex items-center justify-center font-medium text-xs mr-3 flex-shrink-0 mt-0.5 shadow-sm">
                          {index + 1}
                        </div>
                        <p>{instruction.trim()}{index < exercise.instructions.split('. ').length - 1 ? '.' : ''}</p>
                      </motion.div>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Add to Workout Button */}
            {onAddExercise && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl shadow-lg shadow-purple-900/20 border-0 py-6 mt-4 group transition-all duration-300"
                  onClick={() => {
                    onAddExercise(exercise);
                    onClose();
                  }}
                >
                  <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Add to Workout</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="media" className="space-y-6 pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/40 rounded-xl border border-gray-700/30 p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                <Dumbbell className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Media Coming Soon</h3>
              <p className="text-gray-400 text-sm">Exercise demonstration videos and images will be available in a future update.</p>
            </motion.div>


            {/* Add to Workout Button */}
            {onAddExercise && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl shadow-lg shadow-purple-900/20 border-0 py-6 mt-4 group transition-all duration-300"
                  onClick={() => {
                    onAddExercise(exercise);
                    onClose();
                  }}
                >
                  <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Add to Workout</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
