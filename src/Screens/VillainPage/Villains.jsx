import React, { useState } from 'react';
import Pagination from 'react-js-pagination'

export default function Villains(props) {

  const { villains } = props;
console.log(props);
console.log(villains)

  const VillainsPerPage = 4;
  const [activePage, setCurrentPage] = useState(1);

  const indexOfLastVillain = activePage * VillainsPerPage;
  const indexOfFirstVillain = indexOfLastVillain - VillainsPerPage;
  const currentVillains = villains.slice(indexOfFirstVillain, indexOfLastVillain);

  const renderVillains = currentVillains.map((villain) => {
    return <p>{villain.name}</p>
  })

  const handlePageChange = (pageNumber) => {
    console.log(`current page is ${pageNumber}`)
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <h1>Oh no</h1>
      <div className='result'>
        {renderVillains}
      </div>
      <div className='pagination'>
        <Pagination
          activePage={activePage}
          itemsPerPage={4}
          totalItemsCount={villains.length}
          pageRangeDisplayed={4}
          onChange={handlePageChange}
          />
      </div>
    </div>
  )
}