import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'


function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Hazwan. I'm an Anthropologist by training who is now a full stack web developer with experience in Webpack, Babel, Node JS, React Js, Python, Python Flask and PostgreSQL</p>

                <p>My dream is to one day start my own business where I get to build things that can have a meaningful impact on society. I am always on the lookout for people and experiences to learn from to make this happen.</p>

                <p>I'm constantly learning new things, some of them currently are gaining more experience with MongoDB, Express JS, and React Native.</p>

                <p>Watch this space as I continue to add projects to my repertoire, or keep up with my coding journey on my <a href="https://github.com/HazFaiz">github!</a></p>

            </Content>
        </div>
    )
}

export default AboutPage;

