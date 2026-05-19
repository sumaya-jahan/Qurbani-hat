import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero from "../../assets/hero.jpeg";
import AnimalCard from "../../components/AnimalCard";

const Home = () => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("/animals.json")
            .then((res) => res.json())
            .then((data) => setAnimals(data));
    }, []);

    return (
        <div>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${hero})`,
                }}
            >
                <div className="hero-overlay bg-black/60"></div>

                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">

                        <h1 className="mb-5 text-5xl font-bold">
                            Find Perfect Animals For Qurbani
                        </h1>

                        <p className="mb-5">
                            Explore healthy cows and goats from trusted farms across Bangladesh.
                        </p>

                        <Link to="/animals">
                            <button className="btn btn-primary">
                                Browse Animals
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-20 px-4">

                <h2 className="text-4xl font-bold text-center mb-10">
                    Featured Animals
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        animals.slice(0, 4).map((animal) => (
                            <AnimalCard
                                key={animal.id}
                                animal={animal}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;