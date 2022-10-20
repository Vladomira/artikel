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
    boxShadow,
    bottom,
    borderBottom,
    minWidth,
    borderTop,
    margin,
    overflow,
}: PropsWithChildren<WrapperBoxProps>) => {
    return (
        <WrapperBoxStyled
            minWidth={minWidth}
            borderBottom={borderBottom}
            boxShadow={boxShadow}
            justifyContent={justifyContent}
            marginTop={marginTop}
            marginLeft={marginLeft}
            margin={margin}
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
            bottom={bottom}
            left={left}
            onClick={onClick}
            zIndex={zIndex}
            marginBottom={marginBottom}
            borderTop={borderTop}
            overflow={overflow}
        >
            {children}
        </WrapperBoxStyled>
    );
};
