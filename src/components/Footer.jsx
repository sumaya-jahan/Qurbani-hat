import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="bg-black text-white py-10 mt-10">

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>

                    <h2 className="text-3xl font-bold mb-3">
                        Qurbani Hat
                    </h2>

                    <p>
                        Trusted livestock marketplace for safe and easy Qurbani booking.
                    </p>

                </div>

                <div>

                    <h3 className="text-2xl font-semibold mb-3">
                        Contact
                    </h3>

                    <p>Email: support@qurbanihat.com</p>

                    <p>Phone: +880123456789</p>

                </div>

                <div>

                    <h3 className="text-2xl font-semibold mb-3">
                        Follow Us
                    </h3>

                    <div className="flex gap-4 text-3xl">

                        <FaFacebook />

                        <FaInstagram />

                        <FaYoutube />

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;