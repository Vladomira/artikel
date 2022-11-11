import { Spin } from "antd";
import styled from "styled-components";

export const SpinStyled = styled(Spin)`
    margin: 20% auto;
    .ant-spin-dot-spin {
        font-size: 55px !important;
    }

    .ant-spin-dot-item {
        width: 30px !important;
        height: 30px !important;
        opacity: 1;
        &:nth-child(1) {
            background: #489c8a;
        }
        &:nth-child(2) {
            background: black;
        }
        &:nth-child(3) {
            background: #f1633e;
        }
        &:nth-child(4) {
            background: blue;
        }
    }
`;
