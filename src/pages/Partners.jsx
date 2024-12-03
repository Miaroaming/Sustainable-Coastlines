import react from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import Seo from '../components/Seo';

const Partners = () => {
  const navigate = useNavigate();

    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
    }
  return (
    <>
    <Seo
        title="Partners - Sustainable Coastlines"
        description="Browse our Partners"
        url={window.location.href}
      />
    <div className='header'>
        <div className='header-text'>
          <div className='backarrow-header' onClick={handleBackClick}>
            <FaArrowLeftLong />
            <h1>Our Partners</h1>
          </div>
            
            <h3>We wouldn’t be where we are today without our partners, sponsors, funders, and friends.</h3>
        </div>

        <img id='about-header-img' src="/images/partners.webp" alt="nz-beach" />
    </div>


    <div className='sponsors-section'>
            <h2>Premier Partners</h2>
            <div className='logos'>
                <img src="/images/hirepool-logo.png" alt="hirepool-logo" />
                <img src="/images/benefitz.png" alt="benefitz-logo" />
                <img className='black-img' src="/images/trumpet.webp" alt="trumpet-logo" />
                <img src="/images/aon-logo.png" alt="aon-logo" />
            </div>
        </div>

        <div className='sponsors-section'>
            <h2>Programme Funders</h2>
            <div className='logos'>
                <img src="/images/tpf-logo.jpg" alt="tpf-logo" />
                <img src="/images/augusto-logo.webp" alt="augusto-logo" />
                <img src="/images/trust-logo.webp" alt="trust-logo" />
                <img src="/images/toi-logo.jpg" alt="toi-logo" />
                <img className='black-img' src="/images/hcc-logo.webp" alt="hcc-logo" />
                <img src="/images/catalytic-logo.jpg" alt="catalytic-logo" />
                <img src="/images/mfe-logo.png" alt="mfe-logo" />
                <img src="/images/brother-logo.jpg" alt="brother-logo" />
            </div>
        </div>

        <div className='sponsors-section'>
            <h2>Gold Sponsors</h2>
            <div className='logos'>
              <img src="/images/brightly_logo.png" alt="brightly-logo" />
                <img className='black-img' src="/images/hynds-logo.webp" alt="hynds-logo" />
                <img src="/images/phoenix_logo.png" alt="phoenix-logo" />
                <img src="/images/kwik-n-ezy-logo.webp" alt="kwik-n-ezy-logo" />
                <img src="/images/csl-logo.png" alt="csl-logo" />
                <img src="/images/pit-stop-logo.png" alt="pit-stop-logo" />
            </div>
        </div>
                
        <div className='sponsors-section'>
            <h2>Sliver Sponsors</h2>
            <div className='logos'>
                <img src="/images/weta.webp" alt="weta-logo" />
                <img src="/images/tps.webp" alt="tps-logo" />
                <img src="/images/if.webp" alt="if-logo" />
                <img src="/images/gomedia.jpg" alt="gomedia-logo" />
                <img src="/images/garnier.webp" alt="garnier-logo" />
                <img src="/images/oneframe.jpg" alt="oneframe-logo" />
                <img src="/images/trafalgar.jpg" alt="trafalgar-logo" />
                <img src="/images/caroma.jpg" alt="caroma-logo" />
                <img src="/images/david.jpg" alt="david-logo" />
                <img src="/images/oxcon.webp" alt="oxcon-logo" />
            </div>
        </div>   

        <div className='sponsors-section'>
            <h2>Bronze Sponsors</h2>
            <div className='logos'>
                <img src="/images/boarder.webp" alt="boardertown-logo" />
                <img src="/images/cbre.jpg" alt="cbre-logo" />
                <img src="/images/kara.webp" alt="karajoz-logo" />
                <img src="/images/fsl.webp" alt="fsl-foods-logo" />
                <img src="/images/babich.webp" alt="babich-logo" />
                <img src="/images/apm.webp" alt="apm-logo" />
                <img src="/images/ckl.jpg" alt="ckl-logo" />
                <img src="/images/keen.webp" alt="keen-logo" />
            </div>
        </div>      

        <div className='sponsors-section'>
            <h2>Donation Partners</h2>
            <div className='logos'>
                <img src="/images/goodsole.webp" alt="goodsole-logo" />
                <img src="/images/land.webp" alt="land-sea-logo" />
                <img src="/images/path.webp" alt="pathfinder-logo" />
                <img src="/images/bee.webp" alt="bee-nz-logo" />
                <img src="/images/sky.webp" alt="sky-city-logo" />
                <img src="/images/mobile.jpg" alt="remobile-logo" />
                <img src="/images/registry.jpg" alt="good-registry-logo" />
                <img src="/images/collective.webp" alt="one-percent-collective-logo" />
            </div>
        </div>   
    </>
  )
}

export default Partners
