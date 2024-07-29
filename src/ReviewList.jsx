import React from 'react';

function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return (
      <section className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Liste des avis</h2>
          <p>Aucun avis soumis pour le moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Liste des avis</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="mb-4">
              <p className="text-lg font-semibold">Avis: {review.avis}</p>
              <p className="text-sm text-gray-600">Email: {review.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReviewList;
