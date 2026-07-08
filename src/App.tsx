import { BundleProvider } from "./context/BundleContext";
import BundleBuilderPage from "./pages/BundleBuilderPage";

function App() {
  return (
    <BundleProvider>
      <BundleBuilderPage />
    </BundleProvider>
  );
}

export default App;
