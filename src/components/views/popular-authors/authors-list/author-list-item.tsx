import { FC } from "react";
import { AuthorItem } from ".";
import { Icon } from "../../../icon";
import Link from "next/link";
import { Label } from "../../../label";
import {
    AuthorLink,
    BackgroundSign,
    AuthorItemStyled,
} from "./author-item.styles";
import { WrapperBox } from "../../../wrapper-box";
import { TagArticle } from "../../../tag-article";
import { Button } from "../../../button/button";
import { Colors } from "../../../../utils/colors";
import { getLength } from "../../../../utils/helpers/get-max-length";
import { AuthorsNames } from "./author-name";

type AuthorsItemProps = AuthorItem & {
    borderColor: string;
    nameColor: string;
};
export const AuthorsListItem: FC<AuthorsItemProps> = ({
    id,
    authorName,
    article,
    borderColor,
    nameColor,
}) => {
    const img = authorName.toLowerCase().replace(/ /g, "-");
    const backImgUrl = "/images/authors/autograph";

    return (
        <AuthorItemStyled
            direction="column"
            padding="5px 0px 23px "
            borderColor={borderColor}
        >
            <BackgroundSign width="100%" backImg={`${backImgUrl}/${id}.svg`}>
                <Link href={`/${authorName}`} passHref>
                    <AuthorLink borderColor={borderColor}>
                        <Icon
                            imgName={img}
                            width={"90"}
                            height={"90"}
                            folder={"authors"}
                            format={"webp"}
                            objectFit="cover"
                        />
                    </AuthorLink>
                </Link>
            </BackgroundSign>
            <AuthorsNames authorName={authorName} nameColor={nameColor} />

            <WrapperBox
                margin="14px auto 0px"
                padding="0px 22px"
                height={130}
                overflow="hidden"
            >
                <TagArticle
                    color={"grey"}
                    fontSize={12}
                    fontWeight={400}
                    lineHeight={"1.55"}
                    text={getLength(article, 139)}
                />
            </WrapperBox>
            <Button
                padding="10px 20px"
                background={nameColor}
                borderRadius={"2px"}
                hoverBackground={borderColor}
                width="79px"
                margin="13px auto 0px"
            >
                <Label
                    color={Colors.WHITE}
                    fontSize={12}
                    fontWeight={700}
                    lineHeight={"18px"}
                    letterSpacing={"0.15em"}
                    text={"Volg"}
                    textTransform="uppercase"
                />
            </Button>
        </AuthorItemStyled>
    );
};
