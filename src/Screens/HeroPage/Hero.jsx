import React from 'react';


export default function Hero (props) {
  const {proHeroes} = props
  console.log(props)
  return (
    <div className='all-students'>
      {proHeroes.map((proHero) => (
        <div className='heroes-container'>
          <p>{proHero.name}</p>
          <p>{proHero.quirk}</p>
          <img className='heroes-pics'src={proHero.images[1]}/>
          </div>
      ))}
        </div>
  )
}