import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SmartBackgroundProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const SmartBackground: React.FC<SmartBackgroundProps> = ({
  src,
  fallbackSrc = "",
  className = "",
  children,
  style,
}) => {
  const [bgUrl, setBgUrl] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => setBgUrl(src);
    img.onerror = () => setBgUrl(fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <div
      className={twMerge("bg-cover bg-center bg-no-repeat", className)}
      style={{
        backgroundImage: `url(${bgUrl})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SmartBackground;
