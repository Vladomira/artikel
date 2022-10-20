import { FC } from "react";
import { TagArticleProps, TagArticleStyled } from "./tag-article.styles";

type Props = TagArticleProps & { text: string };

export const TagArticle: FC<Props> = ({
    color,
    fontSize,
    fontWeight,
    fontFamily,
    fontStyle,
    lineHeight,
    letterSpacing,
    textDecoration,
    textAlign,
    marginLeft,
    text,
}) => {
    return (
        <TagArticleStyled
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            fontStyle={fontStyle}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textDecoration={textDecoration}
            textAlign={textAlign}
            marginLeft={marginLeft}
        >
            {text}
        </TagArticleStyled>
    );
};
