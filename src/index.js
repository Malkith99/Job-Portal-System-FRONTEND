import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

const queryClient = new QueryClient();

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} /> {/* Set to true if you want the Devtools to open by default */}
        </QueryClientProvider>
    </React.StrictMode>
);
