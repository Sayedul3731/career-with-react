

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-gray-500 mt-10">
            <footer className="footer lg:w-5/6 mx-auto ">
                <aside className="md:ml-10">
                    <h2 className="text-2xl font-extrabold text-white">Career Hub</h2>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className=" font-extrabold text-white">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="font-extrabold text-white">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="font-extrabold text-white">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </footer>
    );
};

export default Footer;