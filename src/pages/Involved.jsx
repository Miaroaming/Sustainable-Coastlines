import {useState, useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Involved = () => {
  const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState(null);
    const [pastEvents, setPastEvents] = useState(null);

    const endpoint = `${baseUrl}/event?_embed`

    function getFeaturedImage(event) {
        if (event && event._embedded && event._embedded['wp:featuredmedia'] && event._embedded['wp:featuredmedia'][0].source_url) {
          return event._embedded['wp:featuredmedia'][0].source_url;
        } else {
          return 'https://via.placeholder.com/150';
        }
      }
      
      useEffect(() => {
        axios.get(`${endpoint}&event_type=upcoming`)
        .then((res) => {
          console.log("Fetched events", res.data);
          setEvents(res.data);
          setLoading(false);
        })
        .catch((err) => console.log("Error fetching events", err))
        setLoading(false);
      }, [])

      useEffect(() => {
        axios.get(`${endpoint}&event_type=past`)
        .then((res) => {
          console.log("Fetched past events", res.data);
          setPastEvents(res.data);
          setLoading(false);
        })
        .catch((err) => console.log("Error fetching past events", err))
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
    <div className='header'>
        <div className='header-text'>
            <h1>Get Involved</h1>
            <h3>Browse our upcoming events or search past events below.</h3>
        </div>

        <img src="/images/involved-header.avif" alt="nz-beach-volunteers" />
    </div>

    <div className='event-section' id='upcoming-events'>
            <h2>Upcoming Events</h2>
            <div className='event-centering'>
                 {loading ? <p>Loading upcoming events...</p> : <Events events={events} />}
            </div>
    </div>

    <div className='event-section'>
      <h2>Past Events</h2>
      <div className='event-centering'>
        {loading ? <p>Loading past events...</p> : <Events events={pastEvents} />}
      </div>
    </div>

    <div className='page-centering-cont'>
    <div className='info-section'>
            <img src="/images/tailored.jpg" alt="volunteers-on-beach" />
            <div className='info-text'>
                <h2>Tailored Team Building</h2>
                <p>
                Our tailored team-building events are a great way to get organisations and businesses involved with our work — it’s not only for the good of the environment, but it’s also a great day out for staff.From $2,700* plus GST. A beach clean-up day with us is one of the best staff engagement programmes available. 
                <br /> <br />
                With over 10 years’ experience we know how to have a good time and make it easy and fun for all involved. We get you out into nature and connect you with the issues that Aotearoa is facing around plastic in the environment and pollution in our waterways. We provide education, awareness and solutions that you can take back to your everyday life to help you be more sustainable tomorrow than you are today. It’s good for nature and it’s good for your own well-being.
                <br /> <br />
                We deliver full planning and implementation and cover all health and safety requirements. We provide all equipment, first-aid kits, optional catering, drinks, transport. Following the event, you’ll receive branded results, a follow-up listing on our website and event photos.
                </p>
                <NavLink to='/shop'>
                <button className='secondary-btn'>Purchase Event</button>
                </NavLink>
            </div>
        </div>
    </div>
    

    </>
  )
}

export default Involved
