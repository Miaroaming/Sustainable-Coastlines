// import {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const baseUrl = import.meta.env.VITE_WP_API_BASEURL;


// const Event = () => {
//     const { id } = useParams();
//     const [event, setEvent] = useState(null)
//     const [loading, setLoading] = useState(true)
    
//     const endpoint = `${baseUrl}/events/${id}?_embed`;
    
//     useEffect(() => {
//       axios.get(`${endpoint}`)
//       .then((res) => {
//         console.log(res)
//         setEvent(res.data)
//         setLoading(false)
//       })
//       .catch((err) => console.log(err))
//     }, [id])
  
//     console.log(event);

//     function getFeaturedImage(event) {
//         if (event && event._embedded && event._embedded['wp:featuredmedia'] && event._embedded['wp:featuredmedia'][0].source_url) {
//           return event._embedded['wp:featuredmedia'][0].source_url;
//         } else {
//           return 'https://via.placeholder.com/150';
//         }
//       }
  
//     if (loading) {
//       return <>Loading event...</>
//     }
    
//     return (
//      <div className='about-section'>
//         <h2>Single Event:</h2>
//         <div key={event.slug} className="post-container">
//             <h4 className="title">{event.title.rendered}</h4>
//             <div dangerouslySetInnerHTML={{ __html: event.content.rendered }} />
//             <img src={getFeaturedImage(event)} alt={event.title.rendered + ' picture'}/>
//             <div>Key: {event.slug}</div>
//         </div>
//       </div>
//    );
// }

// export default Event
