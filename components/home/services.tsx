import { Monitor, Shield, Code, Database, Brain, Phone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Desenvolvimento de Software',
    description: 'Soluções personalizadas para web, mobile e desktop, utilizando as mais recentes tecnologias.',
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Segurança Cibernética',
    description: 'Proteção avançada contra ameaças digitais e consultoria em segurança da informação.',
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: 'Inteligência Artificial',
    description: 'Implementação de soluções de IA e Machine Learning para otimizar processos.',
  },
  {
    icon: <Database className="w-12 h-12 text-blue-600" />,
    title: 'Integração de Sistemas',
    description: 'Conectamos diferentes sistemas e APIs para criar soluções completas e eficientes.',
  },
  {
    icon: <Monitor className="w-12 h-12 text-blue-600" />,
    title: 'Consultoria em TI',
    description: 'Orientação estratégica para transformação digital e inovação tecnológica.',
  },
  {
    icon: <Phone className="w-12 h-12 text-blue-600" />,
    title: 'Desenvolvimento Mobile',
    description: 'Criação de aplicativos móveis nativos e multiplataforma de alta performance.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">
            Soluções tecnológicas completas para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;