import React, { PropsWithChildren } from "react";
import {
    BackgroundImagBox,
    BackgroundImagProps,
} from "./background-img.styles";

type Props = BackgroundImagProps & {
    position: string;
};
export const BackgroundImage = ({
    children,
    height,
    backImg,
    position,
    maxWidth,
    padding,
    top,
    backgroundSize,
}: PropsWithChildren<Props>) => {
    return (
        <BackgroundImagBox
            height={height}
            backImg={backImg}
            position={position}
            maxWidth={maxWidth}
            padding={padding}
            top={top}
            backgroundSize={backgroundSize}
        >
            {children}
        </BackgroundImagBox>
    );
};
