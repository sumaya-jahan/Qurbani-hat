import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Details = () => {

  const { id } = useParams();

  const [animal, setAnimal] = useState(null);

  useEffect(() => {

    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {

        const foundAnimal = data.find(
          (singleAnimal) => singleAnimal.id === parseInt(id)
        );

        setAnimal(foundAnimal);
      });

  }, [id]);

  const handleBooking = (e) => {

    e.preventDefault();

    toast.success("Booking Successful!");

    e.target.reset();
  };

  if (!animal) {
    return (
      <div className="text-center mt-20 text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

   
        <div>
          <img
            src={animal.image}
            alt={animal.name}
            className="rounded-xl w-full"
          />
        </div>

    
        <div>

          <h1 className="text-5xl font-bold mb-6">
            {animal.name}
          </h1>

          <p className="mb-3">
            <span className="font-bold">Breed:</span> {animal.breed}
          </p>

          <p className="mb-3">
            <span className="font-bold">Type:</span> {animal.type}
          </p>

          <p className="mb-3">
            <span className="font-bold">Weight:</span> {animal.weight} KG
          </p>

          <p className="mb-3">
            <span className="font-bold">Age:</span> {animal.age} Years
          </p>

          <p className="mb-3">
            <span className="font-bold">Location:</span> {animal.location}
          </p>

          <p className="mb-3">
            <span className="font-bold">Price:</span> ৳ {animal.price}
          </p>

          <p className="mb-6">
            {animal.description}
          </p>

        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Book This Animal
        </h2>

        <form
          onSubmit={handleBooking}
          className="max-w-2xl mx-auto space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            required
          />

          <textarea
            placeholder="Address"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>

          <button className="btn btn-primary w-full">
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
};

export default Details;