import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactForm from '../components/ContactForm'


const About = () => {
  return (
    <>
    <div className='header'>
        <div className='header-text'>
            <h1>About Us</h1>
            <h3>We bring people together to reduce plastic pollution and other litter to protect the moana we all love.</h3>
        </div>

        <img id='about-header-img' src="/images/about-header.jpg" alt="nz-beach" />
    </div>

    <div className='page-centering-cont'>
        <div className='info-section'>
            <img src="/images/table-post.jpg" alt="volunteers-on-beach" />
            <div className='info-text'>
                <h2>Our kaupapa</h2>
                <p>
                Since we began in 2009, our volunteers have removed more than 1.8 million litres of litter from coastlines across Aotearoa. Most commonly, that litter includes things like food wrappers, polystyrene, rope, bottle tops, and cigarette butts. Removing this harmful litter from our marine environment makes for happier ecosystems and healthier wildlife.
                <br /> <br />
                But to stop the flow of plastic pollution and other litter to our coastlines, we need to look upstream. When people attend a beach clean-up and see the problem first-hand, we see the sparks of behaviour change. Alongside the changes people can make in their everyday lives, Sustainable Coastlines enables people to ask the right questions and take action to influence broader change. Litter data collection is a big part of this. We know there’s a problem, but having specifics about the litter in our waterways, our stormwater drains, and on our beaches helps people make decisions about where to focus their efforts.
                </p>
            </div>
        </div>
        <div className='info-section' id='reverse-info-section'>
            <img src="/images/litter-about.png" alt="litter-logo" />
            <div className='info-text'>
                <p>
                This is why we are proud to deliver Litter Intelligence, Aotearoa’s first national litter database, which enables citizen scientists to collect litter data at their local beach. We make this data available for anyone to use, and we work with communities, schools, businesses, councils, and government to inspire change in behaviour, policy, and practices to improve the litter problem in the places we love.
                <br /> <br />
                Litter Intelligence is tackling Aotearoa's litter problem. To do this, we harness the power of citizen science to provide high-quality data to inspire insights and action.
                </p>
                <NavLink to='/story'><button className='secondary-btn'>Our Story</button></NavLink>
                
            </div>
        </div>

        <div className='data-section'>
            <div className='data-text'>
            <h2>Data. Insights. Action.</h2>
            <p>Litter Intelligence is Aotearoa’s first national litter database. Through it, we’re building a better understanding of our litter problem.
            <br /> <br />
            Launched in May 2018, the programme is funded by the Ministry for the Environment’s Waste Minimisation Fund. We also have key relationships with the Department of Conservation and Statistics New Zealand. Through this high-level network of support, we are set to revolutionise how we approach our litter problem.
            <br /> <br />
            To provide ironclad data for high-level decision making, we work to a United Nations methodology. This means that the data collected conforms to the highest standard of scientific rigour. Our citizen scientists are passionate members of the public that need no special skills — we provide the training. This approach is a fantastic way to collect data on a large scale and connects individuals and communities to the problem at hand.
            <br /> <br />
            We want to provide quality data for individuals to take action for a litter-free world. To do this we ensure that all project findings are available for free through litterintelligence.org. This means that politicians, business leaders, students, scientists, writers and researchers can all make use of it.
            <br /> <br />
            Interested in learning more about Litter Intelligence or the LI Education Programme? Head over to their website at litterintelligence.org to explore data, analyse insights, and peruse actions for a litter-free world.</p>
            </div>
        </div>

        <div className='sponsors-section'>
            <h2>Our Partners</h2>
            <div className='logos'>
                <img src="/images/mfe-logo.png" alt="mfe-logo" />
                <img src="/images/niwa-logo.jpg" alt="niwa-logo" />
                <img src="/images/Auckland_Council_Logo.png" alt="AC-logo" />
                <img src="/images/Syomwater-360-logo.jpg" alt="syomwater-logo" />
            </div>
            <NavLink to='/partners'>
            <button className='secondary-btn'>See all our Partners</button>
            </NavLink>
        </div>
        

        <div className='contact-section'>
            <h2>Contact Us</h2>
            <div className='contact-boxs'>
                <div className='contact-info'>
                    <br />
                    <h3>Physical and Postal Address:</h3>
                    <p>Sustainable Coastlines <br />
                        55 Madden Street <br />
                        Wynyard Quarter <br />
                        Auckland 1010 <br />
                        New Zealand <br />
                        <br /> <br />
                        Drop by and see us! <br />
                        We’re open 9am–5pm weekdays.
                    </p>
                        <br /> <br />
                    <h3>General Enquiries</h3>
                    <p>info@sustainablecoastlines.org <br />
                        027 244 3049
                    </p>
                </div>
              
                   <ContactForm/>
                
            </div>
        </div>

        <div className='info-section'>
            <img src="/images/team.jpg" alt="volunteers-on-beach" />
            <div className='info-text'>
                <h2>Our Team</h2>
                <p>
                Since we began in 2009, our volunteers have removed more than 1.8 million litres of litter from coastlines across Aotearoa. Most commonly, that litter includes things like food wrappers, polystyrene, rope, bottle tops, and cigarette butts. Removing this harmful litter from our marine environment makes for happier ecosystems and healthier wildlife.
                <br /> <br />
                But to stop the flow of plastic pollution and other litter to our coastlines, we need to look upstream. When people attend a beach clean-up and see the problem first-hand, we see the sparks of behaviour change. Alongside the changes people can make in their everyday lives, Sustainable Coastlines enables people to ask the right questions and take action to influence broader change.
                </p>
                <NavLink to='/team'>
                <button className='secondary-btn'>Meet our Team</button>
                </NavLink>
            </div>
        </div>

    </div>

    </>
  )
}

export default About
