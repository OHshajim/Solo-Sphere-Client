import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const UpdateJob = () => {
  const job = useLoaderData()
  // console.log(job);
  const { JobTitle, Deadline, Description, Category, MinimumPrice, MaximumPrice, buyer, _id } = job;
  const [startDate, setStartDate] = useState(new Date(Deadline) || new Date());

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Description = form.description.value;
    const Category = form.category.value;
    const Deadline = `${new Date(startDate).toLocaleDateString()}`;
    const MinimumPrice = form.min_price.value;
    const MaximumPrice = form.max_price.value;
    const JobTitle = form.job_title.value;
    const updatedJob = { JobTitle, Deadline, Description, Category, MinimumPrice, MaximumPrice }
    console.log(job);

    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/myJob/${_id}`, updatedJob)
      toast.success('Successfully deleted ')
    }
    catch (err) {
      console.log(err.message);
      toast.error(err?.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Job
        </h2>

        <form onSubmit={handleUpdate}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Job Title
              </label>
              <input
                id='job_title'
                name='job_title'
                type='text'
                defaultValue={JobTitle}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={buyer.Email}
                disabled
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              {/* Date picker input field */}
              <DatePicker className="p-2 w-full rounded-md bg-transparent " selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                defaultValue={Category}
                className='border p-2 rounded-md'
              >
                <option value='Web Development'>Web Development</option>
                <option value='Graphics Design'>Graphics Design</option>
                <option value='Digital Marketing'>Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                defaultValue={MinimumPrice}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                defaultValue={MaximumPrice}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              cols='30'
              defaultValue={Description}
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateJob
