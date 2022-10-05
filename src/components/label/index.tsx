import React, { FC } from "react";
import { LabelStyledProps, StyledLabel } from "./label.styles";

export type LabelProps = LabelStyledProps & { text: string | number };

export const Label: FC<LabelProps> = ({
    text,
    color,
    fontWeight,
    fontSize,
    marginTop,
    textAlign,
    lineHeight,
    marginLeft,
    marginBottom,
    textDecoration,
    textTransform,
    backGround,
    letterSpacing,
    marginRight,
    margin,
    opacity,
    fontFamily,
    textShadow,
    fontStyle,
    hoverColor,
    width,
}) => {
    return (
        <StyledLabel
            color={color}
            width={width}
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textAlign={textAlign}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginBottom={marginBottom}
            textDecoration={textDecoration}
            textTransform={textTransform}
            backGround={backGround}
            marginRight={marginRight}
            margin={margin}
            opacity={opacity}
            fontFamily={fontFamily}
            textShadow={textShadow}
            fontStyle={fontStyle}
            hoverColor={hoverColor}
        >
            {text}
        </StyledLabel>
    );
};
