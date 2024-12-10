import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import Introcyber from './Outlines/IntroCyber';
import Main from './components/main';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NetworkSecurityFundamentals from "./Outlines/Fundamental";
import CybersecurityAwarenessBeginners from './Outlines/CyberAwareness';
import EthicalHackingIntroduction from './Outlines/Ethical';
import DataProtectionAndPrivacyIntroduction from './Outlines/Data';
import IncidentResponseFundamentals from './Outlines/Incident';
import ITCS from "./Content/ITCS";
import NSF from "./Content/NSF";
import CAFB from './Content/CAFB';
import EHB from './Content/EHB';
import DPAP from './Content/DPAP';
import IRF from './Content/IRF';
import ITCSQuiz from './Quiz/ITCSQuiz';
import NSFQuiz from './Quiz/NSFQuiz';
import CAFBQuiz from './Quiz/CAFBQuiz';
import EHBQuiz from './Quiz/EHBQuiz';
import DPAPQuiz from './Quiz/DPAPQuiz';
import IRFQuiz from './Quiz/IRFQuiz';

import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location]); // Trigger scroll on route change

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ScrollToTop /> {/* Add this to scroll to top on route change */}
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/course-details" element={<Introcyber />} /> 
          <Route path="/course-outline" element={<NetworkSecurityFundamentals />} /> 
          <Route path="/cyber-awareness-details" element={<CybersecurityAwarenessBeginners />} /> 
          <Route path="/ethical-hacking-details" element={<EthicalHackingIntroduction />} />
          <Route path="/data-protection-details" element={<DataProtectionAndPrivacyIntroduction />} />
          <Route path="/incident-response-details" element={<IncidentResponseFundamentals />} />
          <Route path="/itcs" element={<ITCS />} /> 
          <Route path="/nsf" element={<NSF />} /> 
          <Route path="/cafb" element={<CAFB />} />  
          <Route path="/start-ethical-hacking" element={<EHB />} />
          <Route path="/start-data-protection" element={<DPAP />} /> 
          <Route path="/start-incident-response" element={<IRF />} /> 
          <Route path="/itcs-quiz" element={<ITCSQuiz />} />
          <Route path="/nsf-quiz" element={<NSFQuiz />} /> 
          <Route path="/cafb-quiz" element={<CAFBQuiz />} /> 
          <Route path="/quiz" element={<EHBQuiz />} />
          <Route path="/dpap-quiz" element={<DPAPQuiz />} /> 
          <Route path="/irf-quiz" element={<IRFQuiz />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
