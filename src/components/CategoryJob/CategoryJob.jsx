import PropTypes from 'prop-types';

const CategoryJob = ({categoryJob}) => {
    const {logo, category_name, availability} = categoryJob;
    return (
        <div className="bg-blue-50 rounded-lg m-3 p-10">
            <img className="mb-5 bg-blue-100 p-3 " src={logo} alt="" />
            <h2 className="text-xl font-extrabold ">{category_name}</h2>
            <h3 className="font-medium mt-3 text-gray-500">{availability}</h3>
        </div>
    );
};
CategoryJob.propTypes = {
    categoryJob: PropTypes.object
}
export default CategoryJob;