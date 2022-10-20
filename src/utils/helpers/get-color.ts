import { authorsColors } from "../authors-colors";

export const getColor = (id: number) => {
    if (id === 3 || id === 6 || id === 9 || id === 12) return authorsColors[2];
    if (id === 2 || id === 5 || id === 8 || id === 11) return authorsColors[1];
    if (id === 1 || id === 4 || id === 7 || id === 10) return authorsColors[0];
};
