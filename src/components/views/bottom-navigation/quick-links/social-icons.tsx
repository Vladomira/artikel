import { FC } from "react";
import { socItems } from "../../../../utils/arrays/social-items";
import { Colors } from "../../../../utils/colors";
import { PureHeader } from "../../../headers/pure-header";
import { Icon } from "../../../icon";
import { PureLink } from "../../../link/pure-link";
import { List, ListItem } from "../../../list";
import { WrapperBox } from "../../../wrapper-box";

export const BottomSocialIcons: FC = () => {
    return (
        <WrapperBox direction="column" marginTop={33}>
            <PureHeader header={"Volg ons"} color={Colors.WHITE} />
            <List display="flex" marginTop={20}>
                {socItems.map(({ name, link }) => (
                    <ListItem key={name} marginRightNotLast={20} height={16}>
                        <PureLink width={"16px"} height={"16px"} link={link}>
                            <Icon
                                imgName={name}
                                width={"16"}
                                height={"16"}
                                folder={"bottom-nav/social-icons"}
                                format={"svg"}
                            />
                        </PureLink>
                    </ListItem>
                ))}
            </List>
        </WrapperBox>
    );
};
