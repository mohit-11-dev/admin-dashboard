const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen hidden md:block">
      <div className="p-4 font-bold text-lg">Admin Panel</div>
      <nav className="p-4 space-y-2">
        <a href="/" className="block hover:bg-gray-700 p-2 rounded">
          Dashboard
        </a>
        <a href="/" className="block hover:bg-gray-700 p-2 rounded">
          Users
        </a>
        <a href="/" className="block hover:bg-gray-700 p-2 rounded">
          Reports
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
