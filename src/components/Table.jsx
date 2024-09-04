

function Table({weaponGeneration}) {

  const openPage = (page) => window.open(page, '_blank')

  return (
    <div className="mt-5 pb-10">
        <table className="border border-yellow-100 max-w-80 md:max-w-none">
        <thead className="border border-yellow-100">
          <tr className="text-center text-emerald-100">
            <th className="border-r border-yellow-100 p-2">Weapon</th>
            <th className="border-r border-yellow-100 p-2">Category</th>
            <th className="border-r border-yellow-100 p-2">STR</th>
            <th className="border-r border-yellow-100 p-2">DEX</th>
            <th className="border-r border-yellow-100 p-2">INT</th>
            <th className="p-2">FAITH</th>
          </tr>
        </thead>
        <tbody>
          {weaponGeneration.map((weapon, index) => (
            <tr key={index} onClick={() => openPage(weapon.page)} className="text-white text-center text-sm md:text-base md:font-bold hover:text-black hover:bg-gray-400 cursor-pointer">
              <td className="border-r border-b border-yellow-100 py-2 px-1 md:p-2">
                <img src={`/img/${weapon.weaponImg}.png`} alt={weapon.randomWeapon.newWeapon.name} className="mx-auto"/>
                {weapon.randomWeapon.newWeapon.name}
              </td>
              <td className="border-r border-b border-yellow-100 py-2 px-1 md:p-2">{weapon.randomWeapon.category}</td>
              <td className="border-r border-b border-yellow-100 md:p-2 text-center">{weapon.randomWeapon.newWeapon.requirements.str}</td>
              <td className="border-r border-b border-yellow-100 md:p-2 text-center">{weapon.randomWeapon.newWeapon.requirements.dex}</td>
              <td className="border-r border-b border-yellow-100 md:p-2 text-center">{weapon.randomWeapon.newWeapon.requirements.int}</td>
              <td className="border-r border-b border-yellow-100 md:p-2 text-center">{weapon.randomWeapon.newWeapon.requirements.faith}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table