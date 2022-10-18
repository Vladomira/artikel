import Link from "next/link";
import { FC } from "react";
import { Label } from "../label";

type InfoLinkProps = {
    link: string;
    labelText: string;
    hoverColor?: string;
    color: string;
    fontWeight: number;
    fontSize?: number;
    lineHeight?: string;
    whiteSpace?: string;
};
export const InfoLink: FC<InfoLinkProps> = ({
    link,
    labelText,
    hoverColor,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    whiteSpace,
}) => {
    return (
        <Link href={link}>
            <a>
                <Label
                    hoverColor={hoverColor}
                    color={color}
                    fontSize={fontSize || 12}
                    fontWeight={fontWeight}
                    lineHeight={lineHeight || "1.4"}
                    text={labelText}
                    whiteSpace={whiteSpace}
                />
            </a>
        </Link>
    );
};
