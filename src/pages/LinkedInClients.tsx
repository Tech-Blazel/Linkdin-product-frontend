import { useEffect, useState } from "react";
import ClientProfileCard from "@/components/linkedIn-report/ClientProfileCard";
import { linkedInClients } from "@/utils/constants";
import { Input } from "@/components/ui/input";
import { supabase } from "@/supabase-client";

const LinkedInClients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndMergeClients = async () => {
      const { data: dbClients, error } = await supabase
        .from("client_database")
        .select("id, name, varified, presented");

      if (error) {
        console.error("Supabase fetch error:", error.message);
        setLoading(false);
        return;
      }

      // Merge based on name
      const merged = linkedInClients.map((client) => {
        const match = dbClients?.find((c) => c.name === client.name);

        return {
          ...client,
          id: match?.id ?? null,
          varified: match?.varified ?? false,
          presented: match?.presented ?? false,
        };
      });

      setClients(merged);
      setLoading(false);
    };

    fetchAndMergeClients();
  }, []);

  const filteredClients = clients
    .filter((client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

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

      {loading ? (
        <div className="items-center gap-4 text-text-primary text-lg font-medium flex justify-center min-h-80">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span>Please wait...</span>
        </div>
      ) : filteredClients.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {filteredClients.map((client, i) => (
            <ClientProfileCard
              key={i}
              id={client.id}
              name={client.name}
              title={client.title}
              profilePictureUrl={client.profilePictureUrl}
              varified={client.varified}
              presented={client.presented}
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
