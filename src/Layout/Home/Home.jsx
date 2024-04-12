import { Helmet } from "react-helmet-async";
import SwiperBanner from "../../components/Swiper/Swiper";
import Estates from "../Estates/Estates";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Estates | Home</title>
      </Helmet>
      <SwiperBanner />
      <Estates />
    </div>
  );
};

export default Home;
