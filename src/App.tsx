import { useState } from 'react'
import './App.css'

function App() {
  const [address, setAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Address:', address)
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  return (
    <>
      <h2 className='text-3xl font-bold underline'>
        Real Estate
      </h2>
      <br/>
      <form onSubmit={handleSubmit}>
      <label className='justify'>
        Search Addresses Below
      </label>
      <br/>
      <input type='search' 
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder='Enter Address...' 
        className='bg-gray-50 rounded text-black p-2'/>
      <br/>
      <button type='submit' className='btn glass'>Search</button>
      </form>
    </>
  )
}

export default App
