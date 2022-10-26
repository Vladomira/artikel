import { FC } from "react";
import { Colors } from "../../../../../utils/colors";
import { LinkComponent } from "../../../../link";
import { List } from "../../../../list";
import { WrapperBox } from "../../../../wrapper-box";
import { ItemTopic } from "./list.styles";

type MobileTopicsProps = {
    topics: string[];
};
export const MobileBottomTopics: FC<MobileTopicsProps> = ({ topics }) => {
    return (
        <WrapperBox margin="23px" justifyContent="center">
            <List
                direction="column"
                display="flex"
                overflow="unset"
                marginLeft={"-16"}
                flexWrap="wrap"
                alignItems="center"
            >
                {topics.length > 0 &&
                    topics.map((el) => (
                        <ItemTopic
                            jConten="center"
                            key={el}
                            flexBasis={"(100% / 2 - 16px)"}
                            marginLeft={16}
                        >
                            <LinkComponent
                                color={Colors.WHITE}
                                fontSize={14}
                                fontWeight={300}
                                hoverColor={Colors.ORANGE}
                                text={el}
                                link={`/${el.toLowerCase()}`}
                                padding="0px"
                                decoration={"none"}
                            />
                        </ItemTopic>
                    ))}
            </List>
        </WrapperBox>
    );
};
