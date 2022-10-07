import React, { FC } from "react";

import { MediaScreen } from "../../../../../utils/media";

import { Modal } from "../../../../modal-box";
import { ModalBoxProps } from "../modal-nav";
import { SearchForm } from "./search-form";

export const ModalSearch: FC<ModalBoxProps> = ({ setIsOpen }) => (
    <Modal
        mediaHidden={MediaScreen.DESKTOP}
        setisOpen={setIsOpen}
        paddingTop={50}
        paddingLeft="10%"
        paddingRight="10%"
        title="Zoek"
        closeButton
    >
        <SearchForm />
    </Modal>
);
