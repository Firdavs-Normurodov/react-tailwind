import Banner from "../shared/Banner";
import BannerImg from "../assets/newsletter.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12" id="newsletter">
      {/* use our banner */}
      <Banner banner={BannerImg} heading="Each student an share their discount code for friends"
      subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"}
      btn1={"I have a code"} btn2={"Get Started"}
      />
    </div>
  );
};

export default Newsletter;