import { FC } from "react";
import "antd/dist/antd.css";
import { WrapperBox } from "../wrapper-box";
import { SpinStyled } from "./spin-styles";

const PreloaderSpin: FC = () => (
    <WrapperBox>
        <SpinStyled size="large" />
    </WrapperBox>
);

export default PreloaderSpin;
