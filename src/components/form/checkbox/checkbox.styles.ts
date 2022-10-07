import styled, { css } from "styled-components";
import { Checkbox } from "antd";
import { Colors } from "../../../utils/colors";

type CheckboxStyledProps = {
    backgroundColor?: string;
};
// yellow !important
export const CheckboxStyled = styled(Checkbox)<CheckboxStyledProps>``;
// ${({ backgroundColor }) =>
//     backgroundColor &&
//     css`
//         .ant-checkbox-wrapper:hover .ant-checkbox-inner,
//         .ant-checkbox:hover .ant-checkbox-inner {
//             border: ${backgroundColor};
//             border: 1px solid #e2e2e2;
//         }
//         .ant-checkbox-wrapper:hover {
//             border-color: 1px solid ${backgroundColor};
//         }
//         .ant-checkbox .ant-checkbox-inner {
//             width: 24px;
//             height: 24px;
//             padding: 5px 4.8px 6.2px;
//             border: 1px solid #e2e2e2;
//             border-radius: 5px;
//         }
//         .ant-checkbox-inner::after {
//             width: 9px;
//             height: 12px;
//             bottom: 4px;
//             left: 6px;
//         }
//         .ant-checkbox-checked::after {
//             border-radius: 5px;
//             border-color: ${backgroundColor} !important;
//         }
//         .ant-checkbox-checked .ant-checkbox-inner {
//             background-color: ${backgroundColor};
//             border-color: ${backgroundColor} !important;
//         }
//     `}
