import { FC } from "react";

type Props = {
    onClick: () => void;
};
export const PrevArrow: FC<Props> = ({ onClick }) => {
    return <div onClick={onClick} style={{ background: "red" }} />;
};
