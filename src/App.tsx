import { useRoutes } from "react-router-dom";
import routes from "@/routes";
import useOnlineStatus from "@/custom-hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();
  const routing = useRoutes(routes);

  return (
    <div>
      {!isOnline && (
        <div className="bg-primary text-white text-center py-2 text-sm z-50 fixed top-0 left-0 right-0">
          ⚠️ You are offline. Some features may not work.
        </div>
      )}
      <div className={isOnline ? "" : "pt-10"}>{routing}</div>
    </div>
  );
}

export default App;
