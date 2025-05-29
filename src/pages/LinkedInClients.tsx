import { useState } from "react";
import ClientProfileCard from "@/components/linkedIn-report/ClientProfileCard";
import { linkedInClients } from "@/utils/constants";
import { Input } from "@/components/ui/input";
// import axios from "axios";

const LinkedInClients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = linkedInClients
    .filter((client: any) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

  // useEffect(() => {
  //   const addClients = async () => {
  //     try {
  //       for (let i = 0; i < linkedInClients.length; i++) {
  //         const client = linkedInClients[i];

  //         // Check if this client already exists
  //         const existing = await axios.get(
  //           `https://sheetdb.io/api/v1/ifsqyg42w3tv0/search?Name=${encodeURIComponent(
  //             client.name
  //           )}`
  //         );

  //         if (existing.data.length > 0) {
  //           console.log(`🟡 Already exists: ${client.name}`);
  //           continue; // skip adding this client
  //         }

  //         const payload = {
  //           data: [
  //             {
  //               Id: (i + 1).toString(),
  //               Name: client.name,
  //               Status: "Pending",
  //             },
  //           ],
  //         };

  //         await axios.post("https://sheetdb.io/api/v1/ifsqyg42w3tv0", payload);
  //         console.log(`✅ Added: ${client.name}`);
  //       }
  //     } catch (error) {
  //       console.error("❌ Error adding clients:", error);
  //     }
  //   };

  //   addClients();
  // }, []);

  return (
    <div className="bg-white rounded-xl p-6 sm:p-10 md:p-12 text-center shadow-md w-full">
      <div className="max-w-md mx-auto mb-6">
        <Input
          type="text"
          placeholder="Search client by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {filteredClients.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {filteredClients.map((client: any, i: number) => (
            <ClientProfileCard
              key={i}
              name={client?.name}
              title={client?.title}
              profilePictureUrl={client?.profilePictureUrl}
            />
          ))}
        </div>
      ) : (
        <p className="text-primary mt-10 text-lg font-medium">
          No client found.
        </p>
      )}
    </div>
  );
};

export default LinkedInClients;
