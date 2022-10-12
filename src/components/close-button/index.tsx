import { FC } from "react";
import { SetIsOpenProps } from "../../utils/prop-types/setIsOpen";
import { Button } from "../button/button";

type CloseButtonProps = SetIsOpenProps & {
    top?: string;
    right?: string;
    position?: "absolute" | "relative" | "fixed";
    color?: string;
};

export const CloseButton: FC<CloseButtonProps> = ({
    setIsOpen,
    top,
    right,
    position,
    color,
}) => (
    <Button
        position={position}
        top={top}
        right={right}
        onClick={() => setIsOpen(false)}
    >
        <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={color ? color : "#fff"}
                viewBox="0 0 50 50"
                width="24"
                height="24"
            >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
        </span>
    </Button>
);
