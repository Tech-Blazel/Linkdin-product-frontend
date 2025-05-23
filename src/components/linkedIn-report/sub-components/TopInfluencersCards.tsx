import { influencerImages } from "@/utils/constants";
import SmartImage from "@/components/SmartImage";
import ProfileAvatar from "@/assets/images/profile-avatar.png";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10 pt-4">
      {influencers.map((influencer, i) => (
        <div
          key={i}
          className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col h-full min-w-[250px] max-w-[550px]"
        >
          {/* <img
            src={influencer?.pictureUrl}
            // src={influencerImages[influencer?.name] || ""}
            alt={influencer?.name}
            className="w-full h-50 object-cover"
          /> */}

          <SmartImage
            src={influencer?.pictureUrl}
            alt={influencer?.name || ""}
            fallbackSrc={influencerImages[influencer?.name] || ProfileAvatar}
            className="w-full h-50"
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
              <div className="text-base font-normal px-5 py-1 rounded-full border-2 border-primary/20 text-primary bg-primary-light/40 line-clamp-2">
                <span className="text-primary font-semibold">Relevance:</span>{" "}
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
