import logoImage from "@/assets/images/logo-main.svg";

const TableOfContents = () => {
  const sections = [
    "Overview",
    "Relevant Influencers",
    "Influencer 1",
    "Influencer 2",
    "Influencer 3",
    "Influencer 4",
    "Content Analysis",
    "Engagement Matrices",
    "Posting Patterns",
    "Content Themes",
    "Action Steps",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-10 p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10">
      <div className="flex-1 z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Table of Contents
        </h2>
        <ol className="space-y-3 text-base">
          {sections.map((title, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </span>
              <span className="flex-1">{title}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex justify-center items-center z-10 h-[100%]">
        <img
          src={logoImage}
          alt="Flame"
          className="w-[280px] absolute top-3.5 right-32 hidden lg:block md:w-[280px] h-[95%] z-20"
        />

        <img
          src={logoImage}
          alt="Background Flame"
          className="absolute z-0 w-[300px] md:w-[450px] h-[95%] opacity-10 top-3.5 md:-right-32 -right-16 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default TableOfContents;
