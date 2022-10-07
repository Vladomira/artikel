import { FC } from "react";
import { SetIsOpen } from "../../utils/types/setIsOpen";
import { Button } from "../button/button";
import { Icon } from "../icon";

type CloseButtonProps = SetIsOpen & {
    top: string;
    right: string;
};

export const CloseButton: FC<CloseButtonProps> = ({
    setIsOpen,
    top,
    right,
}) => (
    <Button
        position="absolute"
        top={top}
        right={right}
        onClick={() => setIsOpen(false)}
    >
        <Icon
            imgName={"close"}
            format="svg"
            folder="header"
            width={24}
            height={24}
            color="white"
        />
    </Button>
);
