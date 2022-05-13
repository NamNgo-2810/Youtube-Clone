import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = getMuiTheme();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
