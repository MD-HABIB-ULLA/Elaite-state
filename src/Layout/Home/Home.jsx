import { Helmet } from "react-helmet-async";
import SwiperBanner from "../../components/Swiper/Swiper";
import Estates from "../Estates/Estates";
import Info from "../../components/Extra/Info";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Estates | Home</title>
      </Helmet>
      <SwiperBanner />
      <Estates />
      <Info />
    </div>
  );
};

export default Home;
