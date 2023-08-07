
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/header';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/*<ReactQueryDevtools />*/}
        <ThemeProvider attribute="class">
          {/* <Header siteTitle={ `Dashboard`} /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}