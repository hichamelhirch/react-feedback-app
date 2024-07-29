import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ReviewList from './ReviewList';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  const onSubmit = (data) => {
    setReviews([...reviews, data]);
  };

  const toggleReviewList = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      {/* Button to toggle review list */}
      <div className="bg-teal-200 p-4">
        <button
          onClick={toggleReviewList}
          className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 mx-auto block"
        >
          {showReviews ? "Cacher les avis" : "Afficher les avis"}
        </button>
      </div>

      {/* Form Section */}
      <section className="bg-teal-200 h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form className="text-xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group flex flex-col mb-4">
              <label htmlFor="avis" className="mb-2 text-lg font-semibold text-gray-700">Votre Avis</label>
              <textarea 
                {...register("avis", { required: "Ce champ est requis" })}
                id="avis" 
                rows="4" 
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Écrivez votre avis ici..."
              ></textarea>
              {errors.avis && <span className="text-red-500">{errors.avis.message}</span>}
            </div>
            <div className="form-group flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 text-lg font-semibold text-gray-700">Email</label>
              <input 
                {...register("email", { 
                  required: "Ce champ est requis", 
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Veuillez entrer une adresse email valide"
                  }
                })}
                type="email" 
                id="email" 
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 peer"
                placeholder="Votre adresse email"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Soumettre
            </button>
          </form>
        </div>
      </section>

      {/* Review List Section */}
      {showReviews && <ReviewList reviews={reviews} />}
    </div>
  );
}

export default App;
