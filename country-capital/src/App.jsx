import './App.css'
import CountryCapital from './components/country-capital/country-capital'

function App() {
  const countriesAndCapitals = {
    Germany: 'Berlin',
    Azerbaijan: 'Baku',
    Bulgaria: 'Sofia',
    France: 'Paris',
    Italy: 'Rome',
    Japan: 'Tokyo',
    Brazil: 'Brasília',
    Canada: 'Ottawa',
    Australia: 'Canberra',
  };

  return (
    <>
        <CountryCapital data={countriesAndCapitals}/>
    </>
  )
}

export default App
