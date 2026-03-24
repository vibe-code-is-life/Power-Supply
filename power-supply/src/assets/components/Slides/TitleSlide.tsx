// slides/TitleSlide.tsx
import Slide from "../Slide";

const TitleSlide: React.FC = () => {
  return (
    <Slide>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-400 drop-shadow-[0_0_20px_#22c55e]">
          Пристрої безперебійного живлення
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Блоки живлення та зарядні станції
        </p>

        <p className="mt-10 text-gray-400">
          Вітер Ростислав
        </p>
      </div>
    </Slide>
  );
};

export default TitleSlide;