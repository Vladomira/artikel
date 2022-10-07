import { FC } from "react";
import { Colors } from "../../../../../../utils/colors";
import { Label } from "../../../../../label";
import { List, ListItem } from "../../../../../list";

const SubjectsItems = [
    "Culture",
    "Educatief",
    "Financieel",
    "Gezondheid",
    "Maatschappij",
    "Persoonlijk",
    "Technologie",
    "Werk",
];

export const SubjectsList: FC = () => {
    return (
        <List
            background={Colors.WHITE}
            padding="0px 5px"
            position="absolute"
            boxShadow=" 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%)"
        >
            {SubjectsItems.map((el) => (
                <ListItem
                    key={el}
                    borderBottom={Colors.GREY_VARIANT}
                    padding="10px 0px"
                >
                    <Label
                        color={Colors.BLACK}
                        fontSize={14}
                        fontWeight={700}
                        lineHeight={"1.4"}
                        letterSpacing={""}
                        hoverColor={Colors.ORANGE}
                        marginRight={4}
                        cursor="pointer"
                        text={el}
                    />
                </ListItem>
            ))}
        </List>
    );
};
