import { FC } from "react";
import { Button } from "../button/button";
import { Icon } from "../icon";

type ActionIconProps = {
    imgName: string;
    imgFolder: string;
    width: number;
    height: number;
    format: string;
    marginRight: number;
    onClick: () => void;
};
export const ActionIcon: FC<ActionIconProps> = ({
    imgName,
    imgFolder,
    width,
    height,
    format,
    marginRight,
    onClick,
}) => {
    return (
        <Button marginRight={marginRight} onClick={onClick}>
            <Icon
                imgName={imgName}
                folder={imgFolder}
                width={width}
                height={height}
                format={format}
            />
        </Button>
    );
};
