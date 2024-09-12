export default function Projects() {
    const dashboardItems = [
      { title: 'LaunchPad', description: 'A sleek landing page template designed for startups and product launches.' },
      { title: 'InsightHub', description: 'A customizable dashboard for visualizing key business metrics and data.' },
      { title: 'FitMate', description: 'A fitness tracker app that monitors workouts, nutrition, and overall health progress.' },
      { title: 'EduMaster', description: 'An e-learning platform to create and manage online courses with student tracking.' },
      { title: 'Eventify', description: 'A web application for organizing and promoting local or virtual events with ticketing integration.' },
    ];
  
    return (
      <main className="flex-1 min-h-screen p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <div
              key={index}
              className="box bg-gray-50 shadow-md p-6 rounded-lg hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg transition-all duration-300 flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-gray-900 text-xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  