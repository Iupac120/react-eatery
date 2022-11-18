import React from 'react'

const Categories = ({filterItems,categories}) => {
  return (
    <div>
     {categories.map((item,index)=>(
      <button type='button'
              key={index}
              className='filter-button'
              onClick={()=>filterItems(item)}
              >
        {item}
      </button>
     ))}
    </div>
  )
}

export default Categories