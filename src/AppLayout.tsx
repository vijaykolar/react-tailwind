import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

// import "./layout.css";

import { QueryClient, QueryClientProvider } from "react-query";
import SideBar from "@/components/header";
// import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function AppLayout({ children }: any) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/*<ReactQueryDevtools />*/}

        <SideBar />
        <main>{children}</main>

        {/* <footer>Footer</footer> */}
      </QueryClientProvider>
    </Provider>
  );
}
export default AppLayout;
