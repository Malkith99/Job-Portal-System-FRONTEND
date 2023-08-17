import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

const queryClient = new QueryClient();

const root = document.getElementById('root');

// Check if 'adminToken' exists in localStorage
const isAdminLoggedIn = localStorage.getItem('adminToken');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            {isAdminLoggedIn && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    </React.StrictMode>
);
