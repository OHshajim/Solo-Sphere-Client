
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
// import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
    // const jobs = useLoaderData()

    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])
    console.log(jobs);
    return (
        <Tabs>
            <div className='container py-10 px-6 mx-auto'>
                <h1 className='text-2xl lg:text-3xl font-semibold text-center capitalize '>
                    Browse Jobs by Categories
                </h1>
                <p className='max-w-2xl mx-auto my-6 text-center font-semibold text-gray-500'>
                    Three categories available for the time being . They are Web Development , Graphics Design and Digital Marketing .Browse them by clicking on tabs below .
                </p>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(job => job.Category === "Web Development").map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(job => job.Category === "Graphics Design").map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(job => job.Category === "Digital Marketing").map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;