import { FC } from "react";
import { Colors } from "../../utils/colors";
import { Icon } from "../icon";
import { ButtonToSlideStyled } from "./carousel.styles";

type ButtonToSlideProps = {
    onHandleClick: () => void;
    imgName: string;
    left?: string;
    right?: string;
};
export const ButtonToSlide: FC<ButtonToSlideProps> = ({
    onHandleClick,
    imgName,
    left,
    right,
}) => (
    <ButtonToSlideStyled
        background={Colors.BLACK}
        onClick={() => onHandleClick()}
        position="absolute"
        left={left}
        right={right}
        width="32px"
        height={32}
    >
        <Icon
            imgName={imgName}
            width={"18"}
            height={"18"}
            folder={"tech-icons"}
            format={"svg"}
        />
    </ButtonToSlideStyled>
);
