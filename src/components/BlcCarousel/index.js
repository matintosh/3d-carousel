import { useState, useEffect } from "react";
import { styled, css } from "twin.macro";

import { defaultShipsList } from "../../utils/helpers";
import Ship from "../Ship";
import Carousel from "./Carousel";
import Controllers from "./Controllers";
import { StyledCarousel } from "./Styles";

const DefaultListUI = defaultShipsList.map((i) => <Ship image={i.image} />);

export default function CarouselShips({
  items = DefaultListUI,
  onChange = () => {},
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    onChange(current % items.length);
  }, [current]);

  if (items.length < 3)
    return <p>This type of carousel does not support less than 3 items</p>;

  return (
    <StyledCarousel length={items.length}>
      <Carousel current={current} items={items} />
      <Controllers onChange={setCurrent} current={current} />
    </StyledCarousel>
  );
}
