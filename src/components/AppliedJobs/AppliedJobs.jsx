import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobIds = getStoredApplication()
        
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied);
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
        }
    },[])

    return (
        <div>
            <h2>Applied Jobs: {appliedJobs.length}</h2>
            {
                appliedJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob> )
            }
        </div>
    );
};

export default AppliedJobs;