// Base64Image.tsx
import { useEffect, useState } from "react";

type Props = {
  imageUrl: string;
  alt?: string;
  className?: string;
};

const Base64Image = ({ imageUrl, alt = "", className = "" }: Props) => {
  const [base64, setBase64] = useState<string | null>(null);

  useEffect(() => {
    const fetchBase64 = async () => {
      if (!imageUrl) return;
      try {
        const response = await fetch(
          `/api/base64-image?url=${encodeURIComponent(imageUrl)}`
        );
        const data = await response.text();
        setBase64(data);
      } catch (error) {
        console.error("Failed to fetch base64 image", error);
        setBase64(null); // Optionally fallback
      }
    };

    fetchBase64();
  }, [imageUrl]);

  if (!imageUrl) return null;
  if (!base64) return <div className={`bg-gray-200 ${className}`} />; // fallback skeleton

  return <img src={base64} alt={alt} className={className} />;
};

export default Base64Image;
