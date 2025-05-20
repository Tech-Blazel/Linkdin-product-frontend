import { influencerImages } from "@/utils/constants";
import { FC } from "react";

type Influencer = {
  profileUrl: string;
  pictureUrl: string;
  descriptionFocus: string;
  followersCount: string;
  name: string;
  relevance: string[];
  title: string;
  postWithin1Year: number;
};

const TopInfluencersCards: FC<{ influencers: Influencer[] }> = ({
  influencers,
}) => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 pt-4">
      {influencers.map((influencer, i) => (
        <div
          key={i}
          className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col h-full"
        >
          <img
            // src={influencer?.pictureUrl}
            src={influencerImages[influencer?.name] || ""}
            alt={influencer?.name}
            className="w-full h-50 object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-1">
            <div>
              <p className="text-primary font-semibold text-xl">
                {influencer?.name}
              </p>
              <p className="text-base text-text-primary">{influencer?.title}</p>
            </div>

            <div className="flex justify-between text-sm text-text-primary font-medium mt-2">
              <div>
                <p className="text-primary font-semibold text-lg">
                  {influencer?.followersCount || "NAN"}
                </p>
                <p className="text-base text-[#666666]">Followers</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-semibold text-lg">
                  {influencer?.postWithin1Year || "NAN"}
                </p>
                <p className="text-base text-[#666666]">Post Per Year</p>
              </div>
            </div>

            <hr className="my-4 border-1" />

            <p className="text-base text-text-primary mt-2 line-clamp-3 min-h-[72px]">
              {influencer?.descriptionFocus}
            </p>

            <div className="mt-4">
              <div className="text-base font-normal px-5 py-1 rounded-full border-2 text-[#0A66C2] border-[#0A66C2]/20 bg-[#0A66C2]/10 line-clamp-2">
                <span className="text-[#0A66C2] font-semibold">Relevance:</span>{" "}
                {influencer?.relevance?.join(", ")}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopInfluencersCards;
