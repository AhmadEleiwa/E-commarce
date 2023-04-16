import "./App.css";
import FlashSaleCopmponent from "./components/FlashSaleCopmponent/FlashSaleCopmponent";
import ExploreOurProducts from "./components/Explore Products section/ExploreOurProducts";
import BestSellingSection from "./components/Best Selling Products/BestSellingSection";
import RelatedItemSection from "./components/Related-Item-List-section/RelatedItemSection";
function App() {
  return (
    <>
      <FlashSaleCopmponent />
      <ExploreOurProducts />
      <BestSellingSection />
      <RelatedItemSection />
    </>
  );
}

export default App;
