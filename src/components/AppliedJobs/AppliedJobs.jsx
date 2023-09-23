import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobByFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }else if( filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if ( filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredApplication()

        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied);
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [])
console.log(displayJobs);
    return (
        <div>
            <h2>Applied Jobs: {appliedJobs.length}</h2>
            <div>
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobByFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobByFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobByFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;