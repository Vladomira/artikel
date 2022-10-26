import { FC, useState } from "react";
import { Colors } from "../../../../utils/colors";
import { InputWithFloatingLabel } from "../../../form/form-input";
import { Label } from "../../../label";
import { WrapperBox } from "../../../wrapper-box";
import { ArticlesHeader } from "../articles-quantity/articles-quantity.styles";
import { BottomForm, BottomFormButton } from "./bottom-form.styles";

export const Bulletin: FC = () => {
    const [email, setEmail] = useState("");
    const onHandleChange = (name: string, value: string) => setEmail(value);

    return (
        <WrapperBox direction="column" width="100%">
            <ArticlesHeader
                color={Colors.WHITE}
                fontSize={18}
                fontWeight={700}
                textTransform={"uppercase"}
            >
                Nieuwsbrief
            </ArticlesHeader>
            <WrapperBox width="100%" marginTop={14}>
                <BottomForm width="100%">
                    <InputWithFloatingLabel
                        name={"email"}
                        labelText={"E-mail"}
                        value={email}
                        onHandleChange={onHandleChange}
                        type="text"
                        activeColor={Colors.WHITE}
                        boxwidth="100%"
                        mobileLabelLeft="45%"
                    />

                    <BottomFormButton
                        padding="10px 20px"
                        background={Colors.WHITE}
                        hoverBackground={Colors.LABEL_GREY}
                        type="submit"
                        height={38}
                    >
                        <Label
                            color={Colors.BLACK}
                            fontSize={12}
                            fontWeight={700}
                            lineHeight={"18px"}
                            letterSpacing={".15em"}
                            text={"Abonneer"}
                            whiteSpace="nowrap"
                            textTransform="uppercase"
                        />
                    </BottomFormButton>
                </BottomForm>
            </WrapperBox>
        </WrapperBox>
    );
};
