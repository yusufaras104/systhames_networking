import SEO from "../common/seo";
import HomeOne from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Systhames Networking Ltd. Main Home"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;