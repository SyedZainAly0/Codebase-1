import { useState } from "react";
import Carousel from "../components/Carousel";
import Controls from "../components/Controls";
import Dots from "../components/Dots";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goToSlide = (i) => setIndex(i);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home Page</h1>

      <Carousel image={images[index]} />
      <Controls next={next} prev={prev} />
      <Dots images={images} activeIndex={index} goToSlide={goToSlide} />
    </div>
  );
}

export default Home;