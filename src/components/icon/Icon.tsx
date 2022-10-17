import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    imgName: string;
    width: number;
    height: number;
    link?: string;
    folder?: string;
    color?: string;
    format: string;
    target?: string;
};

export const Icon: FC<Props> = ({
    imgName,
    width,
    height,
    link,
    folder,
    format,
    color,
    target,
}) => {
    return (
        <>
            {link ? (
                <Link href={link}>
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                        target={target}
                    >
                        <Image
                            src={
                                folder
                                    ? `/images/${folder}/${imgName}.${format}`
                                    : `/images/${imgName}.${format}`
                            }
                            width={width}
                            height={height}
                            alt={imgName}
                            loading="lazy"
                            color={color}
                        />
                    </a>
                </Link>
            ) : (
                <Image
                    src={
                        folder
                            ? `/images/${folder}/${imgName}.${format}`
                            : `/images/${imgName}.${format}`
                    }
                    width={width}
                    height={height}
                    alt={imgName}
                    loading="lazy"
                />
            )}
        </>
    );
};
