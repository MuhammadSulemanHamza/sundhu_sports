
import Banner from "./components/Banner";
import BelowSwiperSection from "./components/BelowSwiperSection";
import BestSellerSection from "./components/best_seller_section/BestSellerSection";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import HomeSwiper from "./components/HomeSwiper";
import PopularSection from "./components/popular_section/PopularSection";
import ProductsSlider from "./components/ProductsSlider";
import ShopNowParallax from "./components/shopnow_parallax/ShopNowParallax";

function App() {

  return (
    <div className="App">
      <Banner />
      <Header />
      <HomeSwiper />
      <BelowSwiperSection />
      {/* { <HomeBody /> } */}
      <PopularSection />
      <ShopNowParallax/>
      <BestSellerSection/>
      <Footer/>
    </div>
  )
}

export default App
