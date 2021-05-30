import { useState } from "react";
import { Carousel, Ship, Indicator } from "../../src/components";
import { StyledContainer } from "./Styles";
const shipsList = [
  {
    image: "/images/ship_1.png",
  },
  {
    image: "/images/ship_2.png",
  },
  {
    image: "/images/ship_3.png",
  },
  {
    image: "/images/ship_4.png",
  },
  {
    image: "/images/ship_5.png",
  },
  {
    image: "/images/ship_6.png",
  },
  {
    image: "/images/ship_7.png",
  },
];

export default function Ships() {
  const [activeShip, setActiveShip] = useState(0);

  const handleActiveShip = (n) => setActiveShip(n);

  const ShipsUI = shipsList.map((i, idx) => {
    return (
      <Ship
        active={(activeShip === 8 ? 0 : activeShip) === idx}
        image={i.image}
      />
    );
  });
  return (
    <StyledContainer>
      <Carousel items={ShipsUI} onChange={handleActiveShip} />
      <div style={{ width: "100%", margin: "50px 0" }}>
        <Indicator
          length={ShipsUI.length}
          current={activeShip}
          inverted={true}
        />
      </div>
    </StyledContainer>
  );
}
