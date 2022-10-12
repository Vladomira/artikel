import Link from "next/link";
import { FC } from "react";
import { ChapterItem } from "../../../../../../../context/chapters-context";
import { Colors } from "../../../../../../../utils/colors";
import { MediaScreen } from "../../../../../../../utils/media";

import { Label } from "../../../../../../label";
import { List, ListItem } from "../../../../../../list";
import { PureModal } from "../../../../../../modal-box/pure-modal";
import { WrapperBox } from "../../../../../../wrapper-box";

export type ChapterInfoBoxProps = {
    topics: string[];
    chapters: ChapterItem[];
    setIsOpen: (prop: boolean) => void;
};
export const MobileChapters: FC<ChapterInfoBoxProps> = ({
    topics,
    chapters,
    setIsOpen,
}) => {
    return (
        <PureModal setIsOpen={setIsOpen} padding="50px 10%">
            <WrapperBox justifyContent="center">
                <List>
                    {chapters.map(({ chapter }) => {
                        return (
                            <ListItem
                                key={chapter}
                                color={Colors.BLACK}
                                hoverColor={Colors.ORANGE}
                                padding="2px 0px"
                                borderBottomNLast={Colors.LABEL_GREY}
                            >
                                <Link href={""}>
                                    <a>
                                        <WrapperBox
                                            padding="0px"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Label
                                                color={"currentColor"}
                                                fontSize={14}
                                                fontWeight={700}
                                                lineHeight={"1.4"}
                                                text={chapter}
                                            />
                                            <span>
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill={"currentColor"}
                                                >
                                                    <title>arrow-right</title>
                                                    <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                                                </svg>
                                            </span>
                                        </WrapperBox>
                                    </a>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </WrapperBox>
        </PureModal>
    );
};
