import { ArrowRight, Building2, Users, Trophy, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Tomorrow's Legacy Today
            </h1>
            <p className="text-xl mb-8">
              Excellence in construction, renovation, and project management
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-yellow-500 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Delivering excellence in every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-12 w-12 text-yellow-500" />,
                title: 'Quality Construction',
                description:
                  'Superior materials and craftsmanship in every project we undertake.',
              },
              {
                icon: <Users className="h-12 w-12 text-yellow-500" />,
                title: 'Expert Team',
                description:
                  'Highly skilled professionals with years of industry experience.',
              },
              {
                icon: <Trophy className="h-12 w-12 text-yellow-500" />,
                title: 'Award Winning',
                description:
                  'Recognized for excellence in construction and customer satisfaction.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HardHat className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-yellow-500 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;