import { FC } from "react";
import { FaLightbulb, FaStar } from "react-icons/fa";

interface WhyBoxProps {
  heading?: string;
  summary?: string;
  points?: string[];
}

const WhyBox: FC<WhyBoxProps> = ({
  heading = "",
  summary = "",
  points = [],
}) => {
  return (
    <div className="bg-primary-light/40 text-text-primary rounded-2xl p-6 pl-8 border-l-8 border-primary space-y-4">
      <div className="flex items-center gap-3">
        <FaLightbulb className="text-primary text-xl shrink-0" />
        <h3 className="text-lg md:text-xl font-semibold text-primary">
          {heading}
        </h3>
      </div>

      {summary && <p className="text-base">{summary}</p>}

      {points && points.length > 0 && (
        <ul className="space-y-2">
          {points.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaStar className="text-primary mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WhyBox;
