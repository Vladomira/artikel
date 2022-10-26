import Link from "next/link";
import { FC } from "react";
import { Colors } from "../../../../../../../utils/colors";
import { Label } from "../../../../../../label";
import { List, ListItem } from "../../../../../../list";

type TopicListProps = {
    topics: string[];
};

export const TopicList: FC<TopicListProps> = ({ topics }) => {
    return (
        <List
            display="flex"
            flexWrap="wrap"
            marginTop={"-15"}
            marginLeft={"-15"}
        >
            {topics?.map((el) => (
                <ListItem
                    key={el}
                    marginTop={15}
                    marginLeft={15}
                    flexBasis="(100% / 4 - 15px)"
                    jConten="center"
                    hoverColor={Colors.ORANGE}
                >
                    <Link href="">
                        <a>
                            <Label
                                color={"currentColor"}
                                fontSize={14}
                                fontWeight={300}
                                lineHeight={"1.4"}
                                text={el}
                            />
                        </a>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};
