import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import PortfolioMain from "./features/home/PortfolioMain";

function App() {
  
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <PortfolioMain/>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
