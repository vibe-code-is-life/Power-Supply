// components/Slide.tsx
import type { SlideProps } from "../../types";

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0F172A] text-white p-10">
      <div className="max-w-5xl w-full">
        {children}
      </div>
    </div>
  );
};

export default Slide;