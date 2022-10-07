import Link from "next/link";
import { FC } from "react";
import { LinkStyled, LinkStyledProps } from "./link.styles";

type LinkProps = LinkStyledProps & {
    text: string;
    color: string;
    link: string;
    decoration: "underline";
    hoverColor: string;
    noopener?: boolean;
};
export const LinkComponent: FC<LinkProps> = ({
    text,
    color,
    link,
    decoration,
    fontSize,
    fontWeight,
    fontFamily,
    fontStyle,
    letterSpacing,
    hoverColor,
    cursor,
    noopener,
}) => {
    return (
        <Link href={link} passHref>
            <LinkStyled
                target="_blank"
                rel={noopener && "noopener noreferrer"}
                textDecoration={decoration}
                color={color}
                fontSize={fontSize}
                lineHeight={"1.4"}
                fontWeight={fontWeight}
                fontFamily={fontFamily}
                fontStyle={fontStyle}
                letterSpacing={letterSpacing}
                hoverColor={hoverColor}
                cursor={cursor}
            >
                {text}
            </LinkStyled>
        </Link>
    );
};
