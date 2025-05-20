const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div className="bg-white shadow p-4 rounded">Total Users: 12</div>
      <div className="bg-white shadow p-4 rounded">Active: 8</div>
      <div className="bg-white shadow p-4 rounded">Inactive: 4</div>
    </div>
  );
};

export default SummaryCards;
