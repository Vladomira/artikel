import { FC } from "react";
import { BottomChaptersProps } from "../../../api/chapters-bottom-request";
import { Colors } from "../../../utils/colors";
import { Container } from "../../container/container";
import { BecomeWriter } from "./become-writer";
import { BottomNavSection } from "./bottom-nav-chapters-list";
import {
    SectionBottomWrapper,
    ListsInfoBox,
    GeneralInfoBox,
} from "./bottom-nav.styles";
import { QuickLinksSection } from "./quick-links";

export const BottomNav: FC<BottomChaptersProps> = ({ chapters }) => {
    return (
        <SectionBottomWrapper
            paddingTop={67}
            paddingBottom={63}
            background={Colors.BROWN_BLACK}
        >
            <Container>
                <GeneralInfoBox
                    direction="row"
                    maxWidth={1160}
                    width="100%"
                    margin="0 auto"
                    justifyContent="space-between"
                >
                    <ListsInfoBox>
                        <BottomNavSection chapters={chapters} />
                        <QuickLinksSection />
                    </ListsInfoBox>

                    <BecomeWriter />
                </GeneralInfoBox>
            </Container>
        </SectionBottomWrapper>
    );
};
