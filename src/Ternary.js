import React from 'react'

const Ternary = () => {
    const age = 17;
    const isGreen = true;
  return (
    <div>
      {age >= 18 ? <h1>Usia diatas 17 tahun</h1> : <h1>Usia dibawah 17 tahun</h1>}
      <h1 style={{color : isGreen ? "green" : "red"}}>Ternary Ubah Warna</h1>

      {isGreen && <button>Submit</button>}
    </div>
  )
}

export default Ternary
