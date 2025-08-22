import { useEffect, useState } from "react";

export function useTyping(lines: string[], delay = 50, pause = 1500): string {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setLineIndex((prev) => (prev + 1) % lines.length);
        setDisplayText("");
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines, delay, pause]);

  return displayText;
}
