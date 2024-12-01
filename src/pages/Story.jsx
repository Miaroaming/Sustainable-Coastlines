import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Story = () => {

  const handleScroll = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
    });
};

  const navigate = useNavigate();

    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState(null);

    const endpoint = `${baseUrl}/story?_embed`

    function getFeaturedImage(story) {
        if (story && story._embedded && story._embedded['wp:featuredmedia'] && story._embedded['wp:featuredmedia'][0].source_url) {
          return story._embedded['wp:featuredmedia'][0].source_url;
        } else {
          return 'https://via.placeholder.com/150';
        }
      }
      
      useEffect(() => {
        axios.get(`${endpoint}`, {
          params: { per_page: 30 }, // Pass per_page as a parameter
      })
        .then((res) => {
          console.log("Fetched stories", res.data);
          setStories(res.data);
          setLoading(false);
        })
        .catch((err) => console.log("Error fetching stories", err))
        setLoading(false);
      }, [])
    
      const Stories = ({ stories }) => {
        console.log({ stories });
    
        if (!stories || stories.length === 0) {
          return <p>No Stories Available.</p>;
      }
    
        const mappedStories = stories.map((story, index) => {
          return (
            <div className='stories-cont'>
            <div key={story.slug + "-" + index} className="info-section">
              <img src={getFeaturedImage(story)} alt={story.title.rendered + ' profile picture'}/>
              <div className='info-text'>
                <h2>{story.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: story.content.rendered }} />
              </div>               
            </div>
            </div>
          )
        })
        
        console.log({ mappedStories });
        
        return (
          <>
            {mappedStories}
          </>
        )
      }

  return (
    <>
    <div className='header'>
        <div className='header-text'>
          <div className='backarrow-header' onClick={handleBackClick}>
            <FaArrowLeftLong />
            <h1>Our Story</h1>
          </div>
            
            <h3>From not-so-small beginnings on Aotea Great Barrier - a lot has happened since our inception.</h3>
        </div>

        <img id='about-header-img' src="/images/story-header.jpg" alt="nz-beach" />
    </div>

    <div className='page-centering-cont'>
    {loading ? <p>Loading stories...</p> : <Stories stories={stories} />}
        <button onClick={handleScroll} className='secondary-btn' id='scroll-btn'> <FaArrowUp /> Back to Top</button>
    </div>
    </>
  )
}

export default Story
