import { styled, css } from "twin.macro";

const StyledDiv = styled.div(() => [
  css`
    width: 100vw;
    height: 230px;
    background-color: limegreen;

    display: flex;
    justify-content: center;

    position: relative;
  `,
]);

const StyledImage = styled.img(() => [
  css`
    position: absolute;
    bottom: 0;
    
    height: 140%;
  `,
]);

const defaultList = [
  {
    image: "/images/ship_1.png",
  },
];

export default function Carousel({ items = defaultList }) {
  return (
    <StyledDiv>
      {items.map((i) => (
        <StyledImage src={i.image} />
      ))}
    </StyledDiv>
  );
}
