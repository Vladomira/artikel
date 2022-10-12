import Link from "next/link";
import { FC } from "react";
import { Label } from "../label";

type InfoLinkProps = {
    link: string;
    labelText: string;
    hoverColor?: string;
    color: string;
    fontWeight: number;
};
export const InfoLink: FC<InfoLinkProps> = ({
    link,
    labelText,
    hoverColor,
    color,
    fontWeight,
}) => {
    return (
        <Link href={link}>
            <a>
                <Label
                    hoverColor={hoverColor}
                    color={color}
                    fontSize={12}
                    fontWeight={fontWeight}
                    lineHeight={"1.4"}
                    text={labelText}
                    whiteSpace="nowrap"
                />
            </a>
        </Link>
    );
};
