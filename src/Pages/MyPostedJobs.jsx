import { useContext, useEffect, useState } from "react"
import MyPostedJobsRows from "../Components/MyPostedJobsRows"
import axios from "axios"
import { AuthContext } from "../Provider/AuthProvider"
import toast from "react-hot-toast"

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext)
  const [jobs, setJobs] = useState([])

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/myJobs/${user?.email}`)
    setJobs(data)
  }

  useEffect(() => {
    getData()
  }, [user])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/myJobs/${id}`)
      toast.success('Successfully deleted ')
      getData()
    }
    catch (err) {
      console.log(err.message);
      toast.error(err?.message)
    }
  }
  
  return (
    <section className='container px-4 mx-auto pt-12 my-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium  '>My Posted Jobs</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {((jobs.length) >= 9) ? jobs.length : '0' + (jobs.length)} {(jobs.length > 1) ? "Jobs" : 'Job'}
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price Range</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Description
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {jobs.map(job => <MyPostedJobsRows key={job._id} job={job} handleDelete={handleDelete} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPostedJobs
