import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc = "",
  alt,
  className,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      key={imgSrc}
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
      className={twMerge("object-cover", className)}
      {...rest}
    />
  );
};

export default SmartImage;
