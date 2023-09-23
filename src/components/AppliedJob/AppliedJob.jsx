
import PropTypes from "prop-types"

const AppliedJob = ({ appliedJob }) => {
    const {logo,job_title,remote_or_onsite,job_description} = appliedJob;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{job_description}</p>
                <p>Job Type: {remote_or_onsite}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};
AppliedJob.propTypes = {
    appliedJob: PropTypes.object
}
export default AppliedJob;