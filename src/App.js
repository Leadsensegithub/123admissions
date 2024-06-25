import React, {
  Suspense,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import moment from "moment";
import AppContext from "./Context/AppContext";
import axios from "axios";




import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const loading = (
  <div className="loading">
    <div className="spinner-grow text-success" role="status"></div>
  </div>
);


const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));



function App() {
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        console.log('ipadress', response?.data?.ip)

      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider>
        <Router>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="/*" name="get" element={<DefaultLayout />} />

            </Routes>
          </Suspense>
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
