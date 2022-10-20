export const getLength = (text: string, max: number) =>
    text.length > max ? `${text.slice(0, max)}...` : text;
