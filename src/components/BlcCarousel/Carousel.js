import { StyledContainer, StyledItemContainer } from "./Styles";

export default function Carousel({ current, items }) {
  return (
    <StyledContainer currentItem={current - 1} length={items.length}>
      {items.map((Item, idx) => (
        <StyledItemContainer
          key={`carousel-item-${idx}`}
          index={idx}
          length={items.length}
          currentItem={current}
          absoluteItem={current % items.length}
        >
          {Item}
        </StyledItemContainer>
      ))}
    </StyledContainer>
  );
}
