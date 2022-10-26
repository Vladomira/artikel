import { FC } from "react";
import {
    articlesColors,
    quantityItems,
} from "../../../../utils/arrays/articles-quantity";
import { Colors } from "../../../../utils/colors";
import { BottomHeader } from "../../../headers/bottom-header";
import { Label } from "../../../label";
import { List, ListItem } from "../../../list";
import {
    ArticleswQuantityWrpper,
    ArticlesHeader,
    ArticlesList,
} from "./articles-quantity.styles";

export const ArticlesQuantity: FC = () => {
    return (
        <ArticleswQuantityWrpper width="100%" direction="column">
            <ArticlesHeader
                color={Colors.WHITE}
                fontSize={18}
                fontWeight={700}
                lineHeight="1.35"
                textTransform={"uppercase"}
            >
                Artikel.nl in getallen
            </ArticlesHeader>

            <ArticlesList display="flex" marginTop={30}>
                {quantityItems.map(({ name, quantity }, idx) => {
                    return (
                        <ListItem
                            key={name}
                            marginRightNotLast={48}
                            direction="column"
                        >
                            <Label
                                color={articlesColors[idx]}
                                hoverColor={Colors.WHITE}
                                fontSize={24}
                                letterSpacing=".13em"
                                fontWeight={700}
                                lineHeight={"1"}
                                text={quantity}
                                textTransform="uppercase"
                            />
                            <Label
                                color={Colors.WHITE}
                                fontSize={12}
                                fontWeight={300}
                                lineHeight={"1.4"}
                                text={name}
                                marginTop={10}
                            />
                        </ListItem>
                    );
                })}
            </ArticlesList>
        </ArticleswQuantityWrpper>
    );
};
