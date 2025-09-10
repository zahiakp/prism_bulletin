"use client";

import Image from "next/image";
import { useState } from "react";

export default function SafeImage({ src, alt, ...props }: any) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt}
      src={imgSrc || "/prism thumb.jpg"} // 👈 fallback if empty
      onError={() => setImgSrc("/prism thumb.jpg")} // 👈 fallback if error
      {...props}
    />
  );
}
