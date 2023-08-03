import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby";

// import "./layout.css";
import Header from "./components/header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function AppLayout({ children }: any) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <div>
          <Header siteTitle={data.site.siteMetadata?.title || `Title FF`} />
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
        {/*</div>*/}
      </QueryClientProvider>
    </Provider>
  );
}
export default AppLayout;
