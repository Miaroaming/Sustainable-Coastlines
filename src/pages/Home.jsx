import {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Seo from '../components/Seo';

// icons
import { ImBin2 } from "react-icons/im";
import { MdCoPresent } from "react-icons/md";
import { MdGroups } from "react-icons/md";

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState(null);

    const endpoint = `${baseUrl}/event?_embed&event_type=upcoming`

    function getFeaturedImage(event) {
        if (event && event._embedded && event._embedded['wp:featuredmedia'] && event._embedded['wp:featuredmedia'][0].source_url) {
          return event._embedded['wp:featuredmedia'][0].source_url;
        } else {
          return 'https://via.placeholder.com/150';
        }
      }
      
      useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
          console.log("Fetched events", res.data);
          setEvents(res.data);
          setLoading(false);
        })
        .catch((err) => console.log("Error fetching events", err))
        setLoading(false);
      }, [])
    
      const Events = ({ events }) => {
        console.log({ events });
    
        if (!events || events.length === 0) {
          return <p>No Events Available.</p>;
      }
    
        const mappedEvents = events.map((event, index) => {
          return (
            <div key={event.slug + "-" + index} className="event-cont">
              <img id='event-img' src={getFeaturedImage(event)} alt={event.title.rendered + ' profile picture'}/>
                <h2>{event.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: event.content.rendered }} />
                {/* <a href={`#/event/${event.id}`}> <button className='secondary-btn'>Read more</button></a> */}
            </div>
          )
        })
        
        console.log({ mappedEvents });
        
        return (
          <>
            {/* All our posts are here! */}
            {mappedEvents}
          </>
        )
      }

  return (
    <>
    <Seo
        title="Home - Sustainable Coastlines"
        description="Browse our homepage"
        url={window.location.href}
      />
    <div className='header'>
        <div className='header-text'>
            <img id='logo-dolphin' src="/images/logo-dolphins.png" alt="top-part-of-logo" />
            <h1>Sustainable Coastlines</h1>
            <h3>We bring people together to reduce plastic pollution and other litter to protect the moana we all love.</h3>
        </div>

        <img src="/images/home-header.jpg" alt="nz-beach" />
    </div>


    <div className='page-centering-cont'>

        <div className='info-section'>
            <img src="/images/volunteers.jpg" alt="volunteers-on-beach" />
            <div className='info-text'>
                <h2>About us</h2>
                <p>
                We operate nationwide, inspiring change through beach clean-ups, education, and litter data collection. We are a New Zealand charity that exists to protect the moana we all love by bringing people together to reduce plastic pollution and other litter.
                <br /> <br />
                Our goal is to see 60% less litter on the coastlines of Aotearoa New Zealand by 2030. We intend to achieve this by empowering communities to take action for their local beach through coastal clean-up events, educational programmes, public awareness campaigns, and litter data collection.
                </p>
                <NavLink to='/about'>
                <button className='secondary-btn'>Read More</button>
                </NavLink>
            </div>
        </div>

        <div className='event-section'>
            <h2>Upcoming Events</h2>
            <div className='event-centering'>
                 {loading ? <p>Loading events...</p> : <Events events={events} />}
            </div>
            <NavLink to='/involved'>
            <button className='secondary-btn'>See all Events</button>
            </NavLink>
        </div>
        
        <div className='media-section'>
            <h2>Keep up to date with us</h2>
            <p>@sustainablecoastlines</p>
            <div className='media-posts'>
                <a href="https://www.instagram.com/p/DCisjK8u57b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/images/cigarette-post.jpg" alt="cigarette-post" /></a>

                <a href="https://www.instagram.com/p/DCZ5qmvzaHM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/images/clean-post.jpg" alt="cleaning-beach-post" /></a>
                
                <a href="https://www.instagram.com/p/DCZ5qmvzaHM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/images/clean-beach-post.jpg" alt="clean beach" /></a>
                
                <a href="https://www.instagram.com/p/DCapgpBseUs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/images/chip-post.jpg" alt="chip-post" /></a>
                
            </div>
        </div>


        <div className='impact-section'>
            <h2>Our Impacts</h2>
            <div className='impact-posts'>
                <div className='impact-post'>
                    <ImBin2 />
                    <h2>1,809,742</h2>
                    <p>Litter Cleaned Up (Litres)</p>
                </div>
                <div className='impact-post'>
                    <MdCoPresent />
                    <h2>252,366</h2>
                    <p>Education Presentation Attendees</p>
                </div>
                <div className='impact-post'>
                    <ImBin2 />
                    <h2>256,828</h2>
                    <p>Litter Cleaned Up (Kilograms)</p>
                </div>
                <div className='impact-post'>
                <MdGroups />
                    <h2>170,615</h2>
                    <p>Event Participants</p>
                </div>
            </div>
        </div>

        <div className='sponsors-section'>
            <h2>Sponsors</h2>
            <div className='logos'>
                <img src="/images/hirepool-logo.png" alt="hirepool-logo" />
                <img src="/images/benefitz.png" alt="benefitz-logo" />
                <img className='black-img' src="/images/trumpet.webp" alt="trumpet-logo" />
                <img src="/images/aon-logo.png" alt="aon-logo" />
                <img src="/images/brightly_logo.png" alt="brightly-logo" />
                <img className='black-img' src="/images/hynds-logo.webp" alt="hynds-logo" />
                <img src="/images/phoenix_logo.png" alt="phoenix-logo" />
                <img src="/images/kwik-n-ezy-logo.webp" alt="kwik-n-ezy-logo" />
                <img src="/images/csl-logo.png" alt="csl-logo" />
                <img src="/images/pit-stop-logo.png" alt="pit-stop-logo" />
            </div>
            <NavLink to='/partners'>
            <button className='secondary-btn'>See all our Partners</button>
            </NavLink>
        </div>

    </div>
    </>
  )
}

export default Home
