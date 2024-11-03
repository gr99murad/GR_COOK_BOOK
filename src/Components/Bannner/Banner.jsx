import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-[600px]">
         <img src={bannerImg} alt="Banner Image" />
        <div class="hero-overlay bg-opacity-60"></div>
        
      </div>
    );
};

export default Banner;