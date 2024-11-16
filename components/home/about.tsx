const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a MTevolution
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Nossa Missão
            </h3>
            <p className="text-gray-600 mb-6">
              A MTevolution é uma startup de tecnologia com sede em Moçambique,
              dedicada a promover a evolução tecnológica e inovação no país.
              Nossa equipe jovem e apaixonada por tecnologia é especializada em
              áreas como inteligência artificial, desenvolvimento web e segurança
              cibernética.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Compromisso com a evolução tecnológica</li>
              <li>• Paixão pela inovação</li>
              <li>• Excelência em serviços</li>
              <li>• Impacto social positivo</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Liderança
              </h4>
              <p className="text-gray-600">
                <strong>CEO:</strong> José César Mussá<br />
                <strong>CTO:</strong> Inácio Mungoi
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Nossa Visão
              </h4>
              <p className="text-gray-600">
                Ser a principal referência em inovação tecnológica em Moçambique,
                contribuindo para o desenvolvimento digital do país através de
                soluções tecnológicas de ponta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;