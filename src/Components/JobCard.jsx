/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const JobCard = ({ job }) => {
  const { JobTitle, Deadline, Description, Category, MinimumPrice, MaximumPrice, _id } = job
  return (
    <Link to={`/jobDetails/${_id}`}>
      <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all '>
        <div className='flex items-center justify-between'>
          <span className='text-xs font-light text-gray-800 '>
            Deadline: {Deadline}
          </span>
          <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
            {Category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {JobTitle}
          </h1>

          <p className='mt-2 text-sm text-gray-600 '>
            {
              (Description.length > 30) ? Description.slice(0, 30) : Description
            }...
          </p>
          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Range: {MinimumPrice} - {MaximumPrice}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
