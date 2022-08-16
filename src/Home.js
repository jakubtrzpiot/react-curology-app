import './Home.css';
import Hero from './assets/hero3.png';

const Home = () => {
  return (
    <div>
      <div className=" bg-[#F6F6FA]">
        <div className="hero grid grid-cols-12 gap-3 max-w-[1280px] mx-auto">
          <div className="hero__left col-start-1 col-end-8 my-auto">
            <h1 className="font-semibold text-6xl">Your Skin Curology</h1>
            <p className="text-xl mt-6">
              Personalized skincare by experts for clinically{' '}
              <span className="block"></span> proven results. Lorem Ipsum is
              simply dummy.
            </p>
            <div className="hero__left__inner__numbers"></div>
            <button className="text-white text-lg px-20 py-6 mt-8 bg-[#332E54] before:content-[''] before:absolute before:left-0 before:bottom-0 before:bg-[#9B9BD7]">
              Unlock Your Free Offer
            </button>
          </div>
          <div className="hero__right col-start-8 col-end-13">
            <img src={Hero} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
