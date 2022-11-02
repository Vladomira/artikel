import { Section } from "../src/components/section";
import { LoginForm } from "../src/components/views/header/modal/modal-nav/modal-login/login-form";
import { WrapperBox } from "../src/components/wrapper-box";
import { Colors } from "../src/utils/colors";

export default function Login() {
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
                <LoginForm />
            </WrapperBox>
        </Section>
    );
}
