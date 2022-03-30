import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ApplicationContainer from './navigation/ApplicationContainer/index';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
const Root =  ReactDOM.createRoot(document.getElementById('root'))
Root.render(
  <QueryClientProvider client={queryClient}>
    <ApplicationContainer />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
