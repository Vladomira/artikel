import { FC } from "react";
import { Colors } from "../../../../../../utils/colors";
import { CheckboxComponent } from "../../../../../form/checkbox";
import { Button } from "../../../../../button/button";
import { Label } from "../../../../../label";
import { FormComponent } from "../../../../../form";

export const LoginForm: FC = () => {
    return (
        <>
            <FormComponent
                submitText={"Login"}
                buttonBack={Colors.WHITE}
                title="Login"
                marginInputTop={13}
                titleBottom={33}
            >
                <CheckboxComponent text="Onthoud mij" marginTop={13}>
                    <Button>
                        <Label
                            color={Colors.WHITE}
                            fontSize={12}
                            fontWeight={300}
                            lineHeight={"1.4"}
                            text={"Wachtwoord vergeten?"}
                            marginLeft={7}
                            textDecoration="underline"
                            cursor="pointer"
                        />
                    </Button>
                </CheckboxComponent>
            </FormComponent>
        </>
    );
};
