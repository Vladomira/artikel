import React, { FC } from "react";
import { StyledTitle, StyledTitleProps } from "./title.styles";

export type TitleProps = StyledTitleProps & { text: string | number };

export const Title: FC<TitleProps> = ({
    text,
    color,
    fontWeight,
    fontSize,
    marginTop,
    lineHeight,
    marginLeft,
    marginBottom,
    textTransform,
    letterSpacing,
    marginRight,
    margin,
    fontFamily,
}) => {
    return (
        <StyledTitle
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginBottom={marginBottom}
            textTransform={textTransform}
            marginRight={marginRight}
            margin={margin}
            fontFamily={fontFamily}
        >
            {text}
        </StyledTitle>
    );
};
