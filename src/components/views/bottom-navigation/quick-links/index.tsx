import { FC } from "react";
import { Colors } from "../../../../utils/colors";
import { PureHeader } from "../../../headers/pure-header";
import { QuickLinks } from "./quick-links-list";
import {
    QuickLinksSectionWrapper,
    QuickLinksWrapper,
} from "./quick-links.styles";
import { BottomSocialIcons } from "./social-icons";

export const QuickLinksSection: FC = () => {
    return (
        <QuickLinksSectionWrapper direction="column">
            <PureHeader header={"Snelle links"} color={Colors.WHITE} />
            <QuickLinksWrapper direction="column">
                <QuickLinks />

                <BottomSocialIcons />
            </QuickLinksWrapper>
        </QuickLinksSectionWrapper>
    );
};
