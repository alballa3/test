"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Sparkles,
  Target,
  Check,
  Dumbbell,
  Heart,
  Shield,
  Flame,
  ArrowDown,
  Search,
  X,
  ChevronDown,
  RotateCcw,
  Zap,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MuscleGroup } from "@/types/workout";

interface MuscleGroupStepProps {
  selectedMuscleGroups: MuscleGroup[];
  toggleMuscleGroup: (muscleGroup: MuscleGroup) => void;
  onGenerate: () => void;
  onPrev: () => void;
  isGenerating: boolean;
}

export function MuscleGroupStep({
  selectedMuscleGroups,
  toggleMuscleGroup,
  onGenerate,
  onPrev,
  isGenerating,
}: MuscleGroupStepProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverEffect, setHoverEffect] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);

  // Enhanced muscle group options with categories
  const muscleGroupData = useMemo(
    () =>
      [
        { name: "Full Body", category: "Complete" },
        { name: "Upper Body", category: "Complete" },
        { name: "Lower Body", category: "Complete" },
        { name: "Push", category: "Training Split" },
        { name: "Pull", category: "Training Split" },
        { name: "Legs", category: "Complete" },
        { name: "Core", category: "Specific" },
        { name: "Back", category: "Specific" },
        { name: "Chest", category: "Specific" },
        { name: "Arms", category: "Specific" },
        { name: "Shoulders", category: "Specific" },
        { name: "Biceps", category: "Detailed" },
        { name: "Triceps", category: "Detailed" },
        { name: "Forearms", category: "Detailed" },
        { name: "Traps", category: "Detailed" },
        { name: "Lats", category: "Detailed" },
        { name: "Abs", category: "Detailed" },
        { name: "Obliques", category: "Detailed" },
        { name: "Lower Back", category: "Detailed" },
        { name: "Quads", category: "Detailed" },
        { name: "Hamstrings", category: "Detailed" },
        { name: "Glutes", category: "Detailed" },
        { name: "Calves", category: "Detailed" },
      ] as const,
    []
  );

  // Get unique categories
  const categories = useMemo(
    () => Array.from(new Set(muscleGroupData.map((item) => item.category))),
    [muscleGroupData]
  );

  // Filter muscle groups based on search and category
  const filteredMuscleGroups = useMemo(() => {
    let filtered = muscleGroupData.map((item) => item.name) as MuscleGroup[];

    if (searchQuery) {
      filtered = filtered.filter((muscle) =>
        muscle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCategory) {
      filtered = muscleGroupData
        .filter((item) => item.category === activeCategory)
        .map((item) => item.name) as MuscleGroup[];
    }

    return filtered;
  }, [muscleGroupData, searchQuery, activeCategory]);

  useEffect(() => {
    setIsLoaded(true);

    // Auto-scroll to bring generate button into view after selections
    if (selectedMuscleGroups.length > 0) {
      const timer = setTimeout(() => {
        document.getElementById("generate-button")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedMuscleGroups]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } },
  };

  const muscleGroupIcons: Record<string, React.ReactNode> = {
    "Full Body": <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    "Upper Body": <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    "Lower Body": <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Core: <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Back: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-45" />,
    Chest: <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Arms: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Shoulders: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4 -rotate-45" />,
    Legs: <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Push: <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Pull: <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Biceps: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Triceps: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-90" />,
    Forearms: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-45" />,
    Traps: <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Lats: <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-90" />,
    Abs: <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Obliques: <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-45" />,
    "Lower Back": <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-180" />,
    Quads: <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    Hamstrings: <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-180" />,
    Glutes: <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-180" />,
    Calves: <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  };

  const handleSelection = (muscle: MuscleGroup) => {
    toggleMuscleGroup(muscle);

    // If selecting Full Body, clear other selections
    if (muscle === "Full Body" && !selectedMuscleGroups.includes("Full Body")) {
      filteredMuscleGroups.forEach((group) => {
        if (group !== "Full Body" && selectedMuscleGroups.includes(group)) {
          toggleMuscleGroup(group);
        }
      });
    }

    // If selecting anything else while Full Body is selected, remove Full Body
    if (muscle !== "Full Body" && selectedMuscleGroups.includes("Full Body")) {
      toggleMuscleGroup("Full Body");
    }
  };

  const clearSelections = () => {
    selectedMuscleGroups.forEach((group) => {
      toggleMuscleGroup(group);
    });
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4 sm:space-y-6 md:space-y-8 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-3 lg:px-0"
    >
      <motion.div variants={item} className="space-y-4 sm:space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                delay: 0.2,
              }}
              className="p-2 sm:p-3 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 rounded-xl sm:rounded-2xl shadow-lg shadow-fuchsia-900/10 flex-shrink-0"
            >
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-fuchsia-300" />
            </motion.div>
            <div className="min-w-0">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent leading-tight">
                Target Muscle Groups
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-tight">
                Select areas you want to focus on
              </p>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="relative min-w-0 flex-1 sm:flex-initial"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-zinc-800/70 border border-zinc-700/50 rounded-lg sm:rounded-xl py-2 px-3 text-sm text-zinc-200 w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 placeholder:text-zinc-500"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 p-0.5"
                    >
                      <X className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="rounded-lg sm:rounded-xl bg-zinc-800/70 border-zinc-700/50 hover:bg-zinc-700/70 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
            >
              <Search className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-400" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setActiveCategory(null);
                setSearchQuery("");
              }}
              disabled={!activeCategory && !searchQuery}
              className={cn(
                "rounded-lg sm:rounded-xl bg-zinc-800/70 border-zinc-700/50 hover:bg-zinc-700/70 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0",
                !activeCategory &&
                  !searchQuery &&
                  "opacity-50 cursor-not-allowed"
              )}
            >
              <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-400" />
            </Button>
          </div>
        </div>

        {/* Category filters */}
        <motion.div variants={item} className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() =>
                setActiveCategory(activeCategory === category ? null : category)
              }
              className={cn(
                "rounded-lg sm:rounded-xl text-xs font-medium transition-all duration-300 h-7 sm:h-8 px-2 sm:px-3",
                activeCategory === category
                  ? "bg-gradient-to-r from-fuchsia-600/30 to-violet-600/30 border-fuchsia-500/50 text-fuchsia-200"
                  : "bg-zinc-800/40 border-zinc-700/30 text-zinc-400 hover:text-zinc-200"
              )}
            >
              <span className="truncate">{category}</span>
              {activeCategory === category ? (
                <X className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
              ) : (
                <ChevronDown className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
              )}
            </Button>
          ))}
        </motion.div>

        {/* Muscle Group Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 perspective-1000">
          {filteredMuscleGroups.map((muscle, index) => (
            <motion.div
              key={muscle}
              variants={item}
              onClick={() => handleSelection(muscle)}
              onMouseEnter={() => setHoverEffect(muscle)}
              onMouseLeave={() => setHoverEffect(null)}
              className={cn(
                "relative overflow-hidden flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-sm touch-manipulation",
                selectedMuscleGroups.includes(muscle)
                  ? "bg-gradient-to-br from-fuchsia-900/40 to-violet-900/40 border-fuchsia-700/50 text-fuchsia-200 shadow-lg shadow-fuchsia-900/30"
                  : "bg-zinc-800/40 border-zinc-700/30 text-zinc-300 hover:bg-zinc-800/70 hover:border-zinc-600/50 hover:shadow-md hover:shadow-zinc-900/10 active:bg-zinc-800/80"
              )}
              whileHover={{
                scale: 1.02,
                rotateY:
                  muscle === hoverEffect && window.innerWidth > 768
                    ? [0, 2, -2, 0]
                    : 0,
                transition: { rotateY: { repeat: 0, duration: 0.5 } },
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {selectedMuscleGroups.includes(muscle) && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId={`bg-${muscle}`}
                />
              )}
              <div
                className={cn(
                  "min-w-7 h-7 sm:min-w-9 sm:h-9 rounded-lg sm:rounded-xl border flex items-center justify-center transition-all duration-300 flex-shrink-0",
                  selectedMuscleGroups.includes(muscle)
                    ? "border-fuchsia-400 bg-gradient-to-br from-fuchsia-500 to-violet-500"
                    : "border-zinc-600 bg-zinc-800/70"
                )}
              >
                {selectedMuscleGroups.includes(muscle) ? (
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{
                      scale: hoverEffect === muscle ? [1, 1.2, 1] : 1,
                      rotate: isLoaded
                        ? [
                            0,
                            muscle === hoverEffect && window.innerWidth > 768
                              ? 5
                              : 0,
                            muscle === hoverEffect && window.innerWidth > 768
                              ? -5
                              : 0,
                            0,
                          ]
                        : 0,
                    }}
                    transition={{
                      scale: { duration: 0.3 },
                      rotate: { delay: index * 0.05 + 0.5, duration: 0.5 },
                    }}
                  >
                    {muscleGroupIcons[muscle] || (
                      <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                  </motion.div>
                )}
              </div>
              <span className="text-xs sm:text-sm font-medium leading-tight min-w-0 flex-1">
                {muscle}
              </span>

              {/* Selection sparkle effect */}
              <AnimatePresence>
                {selectedMuscleGroups.includes(muscle) && (
                  <motion.div
                    className="absolute top-1 right-1 sm:top-0 sm:right-0 p-0.5 sm:p-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-fuchsia-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMuscleGroups.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-800/40 border border-zinc-700/30 rounded-xl p-4 text-center"
          >
            <p className="text-zinc-400 text-sm">
              No muscle groups match your search
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory(null);
              }}
              className="text-fuchsia-300 hover:text-fuchsia-200 mt-1 h-auto p-0 text-sm"
            >
              Clear filters
            </Button>
          </motion.div>
        )}

        {/* No Selection Warning */}
        <AnimatePresence>
          {selectedMuscleGroups.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex items-center gap-2"
            >
              <div className="p-1 bg-amber-500/20 rounded-lg flex-shrink-0">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
              </div>
              <p className="text-amber-300 text-xs sm:text-sm leading-tight">
                Select at least one muscle group to target
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selection Summary */}
        <AnimatePresence>
          {selectedMuscleGroups.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2"
            >
              <motion.div
                className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-xl p-3 sm:p-4"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-zinc-200 leading-tight">
                      <span className="font-semibold text-fuchsia-300">
                        Selected:{" "}
                      </span>
                      <span className="bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent break-words">
                        {selectedMuscleGroups.join(", ")}
                      </span>
                    </p>
                    <p className="text-xs text-zinc-400 mt-1 leading-tight">
                      {selectedMuscleGroups.includes("Full Body")
                        ? "This will create a comprehensive workout routine targeting all major muscle groups."
                        : `This will create a specialized routine focusing on your selected ${
                            selectedMuscleGroups.length > 1 ? "areas" : "area"
                          }.`}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSelections}
                    className="h-6 sm:h-7 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/70 px-2 flex-shrink-0"
                  >
                    Clear all
                  </Button>
                </div>

                {/* Muscle group chips - show on mobile as scrollable row */}
                <div className="flex flex-wrap sm:flex-wrap gap-1.5 sm:gap-2 mt-3 -mx-1 px-1 overflow-x-auto sm:overflow-visible">
                  <div className="flex gap-1.5 sm:hidden">
                    {selectedMuscleGroups.map((muscle) => (
                      <motion.div
                        key={`chip-${muscle}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-full px-2 py-1 flex items-center gap-1 whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-xs text-fuchsia-200">
                          {muscle}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelection(muscle);
                          }}
                          className="text-fuchsia-300 hover:text-fuchsia-100 p-0.5"
                        >
                          <X className="h-2.5 w-2.5" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                  <div className="hidden sm:flex sm:flex-wrap sm:gap-2">
                    {selectedMuscleGroups.map((muscle) => (
                      <motion.div
                        key={`chip-${muscle}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-full px-3 py-1 flex items-center gap-1"
                      >
                        <span className="text-xs text-fuchsia-200">
                          {muscle}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelection(muscle);
                          }}
                          className="text-fuchsia-300 hover:text-fuchsia-100"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row justify-between gap-3 pt-4 sticky bottom-0 pb-4 sm:pb-6 bg-gradient-to-t from-black via-black/90 to-transparent"
      >
        <Button
          onClick={onPrev}
          variant="outline"
          className="order-2 sm:order-1 relative overflow-hidden group border-zinc-700 bg-zinc-800/70 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm h-10 sm:h-12"
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.span>
          <span className="text-sm sm:text-base">Back</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-zinc-700/10 to-zinc-700/0"
            initial={{ x: "100%" }}
            whileHover={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </Button>

        <Button
          id="generate-button"
          onClick={onGenerate}
          disabled={isGenerating || selectedMuscleGroups.length === 0}
          className={`order-1 sm:order-2 relative overflow-hidden bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 h-12 sm:h-12 text-sm sm:text-base font-medium rounded-xl shadow-lg transition-all duration-300 group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 ${
            isGenerating || selectedMuscleGroups.length === 0
              ? "opacity-50 cursor-not-allowed"
              : "shadow-violet-900/30 hover:shadow-violet-900/50"
          }`}
        >
          <motion.div
            animate={
              isGenerating
                ? { rotate: 360 }
                : selectedMuscleGroups.length > 0
                ? {
                    scale: [1, 1.1, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1.5,
                    },
                  }
                : {}
            }
            transition={
              isGenerating
                ? { duration: 2, repeat: Infinity, ease: "linear" }
                : {}
            }
            className="relative flex-shrink-0"
          >
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            {isGenerating && (
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full"
                animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          <span className="font-semibold group-hover:tracking-wide transition-all duration-300 z-10 leading-tight">
            {isGenerating ? "Creating Workout..." : "Generate My Workout"}
          </span>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-white/20 to-blue-600/0"
            initial={{ x: "100%" }}
            whileHover={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Pulsing border animation when selections are made */}
          {selectedMuscleGroups.length > 0 && !isGenerating && (
            <motion.div
              className="absolute -inset-[1px] rounded-xl z-0"
              style={{
                background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
}
