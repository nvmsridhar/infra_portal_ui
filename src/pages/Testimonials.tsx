import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Innovations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content:
        'BuildRight exceeded our expectations in every way. Their attention to detail and commitment to quality made our office renovation project a complete success.',
      rating: 5,
      project: 'Office Renovation',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content:
        'We couldn't be happier with our custom home. The team was professional, responsive, and delivered exactly what we envisioned.',
      rating: 5,
      project: 'Custom Home Build',
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Director, Retail Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      content:
        'The shopping center renovation was completed on time and within budget. BuildRight's expertise in commercial construction is unmatched.',
      rating: 5,
      project: 'Shopping Center Renovation',
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Property Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      content:
        'Working with BuildRight on our apartment complex was a great experience. Their team's coordination and execution were flawless.',
      rating: 5,
      project: 'Apartment Complex',
    },
    {
      id: 5,
      name: 'David Thompson',
      position: 'Factory Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      content:
        'The industrial facility BuildRight constructed for us perfectly meets our operational needs. Their understanding of industrial requirements is impressive.',
      rating: 5,
      project: 'Industrial Facility',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      position: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80',
      content:
        'From design to completion, BuildRight made our restaurant renovation stress-free. Their expertise in commercial construction is evident.',
      rating: 5,
      project: 'Restaurant Renovation',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say
              about working with BuildRight.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-yellow-500 opacity-20" />
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our satisfied clients and experience the BuildRight difference.
          </p>
          <button className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;