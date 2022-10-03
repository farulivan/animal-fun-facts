import logo from './logo.svg';
import { animals } from './animals'
import './App.css';

function App() {
  const displayFact = (e) => {
    // const selectedAnimal = e.target.alt
    // const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length)
    // const randomFacts = selectedAnimal.facts[optionsIndex]
    // document.getElementById('fact').innerHTML = randomFacts
  }
  
  const title = ''
  const background = (
    <img className='background' alt='ocean' src='/images/ocean.jpg' />
  )
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
        {title === '' && 'Click an animal for a fun fact'}
      </h1>
      {background}
      <div className='animals'>
        {images}
      </div>
      <p id='fact'></p>
    </div>
  )
  return (
    <div className="App">
      {animalFacts}
      <img />
    </div>
  );
}

export default App;
