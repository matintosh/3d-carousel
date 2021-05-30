import { useContext } from "react";
import { ShipsAppContext } from "../../context";
import {
  StyledContainer,
  StyledShip,
  StyledSign,
  StyledDescription,
  StyledTitle,
  StyledShadow,
  StyledButton,
  StyledPencil,
} from "./Styles";

export default function Ship(props) {
  const { setEditableShip } = useContext(ShipsAppContext);

  return (
    <StyledContainer active={props.active}>
      <StyledShip active={props.active} src={props.image} alt={props.img_alt} />
      <StyledSign src={`/images/${props.sign}.png`} alt={props.sign} />
      <StyledDescription>
        <StyledTitle>{props.name}</StyledTitle>
        {props.description}
        <StyledShadow />
      </StyledDescription>
      {props.active && (
        <StyledButton onClick={() => setEditableShip({ ...props })}>
          Edit
          <StyledPencil>✎</StyledPencil>
        </StyledButton>
      )}
    </StyledContainer>
  );
}
