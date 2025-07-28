import Link from "next/link";
import React from "react";

const Card = ({ title, description, imageUrl, link, website }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
      <Link href={link} className="flex justify-center">
        <img 
          className="rounded-t-lg w-full h-48 object-cover" 
          src={imageUrl} 
          alt={title} 
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow text-center">
        <Link href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 flex-grow">
          {description}
        </p>
        <div className="flex justify-center">
          <Link 
            href={{
              pathname: `${link}`,
              query: { 
                title,
                description,
                imageUrl,
                websiteUrl: website
              }}}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-fit"
          >
للتفاصيل اضغط هنا            <svg 
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;