export default function FilterBar() {
    return (
      <div className="flex flex-wrap gap-4 mb-6">
        <input type="text" placeholder="Search location…" className="border rounded px-4 py-2 flex-1" />
        <select className="border rounded px-4 py-2">
          <option>All Prices</option>
          <option value="1000000">Under ₹10L</option>
          <option value="2000000">Under ₹20L</option>
        </select>
        <select className="border rounded px-4 py-2">
          <option>All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    );
  }