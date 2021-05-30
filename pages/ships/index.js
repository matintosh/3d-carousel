import { useState, useContext } from "react";
import { Carousel, Ship, Indicator } from "../../src/components";
import { ShipsAppContext } from "../../src/context";
import { StyledContainer } from "./Styles";

export default function Ships() {
  const { ships } = useContext(ShipsAppContext);
  const [activeShip, setActiveShip] = useState(0);

  const handleActiveShip = (n) => setActiveShip(n);

  const ShipsUI = ships.map((i, idx) => {
    return (
      <Ship
        active={(activeShip === 8 ? 0 : activeShip) === idx}
        image={i.image_src}
        name={i.name}
        description={i.description}
        sign={i.side}
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
