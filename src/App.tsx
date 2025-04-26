import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Overview from "./pages/Overview";
import Trade from "./pages/Trade";
import Wallet from "./pages/Wallet";
import Transaction from "./pages/Transaction";

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
      case "/trade":
        title = "";
        metaDescription = "";
        break;
      case "/wallet":
        title = "";
        metaDescription = "";
        break;
      case "/transaction":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
}
export default App;
