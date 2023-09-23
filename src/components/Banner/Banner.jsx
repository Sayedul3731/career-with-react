

const Banner = () => {
    return (
        <div className="w-full bg-blue-50 mb-20">
            <div className="flex justify-between items-center w-5/6 mx-auto">
                <div className="w-96">
                    <h1 className="text-5xl font-extrabold">One Step Closer To Your <span className="text-blue-400">Dream Job</span></h1>
                    <p className="text-xl font-medium text-gray-500 my-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-active btn-accent">Get Started</button>
                </div>
                <div>
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;