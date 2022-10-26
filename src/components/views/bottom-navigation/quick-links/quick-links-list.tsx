import { FC, useState } from "react";
import { Colors } from "../../../../utils/colors";
import { Button } from "../../../button/button";
import { Label } from "../../../label";
import { quickLinksItems } from "../../../../utils/arrays/quick-links";
import { useRouter } from "next/router";
import { QuickLinksList, QuickLinksItem } from "./quick-links.styles";

export const QuickLinks: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClick = (link: string) => {
        link !== "Login"
            ? router.push(`${link.toLowerCase()}`)
            : setIsOpen(true);
    };
    return (
        <QuickLinksList>
            {quickLinksItems.map((el) => (
                <QuickLinksItem key={el}>
                    <Button
                        onClick={() => handleClick(el)}
                        padding="6px 0px"
                        color={Colors.WHITE}
                        hoverColor={Colors.ORANGE}
                    >
                        <Label
                            color={"currentColor"}
                            fontSize={14}
                            fontWeight={700}
                            lineHeight={"1.4"}
                            text={el}
                        />
                    </Button>
                </QuickLinksItem>
            ))}
        </QuickLinksList>
    );
};
