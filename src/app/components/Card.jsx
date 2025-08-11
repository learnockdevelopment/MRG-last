import Link from "next/link";
import React from "react";

const Card = ({
  company_name,
  description,
  img_url,
  id,
  website,
  vision,
  goals,
  mission,
  phone,
  address,
  products,
  services,
  values,
  branches,
  training_fields,
  advantages,
  target_sectors,
  certifications,
  target_markets,
  email, // Added email prop
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col hover:shadow-md transition-shadow">
      <Link href={`/companies/${id}`} className="flex justify-center">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={img_url || "/placeholder-company.jpg"}
          alt={company_name}
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/companies/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
            {company_name}
          </h5>
        </Link>

        <div className="mb-3 font-normal text-gray-700 flex-grow">
          <p className="line-clamp-3 mb-2">{description}</p>

          {/* Display phone if available */}
          {phone && (
            <p className="text-sm mt-1">
              <span className="font-semibold">هاتف:</span> {phone}
            </p>
          )}

          {/* Display address if available */}
          {address && (
            <p className="text-sm mt-1 line-clamp-2">
              <span className="font-semibold">عنوان:</span> {address}
            </p>
          )}

          {/* Display first few items of arrays if available */}
          {products?.length > 0 && (
            <p className="text-sm mt-1">
              <span className="font-semibold">منتجات:</span>{" "}
              {products.slice(0, 2).join("، ")}...
            </p>
          )}

          {services?.length > 0 && (
            <p className="text-sm mt-1">
              <span className="font-semibold">خدمات:</span>{" "}
              {services.slice(0, 2).join("، ")}...
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <Link
            href={{
              pathname: `/companies/${id}`,
              query: {
                title: company_name,
                description,
                imageUrl: img_url,
                websiteUrl: website,
                vision: vision,
                goals: JSON.stringify(goals),
                mission:
                  typeof mission === "string"
                    ? mission
                    : JSON.stringify(mission),
                phone,
                address,
                products: JSON.stringify(products),
                services: JSON.stringify(services),
                values: JSON.stringify(values),
                branches: JSON.stringify(branches),
                training_fields: JSON.stringify(training_fields),
                advantages: JSON.stringify(advantages),
                certifications: JSON.stringify(certifications),
                target_sectors: JSON.stringify(target_sectors),
                target_markets: JSON.stringify(target_markets),
                email: email, // Pass email in query
              },
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-fit"
          >
            للتفاصيل اضغط هنا
            <svg
              className="ltr:rotate-180 w-3.5 h-3.5 ms-2"
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
