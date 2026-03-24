import Slide from "../Slide";
import Card from "../Card";

const UPSSlide: React.FC = () => {
  return (
    <Slide>
      <h2 className="text-4xl font-bold mb-10">
        Класифікація UPS
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <Card
          title="Off-Line"
          short="Простий і дешевий"
          full="Працює від мережі, при відключенні переходить на батарею. Не стабілізує напругу."
        />

        <Card
          title="Line-Interactive"
          short="Оптимальний для дому"
          full="Має AVR стабілізатор, не використовує батарею при малих стрибках напруги."
        />

        <Card
          title="On-Line"
          short="Максимальний захист"
          full="Подвійне перетворення струму, ідеальна синусоїда, нульовий час перемикання."
        />

      </div>
    </Slide>
  );
};

export default UPSSlide;