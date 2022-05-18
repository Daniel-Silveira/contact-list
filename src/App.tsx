import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import RouteConfig from "./routes";
import { themeConfig } from "./theme/index";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeConfig}>
        <RouteConfig />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
