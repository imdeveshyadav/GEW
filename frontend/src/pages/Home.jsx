
import { useLang } from '../i18n.jsx';
import ListingCard from '../components/ListingCard.jsx';

export default function Home() {
  const { t } = useLang();

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative h-[400px] sm:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t.tagline}</h1>
          <a
            href="#listings"
            className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:scale-105 transition"
          >
            {t.exploreCTA}
          </a>
        </div>
      </div>

      {/* Expressway Facts */}
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{t.highlight1}</h2>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{t.highlight2}</h2>
        <h2 className="text-xl font-semibold text-gray-700">{t.highlight3}</h2>
      </div>

      {/* About Expressway */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About Ganga Expressway</h2>
          <p className="text-gray-600 leading-relaxed">
            Ganga Expressway is a 594 km, 6-lane (expandable to 8) greenfield expressway that will connect
            Western UP’s Meerut to Eastern UP’s Prayagraj. Traversing 12 districts, this transformative project
            will dramatically reduce travel time and boost economic growth along its corridor.
          </p>
        </div>
      </section>

      {/* District Coverage */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Districts Covered</h2>
          <p className="text-gray-600 mb-4">Meerut, Hapur, Bulandshahr, Amroha, Sambhal, Badaun, Shahjahanpur, Hardoi, Unnao, Rae Bareli, Pratapgarh, Prayagraj</p>
          <img
  src="/images/map-preview.jpg"
  alt="Ganga Expressway Route Map"
  className="mx-auto rounded-lg shadow-lg max-w-full sm:max-w-2xl h-auto object-contain"
/>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Verified Title & Documents</h3>
            <p className="text-gray-600">All properties legally checked by our expert team before listing.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Negotiation Support</h3>
            <p className="text-gray-600">We help you get the best price by mediating directly with sellers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">End-to-End Legal Help</h3>
            <p className="text-gray-600">From agreement to registration – we support you at every step.</p>
          </div>
        </div>
      </section>

      {/* Call to Action for Sellers */}
      <section className="py-12 bg-primary text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Have Land Near Ganga Expressway?</h2>
        <p className="mb-4">List your property with us for verified, hassle-free selling.</p>
        <a
          href="/contact"
          className="inline-block bg-yellow-300 text-black font-medium px-6 py-3 rounded hover:bg-yellow-400"
        >
          List My Property
        </a>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Latest News & Updates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded p-4 bg-white shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Ganga Expressway 80% Complete – April Update</h3>
              <p className="text-gray-600 text-sm">The 594 km stretch is nearing completion with major milestones met across 9 districts...</p>
              <a href="/blog" className="text-primary text-sm mt-2 inline-block">Read more →</a>
            </div>
            <div className="border rounded p-4 bg-white shadow">
              <h3 className="font-semibold text-gray-800 mb-2">How Expressways Impact Land Prices</h3>
              <p className="text-gray-600 text-sm">Infrastructure like Ganga Expressway is boosting demand for nearby plots and increasing resale value...</p>
              <a href="/blog" className="text-primary text-sm mt-2 inline-block">Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Placeholder */}
      <div className="max-w-6xl mx-auto p-4" id="listings">
        <p className="text-gray-500">Featured listings will appear here soon.</p>
      </div>
    </div>
  );
}
