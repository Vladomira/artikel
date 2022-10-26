import React, { PropsWithChildren, useRef } from "react";
import "antd/lib/carousel/style/index.css";
import { CarouselOuterWrapper, CarouselWrapper } from "./carousel.styles";

import { ButtonToSlide } from "./button-to-slide";

export type DotStyle = {
    activeDot: {
        dotOffset: number;
        width: number;
        height: number;
        borderRadius: number;
        margin?: string;
        backgroundColor?: string;
    };
    notActiveDot: {
        dotOffset: number;
        width: number;
        height: number;
        borderRadius: number;
        margin?: string;
    };
};

type Props = {
    marginRight?: number;
    isDots: boolean;
    numberOfSlides: number;
    DotColor?: string;
    dotBottomPosition?: number;
    infinite?: boolean;
    dotStyle?: DotStyle;
    slidesToScroll?: number;
    noBottomOffset?: boolean;
    autoPlay?: boolean;
    autoplaySpeed?: number;
    speed?: number;
    arrows?: boolean;
    boxShadow?: string;
    easing?: string;
    margiLeft?: number;
    borderBottom?: string;
};

const CarouselReset = ({
    marginRight,
    numberOfSlides,
    isDots,
    DotColor,
    dotBottomPosition,
    infinite,
    dotStyle,
    slidesToScroll = 1,
    autoPlay,
    autoplaySpeed,
    children,
    speed,
    arrows,
    boxShadow,
    easing,
    margiLeft,
    borderBottom,
}: PropsWithChildren<Props>) => {
    const slider = useRef(null);

    return (
        <CarouselOuterWrapper>
            {arrows && (
                <>
                    <ButtonToSlide
                        onHandleClick={() => slider.current.prev()}
                        left="0px"
                        imgName={"prev"}
                    />
                    <ButtonToSlide
                        onHandleClick={() => slider.current.next()}
                        right="0px"
                        imgName={"next"}
                    />
                </>
            )}

            <CarouselWrapper
                margiLeft={margiLeft}
                autoplaySpeed={autoplaySpeed}
                autoplay={autoPlay}
                variableWidth
                infinite={infinite}
                marginRight={marginRight}
                dotColor={DotColor}
                slidesToScroll={slidesToScroll}
                slidesToShow={numberOfSlides}
                dots={isDots}
                dotBottomPosition={dotBottomPosition}
                dotStyle={dotStyle}
                speed={speed}
                ref={slider}
                draggable
                swipeToSlide
                easing={easing}
                boxShadow={boxShadow}
                touchThreshold={50}
                focusOnSelect={true}
                borderBottom={borderBottom}
            >
                {children}
            </CarouselWrapper>
        </CarouselOuterWrapper>
    );
};
export default CarouselReset;
