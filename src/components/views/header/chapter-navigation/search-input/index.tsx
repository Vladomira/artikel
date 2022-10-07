import { FC } from "react";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { ActionIcon } from "../../../../action-icon";
import { SearchIcon } from "../../../../search-icon";
import { WrapperBox } from "../../../../wrapper-box";
import { StyledInput } from "../../../../input/styled-input.styles";

type SearchInputHeaderprops = {
    setIsOpen: (prop: boolean) => void;
};
export const SearchInputHeader: FC<SearchInputHeaderprops> = ({
    setIsOpen,
}) => {
    return (
        <WrapperBox mediaHidden={MediaScreen.MOBILE} width="100%">
            <ActionIcon
                imgName={"arrow-back"}
                imgFolder={"tech-icons"}
                width={22}
                height={22}
                format="svg"
                marginRight={10}
                onClick={() => setIsOpen(false)}
            />
            <WrapperBox width="100%">
                <StyledInput
                    textColor={Colors.BLACK}
                    padding="12px 0px 0px"
                    height={"100%"}
                    borderBottom={Colors.BLACK}
                />
                <SearchIcon
                    size={22}
                    onClick={() => setIsOpen(false)}
                    background={Colors.BLACK}
                    fill={Colors.WHITE}
                    borderRadius="2px"
                    btnWidth={"48px"}
                    btnHeight={36}
                />
            </WrapperBox>
        </WrapperBox>
    );
};
