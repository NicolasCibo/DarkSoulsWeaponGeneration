import { dsWeapons } from './data/db.js'
import Form from "./components/Form.jsx"
import Table from "./components/Table.jsx"
import { useState, useEffect } from 'react'

function App() {

  const initialWeaponGeneration = () => {
    const localStorageWeaponGeneration = localStorage.getItem('weapon')
    return localStorageWeaponGeneration ? JSON.parse(localStorageWeaponGeneration) : []
  }
  const [weaponGeneration, setWeaponGeneration] = useState(initialWeaponGeneration)
  const [limit, setLimit] = useState(false)

  useEffect(() => {
    localStorage.setItem('weapon', JSON.stringify(weaponGeneration))
  }, [weaponGeneration])

  return (
    <>
      <header className='md:p-28 p-10 bg-demonsouls bg-cover bg-black border-b border-yellow-100'>
        <h1 className='md:text-4xl text-xl font-bold text-amber-300 mb-5'>DARK SOULS RANDOM WEAPON GENERATOR</h1>
      </header>
      <main className='flex flex-col items-center pt-10'>    
        <Form 
          dsWeapons={dsWeapons}
          weaponGeneration={weaponGeneration}
          setWeaponGeneration={setWeaponGeneration}
          limit={limit}
          setLimit={setLimit}
        />
        
        <Table
          weaponGeneration={weaponGeneration}
        />
      </main>
    </>
    
  )
}

export default App
