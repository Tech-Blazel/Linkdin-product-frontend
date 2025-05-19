import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SomethingWentWrong = ({ onRetry }: { onRetry?: () => void }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <AlertTriangle className="w-12 h-12 text-primary mb-4" />
      <h1 className="text-2xl font-semibold text-primary">
        Oops! Something went wrong.
      </h1>
      <p className="text-sm text-muted-foreground mt-2 max-w-md">
        An unexpected error has occurred. You can try again or go back home.
      </p>
      <div className="mt-6 flex gap-3">
        <Button
          className="bg-primary text-white"
          onClick={() => {
            navigate("/");
            onRetry?.();
          }}
        >
          Go to Home
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
