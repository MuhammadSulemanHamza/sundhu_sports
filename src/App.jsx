
import Banner from "./components/Banner";
import BelowSwiperSection from "./components/BelowSwiperSection";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import HomeSwiper from "./components/HomeSwiper";
import ProductsSlider from "./components/ProductsSlider";

function App() {

  return (
    <div className="App">
      <Banner/>
      <Header/>
      <HomeSwiper/>
      {/* <ProductsSlider/> */}
      <BelowSwiperSection/>
      <HomeBody/>
    </div>
  )
}

export default App
