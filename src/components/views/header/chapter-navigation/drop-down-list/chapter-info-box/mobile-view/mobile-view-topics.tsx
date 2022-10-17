import Link from "next/link";
import { FC } from "react";
import { Colors } from "../../../../../../../utils/colors";
import { ChapterInfoHeader } from "../../../../../../headers/chapter-info-header";
import { Label } from "../../../../../../label";
import { List, ListItem } from "../../../../../../list";

type MobileViewTopicsProps = {
    topics: string[];
    chapterName: string;
    setChoosenChapter: (prop: string) => void;
};
export const MobileViewTopics: FC<MobileViewTopicsProps> = ({
    topics,
    chapterName,
    setChoosenChapter,
}) => {
    return (
        <>
            <ChapterInfoHeader header={`${chapterName} `} />
            <List>
                {topics.map((topic) => (
                    <ListItem
                        key={topic}
                        color={Colors.BLACK}
                        hoverColor={Colors.ORANGE}
                        padding="7px 0px"
                    >
                        <Link
                            href={`/${chapterName.toLowerCase()}/${topic.toLowerCase()}`}
                        >
                            <a>
                                <Label
                                    color={"currentColor"}
                                    fontSize={14}
                                    fontWeight={300}
                                    lineHeight={"1.4"}
                                    text={topic}
                                />
                            </a>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    );
};
