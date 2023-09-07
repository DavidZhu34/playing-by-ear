import Line from "../components/Line";

export default function Faq() {
  return (
    
    <div className='px-4 py-16 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold text-white'>FAQ</h1>
      <Line className = 'flex justify-start'/>
      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Do I need to know how to play piano to start?
      </p>
      <p className='mb-8 white text-large'>
        While having prior experience will help, it's not necessary.
      </p>

      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Who is this course designed for?
      </p>
      <p className='mb-8 white text-large'>
        Anyone that wants to start learning how to make their own music! 
      </p>

      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Are these courses free?
      </p>
      <p className='mb-8 white text-large'>
        YES!
      </p>

      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Do I need to know how to play piano to start?
      </p>
      <p className='mb-8 white text-large'>
        While having prior experience will help, it is not necessary!
      </p>

      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Do I need to own a piano?
      </p>
      <p className='mb-8 white text-large'>
        You can always learn the theory in the meantime, but fingers on the keyboard is the best way to learn.
      </p>

      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Do you have any recommendations for digital pianos?
      </p>
      <p className='mb-8 white text-large'>
        The price is hefty, but I highly recommend the 
        <a href = "https://www.roland.com/us/products/rp102/"target="_blank" className="text-blue-500" rel="noopener noreferrer"> Roland RP-102. </a>
        Otherwise, the only thing that's non-negotiable is that you have 88 weighted keys.
      </p>

      <p className = 'font-bold mt-8 mb-1 white text-xl'>
        Should I still learn to play with sheet music? 
      </p>
      <p className='mb-8 white text-large'>
        Absolutely. Playing by ear is not enough to make a good musician. The best inspiration for arranging and composing
        comes from listening to and studying the works of other amazing musicians.
      </p>
      
    </div>
  );
}
