import { useEffect, useState } from "react";
import CategoryJob from "../CategoryJob/CategoryJob";


const CategoryList = () => {
    const [categoryJobs, setCategoryJobs] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategoryJobs(data))
    },[])
    console.log(categoryJobs);
    return (
        <div>
            <h2 className="text-5xl text-center">Job Category List</h2>
            <p className="text-center font-medium text-gray-500 my-5">
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:w-5/6 mx-auto">
                {
                    categoryJobs.map(categoryJob => <CategoryJob key={categoryJob.id} categoryJob={categoryJob}></CategoryJob> )
                }
            </div>
        </div>
    );
};

export default CategoryList;