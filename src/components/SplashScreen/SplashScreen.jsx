import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
          className="splash"
          initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.2,
              filter: "blur(20px)",
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <div className="background"></div>
            <motion.div
              className="splash-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Logo */}
              <motion.h1
                className="ak-logo"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <span>A</span>K
              </motion.h1>

              {/* Name */}
              <motion.h2
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span>ُENG-Abdelrahman</span> Mohamed El-Khatib
              </motion.h2>

              {/* Job */}
              <motion.h3
                className="job"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span>SOFTWARE</span> ENGINEER
              </motion.h3>

              <motion.div
                className="line"
                initial={{ width: 0 }}
                animate={{ width: 350 }}
                transition={{ delay: 1, duration: 0.8 }}
              />

              {/* Quran */}
              <motion.p
                className="verse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
               ﴾ وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ
                وَإِلَيْهِ أُنِيبُ﴿
              </motion.p>

              <motion.span
                className="surah"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                سورة هود (88)
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}