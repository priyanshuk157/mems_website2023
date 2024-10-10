import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WwwiitbacinByHtmltodesi from "./pages/WwwiitbacinByHtmltodesi";
import { useEffect, useState } from "react";
import NewsNavbar from './components/NewsNavbar';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Flash News State
  const [news, setNews] = useState("Breaking News: Welcome to our website!");

  return (
    <div className="App">
      {/* Flash News Navbar */}
      <NewsNavbar news={news} />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<WwwiitbacinByHtmltodesi />} />
      </Routes>

      {/* Other content below */}
      <div>
        <h1>Your Main Content Goes Here</h1>
        {/* Rest of your app components */}
      </div>
    </div>
  );
}

export default App;
