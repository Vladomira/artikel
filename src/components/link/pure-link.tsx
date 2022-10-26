import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { PureLinkStyled, PureLinkStyledProps } from "./link.styles";

type PureLinkProps = PureLinkStyledProps & {
    link: string;
};
export const PureLink = ({
    link,
    children,
    width,
    height,
}: PropsWithChildren<PureLinkProps>) => {
    return (
        <Link href={link} passHref>
            <PureLinkStyled width={width} height={height}>
                {children}
            </PureLinkStyled>
        </Link>
    );
};
