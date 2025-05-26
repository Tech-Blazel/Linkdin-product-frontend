import { useState } from "react";
import ClientProfileCard from "@/components/linkedIn-report/ClientProfileCard";
import { linkedInClients } from "@/utils/constants";
import { Input } from "@/components/ui/input";

const LinkedInClients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = linkedInClients
    .filter((client: any) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

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
