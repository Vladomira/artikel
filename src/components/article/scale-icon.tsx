import Link from "next/link";
import { FC } from "react";
import { Icon } from "../icon";
import { ScaleLink, ScaleWrapper } from "./scale-wrapper.styles";

type ScaleIconProps = {
    link: string;
    imgName: string;
    format: string;
    folder: string;
    imgWidth: number;
    imgHeight: number;
    marginBottom?: string;
    minWidth?: string;
};
export const ScaleIcon: FC<ScaleIconProps> = ({
    link,
    format,
    folder,
    imgWidth,
    imgHeight,
    imgName,
    marginBottom,
    minWidth,
}) => (
    <Link href={link} passHref>
        <ScaleLink marginBottom={marginBottom}>
            <ScaleWrapper minWidth={minWidth} height={imgHeight}>
                <Icon
                    imgName={imgName}
                    format={format}
                    folder={folder}
                    width={imgWidth}
                    height={imgHeight}
                    objectFit="cover"
                />
            </ScaleWrapper>
        </ScaleLink>
    </Link>
);
