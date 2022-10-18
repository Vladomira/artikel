import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    imgName: string;
    width: number | string;
    height: number | string;
    link?: string;
    folder: string;
    color?: string;
    format: string;
    target?: string;
    objectFit?: "cover" | "contain" | "fill";
    layout?: "fixed" | "fill" | "responsive" | "intrinsic";
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
    objectFit,
    layout,
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
                            objectFit={objectFit}
                            layout={layout}
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
                    objectFit={objectFit}
                    layout={layout}
                />
            )}
        </>
    );
};
