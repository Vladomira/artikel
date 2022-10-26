import { FC } from "react";
import { Colors } from "../../../utils/colors";
import { Section } from "../../section";
import { ArticlesQuantity } from "./articles-quantity";
import { Bulletin } from "./bulletin";
import { InfoFooterWrapper } from "./info-footer.styles";
import { Privacy } from "./privacy";

export const FooterInfo: FC = () => {
    return (
        <>
            <Section
                paddingTop={51}
                paddingBottom={46}
                container
                background={Colors.BLACK}
            >
                <InfoFooterWrapper
                    width="100%"
                    maxWidth={1160}
                    alignItems="end"
                    margin="0 auto"
                >
                    <Bulletin />

                    <ArticlesQuantity />
                </InfoFooterWrapper>
            </Section>
            <Privacy />
        </>
    );
};
