import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJOb } from "../../utility/localstorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information } = job;
    const handleApplyJob = () => {
        saveAppliedJOb(idInt)
        toast('You have applied job successfully')
    }
    return (
        <div>
            <div className="text-center bg-blue-100 py-20">
                <h1 className="text-3xl font-bold">Job Details</h1>
            </div>
            <div className="flex justify-between gap-5 w-5/6  my-10 mx-auto ">
                <div className="w-3/4">
                    <p><span className="font-bold">Job Description:</span> {job_description}</p>
                    <p className="my-3"><span className="font-bold">Job Responsibility:</span> {job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span> <br /> {educational_requirements}</p>
                    <p className="mt-3"><span className="font-bold">Experience:</span> <br />{experiences}</p>
                </div>
                <div className="w-1/4 ">
                    <div className="bg-blue-100 p-5 rounded-xl">
                        <h2>Job Details</h2>
                        <div className="w-full h-[1px] bg-blue-200 my-3">

                        </div>
                        <p>Salary: {salary}</p>
                        <p>Job Title: {job_title}</p>
                        <h2 className="font-bold">Contact Information:</h2>
                        <div className="w-full h-[1px] bg-blue-200 my-3">

                        </div>
                        <p>Phone: {contact_information.phone}</p>
                        <p className="my-2">Phone: {contact_information.email}</p>
                        <p>Phone: {contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-accent mt-3 w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;