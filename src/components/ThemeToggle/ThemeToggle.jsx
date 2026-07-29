import "./ThemeToggle.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <div className="toggle-thumb">
        {theme === "dark" ? <FiMoon /> : <FiSun />}
      </div>
    </button>
  );
}