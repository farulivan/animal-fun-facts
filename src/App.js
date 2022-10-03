import { animals } from './animals'
import './App.css';

function App() {
  const displayFact = (e) => {
    const selectedAnimal = e.target.alt
    const optionIndex = Math.floor(Math.random() * animals[selectedAnimal].facts.length)
    const randomFacts = animals[selectedAnimal].facts[optionIndex]
    document.getElementById('fact').innerHTML = randomFacts
  }
  
  const title = ''
  const background = (
    <img className='background' alt='ocean' src='/images/ocean.jpg' />
  )
  const showBackground = true
  const images = []
  
  for(const animal in animals){
    images.push(
      <img 
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
        onClick={displayFact}
      />
    )
  }
  
  const animalFacts = (
    <div>
      <h1>
        {title || 'Click an animal for a fun fact'}
      </h1>
      {showBackground && background}
      <div className='animals'>
        {images}
      </div>
      <p id='fact'></p>
    </div>
  )

  return (
    <div className="App">
      {animalFacts}
    </div>
  );
}

export default App;
