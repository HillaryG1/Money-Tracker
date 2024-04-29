import React from 'react'
import 'boxicons';

const obj = [
  {
    name:"Savings",
    color: '#f9c74f',
  },
  {
    name:"Investment",
    color: '#f9c74f',
  },
  {
    name:"Expense",
    color:  'rgb(54, 162, 235)',
  },
]

export default function List() {
  return (
    <div className='flex flex-col py-6 gap-3'> 
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {obj.map((v, i) => <Transaction key={i} category={v}></Transaction>)}
      
    </div>
  )
}

function Transaction({category}){
  if(!category) return null;
  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight: `8px solid ${category.color ?? "#e5e5e5"}`, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}> 
      <button className='px-3'><box-icon color={category.color ?? "#e5e5e5"}size="15px" name="trash"/></button>
      <span className='block w-full'>{category.name ?? ""}</span>
    </div>
  )
 
}