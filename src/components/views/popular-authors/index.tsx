import { FC } from "react";
import { ChapterInfoHeader } from "../../headers/chapter-info-header";
import { Section } from "../../section";
import { WrapperBox } from "../../wrapper-box";
import { AuthorsList } from "./authors-list";

export const PopularAuthors: FC = () => {
    return (
        <Section paddingTop={64} paddingBottom={55} container>
            <WrapperBox
                width="100%"
                maxWidth={1160}
                direction="column"
                margin="0 auto"
            >
                <ChapterInfoHeader header={"Populaire auteurs"} />
                <AuthorsList />
            </WrapperBox>
        </Section>
    );
};
