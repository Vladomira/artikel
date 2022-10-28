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
            <WrapperBox width="100%" maxWidth={1160} justifyContent="center">
                <LoginForm />
            </WrapperBox>
            {/* <FormComponent
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
            </FormComponent> */}
        </Section>
    );
}
// export const getServerSideProps = async (): Promise<{
//     props: {
//         chapters: {};
//         error?: string;
//     };
// }> => {
//     try {
//         const { data } = await fetchBottomChapters();

//         return {
//             props: {
//                 chapters: data,
//                 error: "",
//             },
//         };
//     } catch (error) {
//         return {
//             props: {
//                 chapters: {},
//                 error: (error as Error).message || "Something went wrong",
//             },
//         };
//     }
// };
