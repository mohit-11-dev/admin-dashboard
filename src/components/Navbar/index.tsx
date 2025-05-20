const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <input type="text" placeholder="Search..." className="border p-2 rounded w-1/2" />
      <div className="flex items-center space-x-4">
        <span>🔔</span>
        <div className="bg-gray-200 p-2 rounded-full">👤</div>
      </div>
    </header>
  );
};

export default Navbar;
