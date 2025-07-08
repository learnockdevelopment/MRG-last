import React from "react";
import Link from "next/link";
const BookCard = ({ book , id }) => {
  return (
    <Link href={`/about/${id}`}  className="group animate-fadeInUp w-full max-w-52 mx-auto mt-8">
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2`}
      >
        <img
          src={book.image}
          alt={book.title}
          className="w-full  object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-center text-gray-800  font-tajawal">
        {book.title}
      </h3>
    </Link>
  );
};

export default BookCard;