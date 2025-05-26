import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api.js';

export default function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    api.get(`/listings`, { params: { id } }).then(r => {
      const found = r.data.find(x => x.id === +id);
      setListing(found);
    });
  }, [id]);

  if (!listing) return <p className="p-4">Loading…</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={listing.images?.[0]} alt={listing.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{listing.title}</h1>
      <p className="text-primary text-xl mt-2">₹ {listing.price.toLocaleString()}</p>
      <p className="mt-2 text-gray-700">{listing.location}</p>
      <p className="mt-4 leading-relaxed">{listing.description || 'No description provided.'}</p>
    </div>
  );
}

