export default function Sidebar() {
    const sidebarItems = [
      { name: 'Home', icon: 'M3 12h18M3 6h18M3 18h18', href: '/' },
      { name: 'Projects', icon: 'M8 16l4-4-4-4m8 8l4-4-4-4', href: '/projects' },
      { name: 'Create', icon: 'M12 8v8m4-4H8', href: '/create' },
      { name: 'Settings', icon: 'M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5', href: '/settings' },
      { name: 'Logout', icon: 'M16 12H8m0 0l4-4m-4 4l4 4', href: '/logout' },
    ];

  
    return (
      <div className="sidebar bg-gray-800 text-white w-64 h-full fixed top-0 left-0 p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
  
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4">
              <a
                href={item.href}
                className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={item.icon}
                  />
                </svg>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  