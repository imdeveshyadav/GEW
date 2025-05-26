import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ListingDetail from './pages/ListingDetail.jsx';
import { LangProvider, useLang } from './i18n.jsx';


function Navbar() {
  const { lang, setLang, t } = useLang();

  return (
    <nav className="bg-white shadow p-4 flex flex-wrap justify-between items-center">
      <Link to="/" className="text-primary text-xl font-bold">GangaExpressway.org</Link>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link to="/">{t.home}</Link>
        <Link to="/route">{t.routeMap}</Link>
        <Link to="/listings">{t.listings}</Link>
        <Link to="/blog">{t.blog}</Link>
        <Link to="/faq">{t.faq}</Link>
        <Link to="/contact">{t.contact}</Link>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="ml-4 border rounded px-2 py-1">
          <option value="en">EN</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
      </Routes>
    </LangProvider>
  );
}
