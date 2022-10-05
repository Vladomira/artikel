import { FC } from "react";
import { MediaScreen } from "../../../../utils/media";
import { Modal } from "../../../modal";
import { SubmitButton } from "../../../submit-button";
import { ModalNavigationProps } from "./modal-navigation";

export const ModalLogin: FC<ModalNavigationProps> = ({ setIsOpen }) => {
    return (
        <Modal
            mediaHidden={MediaScreen.DESKTOP}
            setisOpen={setIsOpen}
            padding="50px 10%"
            title="Login"
            opacity={1}
            secondImg={"url(/images/header/m_back.png)"}
        >
            <form>
                <SubmitButton text={"Log in"} />
            </form>
        </Modal>
    );
};
