import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateReportSchema } from "@/features/auditReportSlice";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const ClientSwitcher = () => {
  const [selectedClient, setSelectedClient] = useState("Dean-Pleban");
  const dispatch = useDispatch();

  const clients = [
    "Dean-Pleban",
    "Stan-Markuze",
    "Lawrence-Coburn",
    "Zach-En'Wezoh",
    "Bill-Douglas",
    "Stefan-Von-Imhof",
    "Caelan-Urquhart",
    "Kanishk-Parashar",
  ];

  useEffect(() => {
    const loadSchema = async () => {
      const schema = await import(`@/utils/${selectedClient}.json`);
      dispatch(updateReportSchema(schema.default));
    };
    loadSchema();
  }, [selectedClient]);

  const handleClientChange = (client: string) => {
    setSelectedClient(client);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary hover:bg-primary data-[state=open]:!bg-primary text-white hover:text-white data-[state=open]:text-white font-medium px-4 py-2 rounded-md transition-colors cursor-pointer">
            {selectedClient?.replace("-", " ")}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white rounded-md shadow p-2">
            <ul className="flex flex-col gap-2 w-[200px] md:w-[300px]">
              {clients
                ?.sort((a, b) => a.localeCompare(b))
                .map((client) => (
                  <li
                    key={client}
                    className={`cursor-pointer px-4 py-2 rounded hover:bg-primary-light/40 ${
                      selectedClient === client
                        ? "bg-primary-light/40 font-medium"
                        : ""
                    }`}
                    onClick={() => handleClientChange(client)}
                  >
                    {client.replace("-", " ")}
                  </li>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ClientSwitcher;
