import { Link } from "react-router-dom";

const AnimalCard = ({ animal }) => {
    const { id, name, breed, price, image, location } = animal;

    return (
        <div className="card bg-base-100 shadow-xl">

            <figure>
                <img
                    src={image}
                    alt={name}
                    className="h-64 w-full object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title">
                    {name}
                </h2>

                <p>
                    Breed: {breed}
                </p>

                <p>
                    Location: {location}
                </p>

                <p className="font-bold text-green-700">
                    ৳ {price}
                </p>

                <div className="card-actions justify-end">
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-primary">
                            View Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AnimalCard;