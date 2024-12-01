import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Team = () => {

  const navigate = useNavigate();

    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
    }

  return (
    <>
    <div className='header'>
        <div className='header-text'>
          <div className='backarrow-header' onClick={handleBackClick}>
            <FaArrowLeftLong />
            <h1>Our Team</h1>
          </div>
            
            <h3>Meet the motivators, problem-solvers and ocean lovers that make up our crew.</h3>
        </div>

        <img id='about-header-img' src="/images/beach.webp" alt="nz-beach" />
    </div>

    <div className='page-centering-cont'>

      <div className='team-section'>
        <h2>Full-time Team Members</h2>
        
        <div className='team'>
          <div className='team-member'>
            <img src="/images/ben.jpg" alt="ben" />
            <h2>Ben Knight</h2>
            <p>Engagement Director</p>
          </div>

          <div className='team-member'>
            <img src="/images/kate.jpg" alt="kate" />
            <h2>Kate Rooney</h2>
            <p>Chief Operating Officer</p>
          </div>

          <div className='team-member'>
            <img src="/images/dan.jpg" alt="dan" />
            <h2>Dan Downing</h2>
            <p>Engagement Manager</p>
          </div>

          <div className='team-member'>
            <img src="/images/janey.jpg" alt="janey" />
            <h2>Janey Smith</h2>
            <p>Social Media Coordinator</p>
          </div>

          <div className='team-member'>
            <img src="/images/lana.jpg" alt="lana" />
            <h2>Lana Jackson</h2>
            <p>Facilities Manager</p>
          </div>

          <div className='team-member'>
            <img src="/images/rebecca.jpeg" alt="rebecca" />
            <h2>Rebecca Fleet</h2>
            <p>International Volunteer Manager</p>
          </div>

          <div className='team-member'>
            <img src="/images/karina.jpg" alt="karina" />
            <h2>Karina Brehmer</h2>
            <p>Engagement Facilitator Tāmaki Makaurau</p>
          </div>

          <div className='team-member'>
            <img src="/images/dan.jpg" alt="dan" />
            <h2>Helen Adams-Blackburn</h2>
            <p>Communications Manager</p>
          </div>
        </div>

    </div>  

    <div className='team-section'>
    <h2>Part-time Team Members</h2>

        <div className='team'>
          <div className='team-member'>
            <img src="/images/bron.jpg" alt="bronwyn" />
            <h2>Bronwyn Graham</h2>
            <p>Engagement Facilitator Murihiku Southland</p>
          </div>

          <div className='team-member'>
            <img src="/images/paice.jpg" alt="paice" />
            <h2>Paice Vaughan</h2>
            <p>Event Assistant</p>
          </div>
        </div>
      </div>


      <div className='team-section'>
    <h2>Board of Trustees</h2>
        <div className='team'>
          <div className='team-member'>
            <img src="/images/edwina.jpg" alt="edwina" />
            <h2>Edwina Merito</h2>
            <p>Chair</p>
          </div>

          <div className='team-member'>
            <img src="/images/sam.jpg" alt="sam" />
            <h2>Sam Judd</h2>
            <p>Trustee</p>
          </div>

          <div className='team-member'>
            <img src="/images/natasha.jpg" alt="natasha" />
            <h2>Natasha Whiting</h2>
            <p>Trustee</p>
          </div>
        </div>
      </div>

      
    </div>
    
    </>
  )
}

export default Team
