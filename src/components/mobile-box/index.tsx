import React, { PropsWithChildren } from "react";
import { MobileBoxStyled, MobileBoxStyledProps } from "./mobile-box.styles";

export const MobileBox = ({
    children,
}: PropsWithChildren<MobileBoxStyledProps>) => {
    return <MobileBoxStyled>{children}</MobileBoxStyled>;
};
