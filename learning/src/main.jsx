import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store'; // Import your Redux store
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize React Query client
const queryClient = new QueryClient();

import ErrorBoundary from './ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </QueryClientProvider>
);
