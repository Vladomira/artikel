import { FC } from "react";
import { SetIsOpenProps } from "../../utils/prop-types/setIsOpen";
import { Button } from "../button/button";
import {
    CloseIconWrapper,
    CloseIconWrapperProps,
} from "./close-icon-wrapper.style";

type CloseButtonProps = SetIsOpenProps &
    CloseIconWrapperProps & {
        top?: string;
        right?: string;
        position?: "absolute" | "relative" | "fixed";
        color?: string;
        width?: number;
        height?: number;
    };

export const CloseButton: FC<CloseButtonProps> = ({
    setIsOpen,
    top,
    right,
    position,
    color,
    width,
    height,
    hoverColor,
    colorWrapper,
}) => (
    <Button
        position={position}
        top={top}
        right={right}
        onClick={() => setIsOpen(false)}
    >
        <CloseIconWrapper color={colorWrapper} hoverColor={hoverColor}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={color ? color : "#fff"}
                viewBox="0 0 50 50"
                width={width ? width : "24"}
                height={height ? height : "24"}
            >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
        </CloseIconWrapper>
    </Button>
);
