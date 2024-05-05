
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabCategories = () => {
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
                        <Tab>Digital Marketing </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;