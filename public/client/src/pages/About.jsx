/* eslint-disable react/no-unescaped-entities */
import Line from "../components/Line";

export default function About() {
  return (
    
    <div className='px-4 py-16 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold text-white'>About</h1>
      <Line className = 'flex justify-start'/>
      <p className = 'mt-8 mb-8 white text-large'>
        Hi, I'm David!
      </p>
      <p className='mb-8 white text-large'>
        Playing By Ear started as a small concept during my time in undergrad.
        In all 13 years I've played the piano, the part that remains my favorite
        is trying to piece together a song I enjoy listening to. Music becomes such a 
        richer experience when you self-arrange a piece, and truly, deeply, <i>listen.</i>
      </p>
      <p className = 'mb-8 white text-large'>
        Also, let's be honest – there isn't sheet music for everything. When it does exists, you risk 
        spending money on an arrangement you might not enjoy.
      </p>
      <p className='white text-large'>
        I pitched the idea to the music department at UC Berkeley. With a green light, 
        flyers, and some rusty pianos, Playing By Ear grew into one of the most
        popular classes for music at UC Berkeley. Between 2021-2023, with the help of some amazing TAs, I've
        taught hundreds of students and launched concerts to showcase their amazing talents. 
      </p>
      <p className='mb-8 white text-large'>
        (Go check out <a href="https://www.instagram.com/berkeley_pbe/" className="text-blue-500" target="_blank" rel="noopener noreferrer">@berkeley_pbe</a> on Instagram to see their performances!)
      </p>
      <p className='mb-8 white text-large'>
        Using the same curriculum, I want to introduce these lessons to you, regardless of your background in piano.
        Having prior formal training will speed up your progress, but please take your time with your learning!
      </p>
      <p className='mb-8 white text-large'>
      Playing by ear isn't just a fun activity – it's a life-long skill that will deeply transform the way you 
      create music and interpret the world. 
      </p>
    </div>
  );
}
