import { Section } from "../src/components/section";
import { RegisterForm } from "../src/components/views/header/modal/modal-nav/register-form/register-form";
import { WrapperBox } from "../src/components/wrapper-box";
import { Colors } from "../src/utils/colors";

export default function Register() {
    return (
        <Section
            paddingTop={200}
            paddingBottom={0}
            container
            height="100%"
            background={Colors.BROWN_BLACK}
        >
            <WrapperBox
                width="100%"
                maxWidth={1160}
                justifyContent="center"
                margin="auto"
            >
                <RegisterForm />
            </WrapperBox>
        </Section>
    );
}
