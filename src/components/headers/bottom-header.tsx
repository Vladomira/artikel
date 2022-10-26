import { FC } from "react";
import { BottomHeaderStyled, HeaderStyledProps } from "./header.styles";

type BottomHeaderProps = HeaderStyledProps & {
    text: string;
};
export const BottomHeader: FC<BottomHeaderProps> = ({
    text,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    textTransform,
    textAlign,
    whiteSpace,
    hoverColor,
    display,
    alignItems,
    marginRight,
}) => {
    return (
        <BottomHeaderStyled
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            textTransform={textTransform}
            textAlign={textAlign}
            whiteSpace={whiteSpace}
            hoverColor={hoverColor}
            display={display}
            alignItems={alignItems}
            marginRight={marginRight}
        >
            {text}
        </BottomHeaderStyled>
    );
};
