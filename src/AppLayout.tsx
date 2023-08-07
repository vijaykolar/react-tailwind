import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

// import "./layout.css";
import Header from "./components/header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function AppLayout({ children }: any) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/*<ReactQueryDevtools />*/}

        <div>
          <Header siteTitle="Dashbaord" />
          <main>{children}</main>

          {/* <footer>Footer</footer> */}
        </div>
      </QueryClientProvider>
    </Provider>
  );
}
export default AppLayout;
