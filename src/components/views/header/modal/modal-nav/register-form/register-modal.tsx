import { FC, useState } from "react";
import { ModalBoxProps } from "..";
import { MediaScreen } from "../../../../../../utils/media";
import { Modal } from "../../../../../modal-box";
import { ModalLogin } from "../modal-login/login-modal";
import { RegisterComponent } from "./register-component";

export const ModalRegister: FC<ModalBoxProps> = ({ setIsOpen }) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            {!isLogin && (
                <Modal
                    mediaHidden={MediaScreen.DESKTOP}
                    setisOpen={setIsOpen}
                    padding="10px 10%"
                    opacity={1}
                    secondImg={"url(/images/header/m_back.png)"}
                    imgHeight={"350px"}
                    imgWidth="60%"
                    secondImgHeight={"350px"}
                    secondImgWidth="60%"
                >
                    <RegisterComponent
                        setIsOpenModal={setIsOpen}
                        setIsOpen={setIsLogin}
                    />
                </Modal>
            )}
            {isLogin && <ModalLogin setIsOpen={setIsOpen} />}
        </>
    );
};
