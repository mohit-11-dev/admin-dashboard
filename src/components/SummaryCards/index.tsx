const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" data-testid="summary-cards">
      <div data-testid="card-total-users" className="bg-background text-foreground shadow p-4 rounded">Total Users: 12</div>
      <div data-testid="card-active-users" className="bg-background text-foreground shadow p-4 rounded">Active: 8</div>
      <div data-testid="card-inactive-users" className="bg-background text-foreground shadow p-4 rounded">Inactive: 4</div>
    </div>
  );
};

export default SummaryCards;
