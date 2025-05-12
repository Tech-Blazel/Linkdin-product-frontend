import logoImage from "@/assets/images/logo-main.svg";
const influencers = [
  {
    name: "Adam Grant",
    title: "Organizational Psychologist, Wharton Professor",
    followers: "5.2M+",
    engagement: "7.8%",
    description:
      "Adam combines research-backed insights with relatable stories.",
    relevance: "Data-driven storytelling approach",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Brené Brown",
    title: "Research Professor, Author, Speaker",
    followers: "1.8M+",
    engagement: "6.2%",
    description:
      "Brené's content focuses on vulnerability, courage, and connection.",
    relevance: "Authentic connection focus",
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Hamza Alsamraee",
    title: "Tech Content Creator, AI Specialist",
    followers: "680+",
    engagement: "8.5%",
    description:
      "Hamza creates highly visual content about AI and technology trends.",
    relevance: "Data-driven storytelling approach",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Simon Sinek",
    title: "Author, Optimist, Leadership Expert",
    followers: "3.1M+",
    engagement: "5.7%",
    description:
      "Simon's content focuses on purpose-driven leadership and meaningful connection.",
    relevance: "Authentic connection focus",
    image: "https://i.pravatar.cc/300?img=4",
  },
];

const InfluencerCards = () => {
  return (
    <div className="flex flex-row justify-between items-start gap-10 p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10">
      <img
        src={logoImage}
        alt="logo"
        className="absolute hidden md:block -left-40 top-4 w-[300px] md:w-[450px] h-[95%] opacity-10 z-1"
      />

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 min-w-[290px] xl:grid-cols-4 z-10 relative">
        {influencers.map((influencer, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col"
          >
            <img
              src={influencer.image}
              alt={influencer.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="mb-2">
                <h3 className="text-linkedIn-primary font-semibold text-lg">
                  {influencer.name}
                </h3>
                <p className="text-base text-gray-500">{influencer.title}</p>
              </div>

              <div className="flex justify-between text-sm text-gray-800 font-medium mt-3 mb-2">
                <div>
                  <p className="text-linkedIn-primary font-semibold">
                    {influencer.followers}
                  </p>
                  <p className="text-base font-light text-gray-500">
                    Followers
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-linkedIn-primary font-semibold">
                    {influencer.engagement}
                  </p>
                  <p className="text-base font-light text-gray-500">
                    Engagement Rate
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700 mt-2">
                {influencer.description}
              </p>

              <div
                className={`mt-4 inline-block text-base font-medium px-4 py-1 border-2 rounded-full border-linkedIn-border bg-linkedIn-primary-light text-linkedIn-primary`}
              >
                <span className="font-bold">Relevance:</span>{" "}
                {influencer.relevance}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerCards;
