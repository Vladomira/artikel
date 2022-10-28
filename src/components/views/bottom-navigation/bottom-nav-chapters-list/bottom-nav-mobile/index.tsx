import { FC, useRef } from "react";

import { BottomNavProps } from "../bottom-nav-desktop";
import { MobileNavItem } from "./nav-item";
import { BottomCarousel, CarouselWrapper } from "./bottom-nav-carousel.styles";
import { WrapperBox } from "../../../../wrapper-box";

export const MobileBottomNavSection: FC<BottomNavProps> = ({
    chapters,
    onHandleClick,
    initialChapter,
    topics,
}) => {
    const ref = useRef(null);
    const goToSlide = (slide: number) => ref.current.goTo(slide, false);

    return (
        <WrapperBox direction="column">
            <CarouselWrapper>
                <BottomCarousel
                    ref={ref}
                    speed={2000}
                    slidesToShow={6}
                    dots={false}
                    draggable
                    swipeToSlide
                    infinite={false}
                >
                    {chapters &&
                        chapters?.map((el, idx) => {
                            return (
                                <MobileNavItem
                                    key={el.chapter}
                                    chapter={el.chapter}
                                    chapters={chapters}
                                    idx={idx}
                                    goToSlide={goToSlide}
                                    onHandleClick={onHandleClick}
                                    initialChapter={initialChapter}
                                    topics={topics}
                                />
                            );
                        })}
                </BottomCarousel>
            </CarouselWrapper>
        </WrapperBox>
    );
};
