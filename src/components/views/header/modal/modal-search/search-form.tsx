import { FC, SyntheticEvent, useState } from "react";
import { StyledInput } from "../../../../input/styled-input.styles";
import { SubmitButton } from "../../../../submit-button";
import { Colors } from "../../../../../utils/colors";

export const SearchForm: FC = () => {
    const [value, setValue] = useState("");

    const onHandleChange = (name: string, value: string) => setValue(value);

    const handleOnSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(value);
    };

    return (
        <form onSubmit={handleOnSubmit} style={{ marginTop: "23px" }}>
            <StyledInput
                value={value}
                onChange={({ target: { name, value } }) =>
                    onHandleChange(name, value)
                }
                type={"text"}
                autoComplete="off"
                name={"search"}
                padding="16px 0 2px"
                height={"42px"}
                borderBottom={Colors.WHITE}
            />

            <SubmitButton text={"Zoek"} />
        </form>
    );
};
