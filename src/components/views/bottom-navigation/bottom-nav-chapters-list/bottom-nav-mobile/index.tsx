import { FC, useState, useRef } from "react";

import { BottomNavProps } from "../bottom-nav-desktop";
import { MobileNavItem } from "./nav-item";
import { BottomCarousel, CarouselWrapper } from "./bottom-nav-carousel.styles";
import { MobileBottomTopics } from "./bottom-topics-mobile";
import { WrapperBox } from "../../../../wrapper-box";
import st from "./dots.module.css";
import { Carousel } from "antd";
import { Label } from "../../../../label";
import { NavItemWrapper } from "./bottom-nav-mobile.styles";

export const MobileBottomNavSection: FC<BottomNavProps> = ({
    chapters,
    onHandleClick,
    initialChapter,
    topics,
}) => {
    const ref = useRef(null);
    const goToSlide = (slide: number) => ref.current.goTo(slide, false);

    // function customPaging() {
    //     return (
    //         // <div style={{ outline: "3px solid red" }}>
    //         <WrapperBox width="100%">
    //             {chapters.map((el, idx) => {
    //                 return (
    //                     <NavItemWrapper
    //                         key={idx}
    //                         onClick={() => (
    //                             onHandleClick(el.chapter), goToSlide(idx)
    //                         )}
    //                         isActive={el.chapter === initialChapter}
    //                     >
    //                         <Label
    //                             color={"currentColor"}
    //                             fontSize={14}
    //                             fontWeight={700}
    //                             lineHeight={"1.4"}
    //                             text={el.chapter}
    //                         />
    //                     </NavItemWrapper>
    //                 );
    //             })}
    //         </WrapperBox>
    //     );
    // }

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
                    // customPaging={customPaging}
                >
                    {chapters.map((el, idx) => {
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

                    {/* {chapter === initialChapter && (
                        <MobileBottomTopics topics={topics} />
                    )} */}
                </BottomCarousel>
            </CarouselWrapper>
        </WrapperBox>
    );
};
