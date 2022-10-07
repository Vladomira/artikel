import React, { PropsWithChildren, useState } from "react";
import { InputLabelProps, FloatingLabel } from "./floating-label";
import { Form } from "antd";
import { FloatingInput } from "./floatin-input.styles";

type TextInputProps = {
    name: string;
    onHandleChange: (name: string, value: string) => void;
    value: string;
    type: string;
    activeColor?: string;
    marginTop?: number;
};

export const InputWithFloatingLabel = ({
    name,
    onHandleChange,
    value,
    type,
    children,
    activeColor,
    marginTop,
    ...otherProps
}: PropsWithChildren<TextInputProps & InputLabelProps>) => {
    const [active, setActive] = useState(false);
    const onBlur = () => {
        value !== "" && value ? setActive(true) : setActive(false);
    };

    const onFocus = () => {
        setActive(true);
    };

    return (
        <Form.Item>
            <>
                <FloatingLabel
                    active={active}
                    value={value}
                    {...otherProps}
                    marginTop={marginTop}
                    activeColor={activeColor}
                >
                    <FloatingInput
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChange={({ target: { name, value } }) =>
                            onHandleChange(name, value)
                        }
                        value={value}
                        name={name}
                        type={type}
                    />
                    {children}
                </FloatingLabel>
            </>
        </Form.Item>
    );
};
