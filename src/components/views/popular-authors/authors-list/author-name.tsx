import { FC } from "react";
import { Label } from "../../../label";
import { WrapperBox } from "../../../wrapper-box";
import { MediaScreen } from "../../../../utils/media";
import { getLength } from "../../../../utils/helpers/get-max-length";

type AuthorsNamesProps = {
    authorName: string;
    nameColor: string;
};
export const AuthorsNames: FC<AuthorsNamesProps> = ({
    authorName,
    nameColor,
}) => (
    <>
        <WrapperBox mediaHidden={MediaScreen.MOBILE}>
            <Label
                color={nameColor}
                fontSize={14}
                fontWeight={700}
                lineHeight={""}
                marginTop={6}
                text={getLength(authorName, 19)}
                margin="6px auto 0px"
                width="max-content"
            />
        </WrapperBox>
        <WrapperBox mediaHidden={MediaScreen.DESKTOP}>
            <Label
                color={nameColor}
                fontSize={14}
                fontWeight={700}
                lineHeight={""}
                marginTop={6}
                text={authorName}
                margin="6px auto 0px"
                width="max-content"
            />
        </WrapperBox>
    </>
);
