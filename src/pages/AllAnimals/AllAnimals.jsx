import { useEffect, useState } from "react";
import AnimalCard from "../../components/AnimalCard";

const AllAnimals = () => {

    const [animals, setAnimals] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        fetch("/animals.json")
            .then((res) => res.json())
            .then((data) => setAnimals(data));
    }, []);

    const handleSort = (order) => {

        setSortOrder(order);

        const sortedAnimals = [...animals].sort((a, b) => {

            if (order === "low") {
                return a.price - b.price;
            }
            else {
                return b.price - a.price;
            }

        });

        setAnimals(sortedAnimals);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            <h1 className="text-5xl font-bold text-center mb-10">
                All Animals
            </h1>

            <div className="flex justify-end mb-8">

                <select
                    className="select select-bordered"
                    value={sortOrder}
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value="">
                        Sort By Price
                    </option>

                    <option value="low">
                        Low to High
                    </option>

                    <option value="high">
                        High to Low
                    </option>

                </select>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    animals.map((animal) => (
                        <AnimalCard
                            key={animal.id}
                            animal={animal}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default AllAnimals;