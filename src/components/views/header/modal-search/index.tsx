import React, { FC } from "react";

import { MediaScreen } from "../../../../utils/media";

import { Modal } from "../../../modal";
import { ModalBoxProps } from "../modal-nav";
import { SearchForm } from "./search-form";

export const ModalSearch: FC<ModalBoxProps> = ({ setisOpen }) => (
    <Modal
        mediaHidden={MediaScreen.DESKTOP}
        setisOpen={setisOpen}
        paddingTop={50}
        paddingLeft="10%"
        paddingRight="10%"
        title="Zoek"
    >
        <SearchForm />
    </Modal>
);
