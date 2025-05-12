import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";

type Client = {
  name: string;
  category: string;
  founder: string;
  summary: string;
};

const initialClients: Client[] = [
  {
    name: "Warmstart",
    category: "Technology / AI Solutions",
    founder: "Jonathan Lowenhar",
    summary:
      "Warmstart is an AI-powered platform that helps users build and maintain business relationships by intelligently tracking their network and suggesting personalized outreach at the right time.",
  },
  {
    name: "Measure the Placenta",
    category: "Maternal Health",
    founder: "Janet Petersen",
    summary:
      "Measure the Placenta is focused on improving maternal care by providing data-driven insights into placental health during pregnancy.",
  },
];

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [search, setSearch] = useState("");

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded cursor-pointer">
          Add New Client
        </button>
      </div>

      <div className="relative mb-8 max-w-md">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <Input
          type="text"
          placeholder="Search clients..."
          className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredClients.map((client) => (
          <div
            key={client.name}
            className="bg-white rounded pb-6 shadow border border-gray-100 cursor-pointer hover:-translate-y-1 transition"
          >
            <div className="mb-2 p-6 bg-gray-100">
              <h2 className="text-xl font-semibold">{client.name}</h2>
              <p className="text-sm text-gray-500">{client.category}</p>
            </div>

            <div className="mt-4 px-6">
              <p className="font-semibold">Founders</p>
              <p className="text-sm text-gray-700">{client.founder}</p>
            </div>

            <div className="mt-4 px-6">
              <p className="font-semibold">Company Summary</p>
              <p className="text-sm text-gray-700">{client.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
