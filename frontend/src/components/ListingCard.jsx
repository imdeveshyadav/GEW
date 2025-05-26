import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ListingCard({ listing }) {
  const img = listing.images?.[0] || '/placeholder.jpg';

  return (
    <Link to={`/listing/${listing.id}`} className="block group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={img} alt={listing.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
        {listing.approved && (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded-full flex items-center">
            <CheckCircleIcon className="w-4 h-4 mr-1" /> Verified
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{listing.title}</h3>
        <p className="text-gray-500 text-sm">{listing.location}</p>
        <p className="text-primary font-bold mt-1 text-lg">₹ {listing.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
