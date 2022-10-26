import { FC } from "react";
import { LinkComponent } from "../../../../link";
import { Colors } from "../../../../../utils/colors";
import { WrapperBox } from "../../../../wrapper-box";
import { BottomTopicItem, BottomTopicList } from "../bottom-nav-list.styles";

export const BottomNavTopics: FC<{ topics: string[] }> = ({ topics }) => (
    <WrapperBox marginLeft={30} width="100%">
        <BottomTopicList
            marginLeft={"-30"}
            display="flex"
            flexWrap="wrap"
            direction="column"
            overflow="unset"
        >
            {topics.map((el) => (
                <BottomTopicItem
                    key={el}
                    flexBasis={"(100% / 4 - 30px)"}
                    marginLeft={30}
                >
                    <LinkComponent
                        color={Colors.WHITE}
                        fontSize={14}
                        fontWeight={300}
                        hoverColor={Colors.ORANGE}
                        text={el}
                        link={`/${el}`}
                        padding="6px 6px"
                        decoration={"none"}
                    />
                </BottomTopicItem>
            ))}
        </BottomTopicList>
    </WrapperBox>
);
