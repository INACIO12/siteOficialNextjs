import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "A MTevolution transformou completamente nossa presença digital. A equipe é extremamente profissional e dedicada.",
    author: "Maria Silva",
    role: "CEO, TechMoz",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    content: "Excelente trabalho no desenvolvimento do nosso sistema de gestão. Superou todas as expectativas!",
    author: "João Santos",
    role: "Diretor, InnovateAfrica",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    content: "Profissionais altamente qualificados e comprometidos com a excelência. Recomendo fortemente!",
    author: "Ana Machava",
    role: "CTO, StartupMoz",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">
            O que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;