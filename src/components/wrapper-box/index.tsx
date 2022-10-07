import React, { PropsWithChildren } from "react";
import { WrapperBoxProps, WrapperBoxStyled } from "./wrapper.styles";

export const WrapperBox = ({
    children,
    justifyContent,
    marginTop,
    marginLeft,
    padding,
    direction,
    alignItems,
    width,
    background,
    height,
    maxWidth,
    mediaHidden,
    position,
    top,
    right,
    left,
    onClick,
    zIndex,
    marginBottom,
}: PropsWithChildren<WrapperBoxProps>) => {
    return (
        <WrapperBoxStyled
            justifyContent={justifyContent}
            marginTop={marginTop}
            marginLeft={marginLeft}
            padding={padding}
            direction={direction}
            alignItems={alignItems}
            width={width}
            background={background}
            height={height}
            maxWidth={maxWidth}
            mediaHidden={mediaHidden}
            position={position}
            top={top}
            right={right}
            left={left}
            onClick={onClick}
            zIndex={zIndex}
            marginBottom={marginBottom}
        >
            {children}
        </WrapperBoxStyled>
    );
};
