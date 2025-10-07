import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlankCarousel({ slideCount = 3 }) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const next = () => setPage(([p]) => [p + 1, 1]);
  const prev = () => setPage(([p]) => [p - 1, -1]);

  // Wrap index
  const index = ((page % slideCount) + slideCount) % slideCount;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-lg h-64 mx-auto overflow-hidden rounded-xl border border-white/20 bg-gray-800 flex items-center justify-center">
      {/* Slides */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x * velocity.x;

            if (swipe < -200)
              next(); // swipe left
            else if (swipe > 200) prev(); // swipe right
          }}
          className="absolute w-full h-full flex items-center justify-center bg-gray-700 text-white text-2xl font-bold select-none"
        >
          Slide {index + 1}
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 z-10"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 z-10"
      >
        ›
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center space-x-2 z-10">
        {Array.from({ length: slideCount }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
