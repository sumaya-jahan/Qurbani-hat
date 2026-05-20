const ExtraSection = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            <h1 className="text-5xl font-bold text-center mb-12">
                Why Choose Us?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body text-center">

                        <h2 className="text-2xl font-bold">
                            Healthy Animals
                        </h2>

                        <p>
                            We provide healthy and verified animals for safe Qurbani.
                        </p>

                    </div>

                </div>

                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body text-center">

                        <h2 className="text-2xl font-bold">
                            Trusted Sellers
                        </h2>

                        <p>
                            Our sellers are trusted and experienced livestock farmers.
                        </p>

                    </div>

                </div>

                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body text-center">

                        <h2 className="text-2xl font-bold">
                            Easy Booking
                        </h2>

                        <p>
                            Book your favorite animal quickly and easily online.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ExtraSection;