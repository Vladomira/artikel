import { PropsWithChildren } from "react";
import { Container } from "../container/container";
import { SectionStyled } from "./section.styles";

export type SectionProps = {
    paddingTop: number;
    paddingBottom: number;
    marginTop?: number;
    background?: string;
    marginBottom?: number;
    borderColor?: string;
    container?: boolean;
    borderBottom?: string;
    boxShadow?: string;
    borderTop?: string;
    height?: string;
    borderRadius?: string;
    position?: string;
    top?: number;
    onClick?: () => void;
    beforeElColor?: string;
    minWidth?: string;
    minHeight?: string;
    width?: string;
};
export const Section = ({
    children,
    paddingTop,
    paddingBottom,
    background,
    marginBottom,
    borderColor,
    container,
    marginTop,
    borderBottom,
    boxShadow,
    borderTop,
    height,
    onClick,
    position,
    borderRadius,
    top,
    beforeElColor,
    minWidth,
    minHeight,
    width,
}: PropsWithChildren<SectionProps>) => {
    return (
        <SectionStyled
            width={width}
            marginBottom={marginBottom}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            background={background}
            borderColor={borderColor}
            marginTop={marginTop}
            borderBottom={borderBottom}
            boxShadow={boxShadow}
            borderTop={borderTop}
            height={height}
            onClick={onClick}
            borderRadius={borderRadius}
            position={position}
            top={top}
            beforeElColor={beforeElColor}
            minWidth={minWidth}
            minHeight={minHeight}
        >
            {container ? <Container>{children}</Container> : <>{children}</>}
        </SectionStyled>
    );
};
