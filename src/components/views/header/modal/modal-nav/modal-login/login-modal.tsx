import { FC, useState } from "react";
import { MediaScreen } from "../../../../../../utils/media";
import { Modal } from "../../../../../modal-box";
import { ModalNavigationProps } from "../modal-navigation";
import { ModalRegister } from "../register-form/register-modal";
import { LoginComponent } from "./login-component";

export const ModalLogin: FC<ModalNavigationProps> = ({ setIsOpen }) => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <>
            {!isRegister && (
                <Modal
                    mediaHidden={MediaScreen.DESKTOP}
                    setisOpen={setIsOpen}
                    padding="50px 10%"
                    opacity={1}
                    secondImg={"url(/images/header/m_back.png)"}
                >
                    <LoginComponent
                        setIsOpen={setIsRegister}
                        setIsOpenModal={setIsOpen}
                    />
                </Modal>
            )}

            {isRegister && <ModalRegister setIsOpen={setIsOpen} />}
        </>
    );
};
