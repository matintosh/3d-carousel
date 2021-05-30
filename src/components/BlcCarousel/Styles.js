import tw, { css, styled } from "twin.macro";
import { calculateHighlight } from "../../utils/helpers";

// Container
export const StyledCarousel = styled.div(({ length }) => [
  css`
    width: 100vw;
    height: 1000px;

    perspective: 3000px;
    perspective-origin: 50% -50%;
    transform: scale(0.8);
    padding-top: 6%;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    --length: ${length};
    --item-width: 500px;
    --theta: 2 * 3.141592653589793 / length;
    --apothem: calc(var(--item-width) / ${2 * Math.tan(Math.PI / length)});

    @media (max-width: 480px) {
      --item-width: 400px;
    }
    @media (max-width: 340px) {
      --item-width: 280px;
    }

    @media (max-width: 980px) {
      transform: scale(1);
    }

    @media (max-width: 1600px) {
      transform: scale(0.8);
    }
  `,
]);

// Carousel
export const StyledContainer = styled.div(({ currentItem, length }) => [
  css`
    width: var(--item-width);

    transition: transform 0.5s ease-in-out;
    transform-origin: 50% 50% calc(-1 * var(--apothem));
    transform: rotateY(${currentItem * ((2 * 3.141592653589793) / length)}rad);
    transform-style: preserve-3d;

    margin: 0;
  `,
]);

export const StyledItemContainer = styled.div(
  ({ index, length, absoluteItem }) => [
    css`
      width: 100%;

      box-sizing: border-box;
      opacity: 0.2;
      padding: 0 40px;

      transform-origin: 50% 50% calc(-1 * var(--apothem));
      transition: opacity 400ms ease-in-out;
      transform: rotateY(
        ${(index - 1) * -1 * ((2 * 3.141592653589793) / length)}rad
      );

      &:not(:first-of-type) {
        position: absolute;
        left: 0;
        top: 0;
      }
    `,
    calculateHighlight(index, absoluteItem, length)
      ? css`
          opacity: 1;
        `
      : null,
  ]
);

// Controllers
export const StyledButtonsContainer = styled.div(() => [
  tw`flex flex-row w-full justify-between absolute top-1/2`,
  css`
    transform: translate(0%, -50%);
  `,
]);
export const StyledController = tw.div`m-4 p-2`;
