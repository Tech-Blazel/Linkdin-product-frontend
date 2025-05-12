import { FaRegStar } from "react-icons/fa";
import logoImage from "@/assets/images/logo-main.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const KeyHighlights = () => {
  const metrics = [
    {
      label: "Avg. Likes per Post",
      yourProfile: "321.4",
      influencerAvg: "1,345.6",
    },
    {
      label: "Avg. Comments per Post",
      yourProfile: "87.3",
      influencerAvg: "184.2",
    },
    {
      label: "Visual Content %",
      yourProfile: "32.4%",
      influencerAvg: "76.5%",
    },
    {
      label: "Posting Frequency",
      yourProfile: "0.7/month",
      influencerAvg: "10.3/month",
    },
  ];

  const tabs = [
    "Content Type",
    "Engagement Drivers",
    "Posting Frequency",
    "Top Performers",
  ];

  return (
    <div className="flex flex-col justify-between items-start p-10 bg-white relative overflow-hidden rounded-lg shadow w-[100%] mt-10">
      <img
        src={logoImage}
        alt="logo"
        className="absolute hidden md:block -left-40 top-4 w-[300px] md:w-[450px] h-[95%] opacity-10 z-1"
      />

      <div className="z-10 w-[100%]">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Key Highlights:
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab, idx) => (
            <Button
              key={idx}
              className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-medium p-6 rounded shadow"
            >
              <FaRegStar className="text-white" />
              {tab}
            </Button>
          ))}
        </div>

        <div className="rounded-xl border overflow-hidden mb-8 w-[100%] border-b border-primary-light">
          <Table>
            <TableHeader className="bg-primary-light text-white">
              <TableRow className="border-b border-primary-light">
                <TableHead>Metric</TableHead>
                <TableHead>Your Profile</TableHead>
                <TableHead>Influencer Avg.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.map((row, i) => (
                <TableRow
                  key={i}
                  className="even:bg-muted/50 border-b border-primary-light"
                >
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{row.yourProfile}</TableCell>
                  <TableCell>{row.influencerAvg}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className=" bg-primary-light border-l-4 border-primary p-5 text-gray-700 rounded shadow-sm">
          <p>
            This report analyzes your LinkedIn presence and compares it with
            data from top influencers to provide actionable insight for
            improving your strategy. Your authentic approach to content is
            already resonating with your audience
            <span className="font-semibold">
              {" "}
              — we&rsquo;ll show you how to amplify that impact.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlights;
