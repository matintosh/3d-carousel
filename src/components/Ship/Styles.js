/*
    z-index strategy

    Button: 4
    Ship: 3
    Description shadow 3
    Sign: 2
    Description card: 1
*/

import tw, { css, styled } from "twin.macro";

// Container
export const StyledContainer = styled.div(({ active }) => [
  tw`flex flex-col w-full`,
  css`
    --height: 600px;
    --description-height: 232px;

    height: var(--height);

    position: relative;
    opacity: 1;

    transition: opacity 0.4s ease-in-out;
  `,
  !active
    ? css`
        @media (max-width: 640px) {
          opacity: 0;
        }
      `
    : null,
]);

// Description card
export const StyledDescription = styled.div(() => [
  tw`flex flex-col p-8 text-white overflow-hidden`,
  css`
    height: var(--description-height);

    position: absolute;
    bottom: 40px;
    background-color: #757575;

    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    box-sizing: border-box;
    z-index: 1;
  `,
]);

export const StyledShadow = styled.div(() => [
  css`
    height: 232px;
    width: 100%;

    position: absolute;
    left: 0;
    bottom: -2px;

    background: rgb(117, 117, 117);
    background: linear-gradient(
      0deg,
      rgba(117, 117, 117, 1) 0%,
      rgba(117, 117, 117, 1) 5%,
      rgba(0, 212, 255, 0) 50%
    );

    z-index: 3;
  `,
]);

export const StyledSign = styled.img(() => [
  css`
    width: 80px;
    height: 80px;

    position: absolute;
    bottom: 215px;
    right: -25px;

    z-index: 2;
  `,
]);
export const StyledTitle = tw.p`text-white text-2xl m-0 font-bold mb-3 z-10 w-full`;

export const StyledShip = styled.img(({ active }) => [
  css`
    width: 100%;
    max-height: 300px;
    object-fit: contain;

    position: absolute;
    top: 80px;

    transform: rotateZ(0deg);

    /* MORE ACURATED SHIP SHADOW :P */
    filter: drop-shadow(0px 160px 40px #000000aa);

    z-index: 3;
  `,
  active
    ? css`
        animation: fly 5s infinite ease-in-out, fly-rotate 5s infinite;

        @keyframes fly {
          0% {
            top: 80px;
          }
          50% {
            top: 50px;
          }
          100% {
            top: 80px;
          }
        }

        @keyframes fly-rotate {
          0% {
            transform: rotateZ(0deg);
          }
          25% {
            transform: rotateZ(-1deg);
          }

          50% {
            transform: rotateZ(0deg);
          }

          75% {
            transform: rotateZ(1deg);
          }
          100% {
            transform: rotateZ(0deg);
          }
        }
      `
    : null,
]);

// Edit button
export const StyledButton = styled.button(() => [
  tw`flex flex-row justify-center items-center m-0 text-white font-bold`,
  css`
    position: absolute;
    bottom: 0px;
    left: 50%;

    padding: 16px 42px;

    transform: translate(-50%, 0%);

    background: linear-gradient(270deg, #dd2b2b, #f07a24);
    background-size: 400% 400%;

    border: none;
    border-radius: 50px;

    opacity: 1;

    font-size: 18px;

    animation: appear 800ms ease-in-out;

    z-index: 4;

    &:hover {
      animation: shake infinite 2s;
    }

    @keyframes appear {
      0% {
        bottom: -200px;
        opacity: 0;
      }
      80% {
        bottom: -40px;
        opacity: 0;
      }
      100% {
        bottom: 0px;
        opacity: 1;
      }
    }

    &:hover {
      animation: background-move 2s infinite ease, appear 800ms ease-in-out;

      @keyframes background-move {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  `,
]);

export const StyledPencil = styled.div(() => [
  tw`ml-2`,
  css`
    transform: rotateY(180deg);

    &:hover {
      animation: shake infinite ease-in-out 1s;
    }

    @keyframes shake {
      10%,
      90% {
        transform: rotateY(180deg) translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: rotateY(180deg) translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: rotateY(180deg) translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: rotateY(180deg) translate3d(4px, 0, 0);
      }
    }
  `,
]);
