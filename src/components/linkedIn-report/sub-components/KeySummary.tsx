import { FC } from "react";

interface KeySummaryProps {
  title?: string;
  description: string;
}

const KeySummary: FC<KeySummaryProps> = ({ title, description }) => {
  return (
    <div className="bg-primary-light/40 border-l-7 border-primary rounded-lg p-4 text-lg text-text-primary">
      {title && (
        <h4 className="text-primary text-xl md:text-2xl font-bold mb-4">
          {title}
        </h4>
      )}
      <p>{description}</p>
    </div>
  );
};

export default KeySummary;
