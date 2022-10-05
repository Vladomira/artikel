import React from "react";
import { FC } from "react";
import { socItems } from "../../utils/arrays/social-items";
import { Icon } from "../icon";
import { List, ListItem } from "../list";

type SocialLinksProps = {
    imgSize: number;
    itemSize: number;
    marginRightNotLast: number;
    listMarginRight: number;
    jContentList?: string;
    itemPadding: string;
};

export const SocialLinks: FC<SocialLinksProps> = ({
    imgSize,
    marginRightNotLast,
    listMarginRight,
    jContentList,
    itemPadding,
    itemSize,
}) => {
    return (
        <List
            display="flex"
            overflow="unset"
            marginRight={listMarginRight}
            jConten={jContentList}
        >
            {socItems.map(({ name, link }) => (
                <ListItem
                    key={name}
                    marginRightNotLast={marginRightNotLast}
                    background="#333"
                    padding={itemPadding}
                    jConten="center"
                    width={itemSize}
                    height={itemSize}
                >
                    <Icon
                        imgName={name}
                        format="svg"
                        folder="social-icons"
                        width={imgSize}
                        height={imgSize}
                        link={link}
                        color="#fff"
                        target="_blank"
                    />
                </ListItem>
            ))}
        </List>
    );
};
