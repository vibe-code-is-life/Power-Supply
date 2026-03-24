import { useState, useEffect } from "react";
import TitleSlide from "./assets/components/Slides/TitleSlide";
import UPSSlide from "./assets/components/Slides/UPSSlide";

const slides = [
  <TitleSlide key="1" />,
  <UPSSlide key="2" />,
];

function App() {
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <div
      onClick={next}
      onContextMenu={(e) => {
        e.preventDefault();
        prev();
      }}
    >
      {slides[index]}
    </div>
  );
}

export default App;