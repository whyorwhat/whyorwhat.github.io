import {BrowserRouter, HashRouter} from "react-router-dom";
import AppContent from "@/global/AppContent.jsx";
import ScrollToTop from "@/global/ScrollToTop.jsx";

function App() {
  return (
      <HashRouter>
          {/* side-effect prima di tutto */}
          <ScrollToTop />

        <AppContent />
      </HashRouter>
  );
}

export default App;