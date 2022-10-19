import { FC } from "react";
import { MobileWrapperColumn } from "../../mobile-wrapper/mobile-wrapper.styles";
import { Section } from "../../section";
import { WrapperBox } from "../../wrapper-box";
import { LastArticlesSection } from "./last-articles-section";
import { MoreArticles } from "./more-articles-advice";

export const LastArticles: FC = () => {
    return (
        <Section paddingTop={35} paddingBottom={0} container>
            <WrapperBox maxWidth={1160} width="100%" margin="0 auto">
                <MobileWrapperColumn>
                    <LastArticlesSection />
                    <MoreArticles />
                </MobileWrapperColumn>
            </WrapperBox>
        </Section>
    );
};
