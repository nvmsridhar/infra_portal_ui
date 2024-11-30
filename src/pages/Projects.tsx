import { useState } from 'react';
import { Building2, Home, Warehouse, Building } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  completion: string;
  client: string;
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      description: 'State-of-the-art office building with sustainable features',
      completion: '2023',
      client: 'Tech Corp',
    },
    {
      id: 2,
      title: 'Luxury Residence',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
      description: 'Custom-built luxury home with modern amenities',
      completion: '2023',
      client: 'Private Client',
    },
    {
      id: 3,
      title: 'Distribution Center',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80',
      description: 'Large-scale warehouse and distribution facility',
      completion: '2022',
      client: 'Logistics Co',
    },
    {
      id: 4,
      title: 'Shopping Mall',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80',
      description: 'Modern shopping center with entertainment facilities',
      completion: '2022',
      client: 'Retail Group',
    },
    {
      id: 5,
      title: 'Apartment Complex',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
      description: 'Multi-family residential development',
      completion: '2023',
      client: 'Housing Development',
    },
    {
      id: 6,
      title: 'Manufacturing Plant',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581093458791-9d42cc05b2ef?auto=format&fit=crop&q=80',
      description: 'Advanced manufacturing facility with smart technology',
      completion: '2022',
      client: 'Manufacturing Inc',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Building2 },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building },
    { id: 'industrial', name: 'Industrial', icon: Warehouse },
  ];

   <boltAction type="file" filePath="src/pages/Projects.tsx">  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across residential,
              commercial, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-yellow-500 text-slate-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <Icon size={20} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-white text-center p-4">
                      <p className="text-lg font-semibold">{project.client}</p>
                      <p>Completed: {project.completion}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                    <button className="text-yellow-500 hover:text-yellow-600 font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;