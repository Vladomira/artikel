import { FC } from "react";
import { Colors } from "../../../utils/colors";
import { Label } from "../../label";
import { Section } from "../../section";
import { WrapperBox } from "../../wrapper-box";
import { LabelWithDecor } from "./info-footer.styles";

export const Privacy: FC = () => (
    <Section
        paddingTop={15}
        paddingBottom={15}
        container
        background={Colors.WHITE}
    >
        <WrapperBox
            justifyContent="space-between"
            width="100%"
            maxWidth={1160}
            margin="0 auto"
        >
            <WrapperBox alignItems="center">
                <Label
                    color={Colors.BLACK}
                    fontSize={12}
                    fontWeight={400}
                    lineHeight={"1.4"}
                    text={"Privacy policy"}
                />
                <LabelWithDecor
                    color={Colors.BLACK}
                    fontSize={12}
                    fontWeight={400}
                    lineHeight={"1.4"}
                >
                    Algemene voorwaarden
                </LabelWithDecor>
            </WrapperBox>
            <Label
                color={Colors.BLACK}
                fontSize={12}
                fontWeight={400}
                lineHeight={"1.4"}
                text={"© 2021 Artikel BV"}
            />
        </WrapperBox>
    </Section>
);
