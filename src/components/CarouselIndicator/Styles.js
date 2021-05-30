import tw, { css, styled } from "twin.macro";

// Carousel Indicator
export const StyledIndicatorContainer = styled.div(() => [
  tw`w-full flex flex-row justify-around items-center `,
]);

export const StyledIndicator = styled.div(({ active }) => [
  tw`w-full flex flex-row justify-around items-center gap-x-0.5 mb-4 mt-4`,
  css`
    width: 120px;
    height: 8px;

    background-color: #4b4f52;

    transition: background-color 300ms ease-in-out;
  `,
  active
    ? css`
        background-color: #fff;
      `
    : null,
]);
