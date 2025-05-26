import { useLang } from "../i18n.jsx";

export default function HeroBanner() {
  const { t } = useLang();

  return (
    <div
      className="relative h-[400px] sm:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold">{t.tagline}</h1>
        <a
          href="#listings"
          className="mt-6 inline-block bg-accent text-black font-semibold px-6 py-3 rounded shadow hover:scale-105 transition"
        >
          {t.exploreCTA}
        </a>
      </div>
    </div>
  );
}
   