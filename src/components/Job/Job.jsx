import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, company_name, location, salary, remote_or_onsite, job_title, job_type
    } = job;
    return (
        <div className="border rounded-lg p-5">
            <img className="w-32 mb-5" src={logo} alt="" />
            <h2 className="text-2xl font-extrabold">{job_title}</h2>
            <h3 className="text-xl text-gray-400 font-semibold my-4">{company_name}</h3>
            <div className="flex gap-10 my-4">
                <button className="btn btn-outline btn-accent">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-accent">{job_type}</button>
            </div>
            <div className="flex justify-between mb-5">
                <p className='flex justify-center items-center gap-3'><span> <CiLocationOn></CiLocationOn> </span> <span className='text-xl font-semibold text-gray-500'>{location}</span></p>
                <p className='flex items-center justify-center gap-2 text-xl font-semibold text-gray-500'> <CiDollar></CiDollar> <span> Salary: {salary}</span></p>
            </div>
            <Link to={`/job/${id}`}>
                <button className="btn btn-accent">View Details</button>
            </Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}
export default Job;