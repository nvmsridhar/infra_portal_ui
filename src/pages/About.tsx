import { Shield, Clock, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building excellence since 1995, we've grown from a small local contractor
              to one of the region's most trusted construction companies.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-yellow-500" />,
                title: 'Integrity',
                description: 'Honest and transparent in all our dealings',
              },
              {
                icon: <Clock className="h-10 w-10 text-yellow-500" />,
                title: 'Punctuality',
                description: 'Delivering projects on time, every time',
              },
              {
                icon: <Users className="h-10 w-10 text-yellow-500" />,
                title: 'Teamwork',
                description: 'Collaborative approach to every project',
              },
              {
                icon: <Award className="h-10 w-10 text-yellow-500" />,
                title: 'Excellence',
                description: 'Committed to the highest quality standards',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the experts behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
                name: 'John Anderson',
                position: 'CEO',
              },
              {
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
                name: 'Sarah Mitchell',
                position: 'Project Director',
              },
              {
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                name: 'Michael Chen',
                position: 'Chief Engineer',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                year: '1995',
                title: 'Company Founded',
                description:
                  'Started as a small residential construction company.',
              },
              {
                year: '2005',
                title: 'Commercial Expansion',
                description:
                  'Expanded into commercial construction projects.',
              },
              {
                year: '2015',
                title: 'Regional Leader',
                description:
                  'Became one of the top construction firms in the region.',
              },
              {
                year: '2023',
                title: 'Sustainable Future',
                description:
                  'Launched green building initiative for sustainable construction.',
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-500">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;