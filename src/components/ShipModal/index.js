import { useContext, useState, useEffect } from "react";
import tw from "twin.macro";
import { ShipsAppContext } from "../../context";
import { StyledButton } from "../Ship/Styles";
import {
  StyledModal,
  StyledModalContainer,
  StyledCross,
  StyledSide,
  StyledShip,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "./Styles";

export default function ShipModal() {
  const { editableShip, setEditableShip, editShip } =
    useContext(ShipsAppContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editableShip) {
      setName(editableShip.name);
      setDescription(editableShip.description);
    }
  }, [editableShip]);
  const active = !!editableShip;

  const SaveAndCloseButton = tw(StyledButton)` mb-5`;

  return (
    <StyledModalContainer active={active}>
      <StyledModal active={active}>
        <StyledCross
          src="/images/cross.png"
          onClick={() => setEditableShip(null)}
        />
        <StyledSide src={`/images/${editableShip?.sign ?? "rebels"}.png`} />
        <StyledShip
          src={editableShip?.image ?? "/images/ship_1.png"}
          alt={editableShip?.img_alt ?? "ship_1"}
        />
        <StyledForm>
          <StyledInput value={name} onChange={(e) => setName(e.target.value)} />
          <StyledTextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </StyledForm>
        <SaveAndCloseButton
          onClick={() => {
            editShip(editableShip.index, {
              name,
              description,
              side: editableShip.sign,
              image_src: editableShip.image,
              img_alt: editableShip.img_alt,
            });

            setEditableShip(null);
          }}
        >
          Save & Close
        </SaveAndCloseButton>
      </StyledModal>
    </StyledModalContainer>
  );
}
