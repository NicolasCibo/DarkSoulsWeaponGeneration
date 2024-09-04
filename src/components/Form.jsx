function Form({dsWeapons, weaponGeneration, setWeaponGeneration, limit, setLimit}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        if(weaponGeneration.length < 5){
            const categorySelected = e.target.category.value 
            //SE ASIGNA EL OBJETO DEL ARMA A UNA NUEVA VARIABLE 
            const randomWeapon = generateNewWeapon(categorySelected)
            //SE ASIGNA A UNA VARIABLE EL NOMBRE DEL ARMA REEMPLAZANDO LOS ESPACIOS CON EL SIGNO "+"
            const weaponNamePage =  randomWeapon.newWeapon.name.replace(/ /g, '+')
            //EJEMPLO: https://darksouls.wiki.fextralife.com/Battle+Axe
            const weaponPage = `https://darksouls.wiki.fextralife.com/${weaponNamePage}`
            const weaponImg = randomWeapon.newWeapon.name.replace(/ /g, '_').toLowerCase()
            setWeaponGeneration([...weaponGeneration, {randomWeapon, page : weaponPage, weaponImg : weaponImg}])
        }else{
            setLimit(true)
            setTimeout(() => {
               setLimit(false) 
            }, 2000);
        }
    }

    //GENERA NUEVA ARMA SIN DUPLICADOS
    function generateNewWeapon(categorySelected){
        let randomNum = 0
        let categoryW = []

        if(categorySelected === 'All'){
            //GENERA UN NUMERO ALEATORIO SEGUN LA LONGITUD DE "dsWeapons" (EL ARRAY ESTA DIVIDIDO POR LAS CATEGORIAS DE ARMA)
            randomNum = Math.floor(Math.random() * dsWeapons.length)
            //SE ASIGNA LA CATEGORIA DE ARMA A UNA NUEVA VARIABLE
            categoryW = dsWeapons[randomNum]
        }else{
            categoryW = dsWeapons[categorySelected]
        }
        //SE ASIGNA LA CATEGORIA DE ARMA EN MINUSCULA A UNA NUEVA VARIABLE 
        let categoryMinus = categoryW.category.toLowerCase().replace(/\s/g, '')
        if(categoryMinus === "straightswords"){categoryMinus = "st_swords"}
        if(categoryMinus === "fist&claw"){categoryMinus = "fistandclaws"}
        //GENERA UN NUMERO ALEATORIO SEGUN LA LONGITUD DE "categoryW[categoryMinus]" (EL ARRAY ESTA DIVIDIDO POR LAS ARMAS DE ESA CATEGORIA)
        randomNum =  Math.floor(Math.random() * categoryW[categoryMinus].length)
        const newWeapon = categoryW[categoryMinus][randomNum]

        const exist = weaponGeneration.some(weapon => weapon.randomWeapon.newWeapon === newWeapon)

        if(exist){
            return generateNewWeapon(categorySelected)
        }else{
            return {newWeapon, category: categoryW.category}
        }
    }

    const resetClick = () => {setWeaponGeneration([])}

  return (
    <>
        <form onSubmit={handleSubmit}  className="grid grid-rows-2 grid-cols-2 text-center gap-2 items-center md:block">
            <label htmlFor="category" className='text-xl text-bold text-yellow-100 text-end'>Category: </label>
            <select name="category" id="category">
                <option value="All">All</option>
                {dsWeapons.map((weapon, index) => (
                    <option key={index} value={index}>{weapon.category}</option>
                ))}
            </select>

            <input type="submit" value="Generate"
                className='bg-white rounded-xl py-1 px-2 font-bold uppercase cursor-pointer md:ml-5 border border-black hover:bg-black hover:text-yellow-100 hover:border-yellow-100' />
            <input type="button" value="Reset" onClick={resetClick}
                className='bg-white rounded-xl py-1 px-2 font-bold uppercase cursor-pointer md:ml-5 border border-black hover:bg-black hover:text-yellow-100 hover:border-yellow-100' />
        </form>
        {limit ? (
            <div className="py-2 px-4 md:px-12 mt-5 bg-white rounded-xl">
                <h3 className="uppercase text-black text-xl font-bold">Generation limit reached!</h3>
            </div>
        ):(
        null
        )}
    </>
  )
}

export default Form