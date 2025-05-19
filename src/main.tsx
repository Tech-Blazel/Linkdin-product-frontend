import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ErrorBoundary } from "react-error-boundary";
import SomethingWentWrong from "./components/SomethingWentWrong.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <SomethingWentWrong onRetry={resetErrorBoundary} />
        )}
        resetKeys={[location.pathname]}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
