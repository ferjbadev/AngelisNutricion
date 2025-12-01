import { motion } from 'framer-motion';
import { Award, Heart, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Experiencia', value: '8+ años' },
    { icon: Heart, label: 'Clientes', value: '50+' },
    { icon: Zap, label: 'Transformaciones', value: '95%' },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:mb-4">Sobre Mí</h2>
          <p className="text-base sm:text-lg">
            Conoce mi historia y experiencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1 flex justify-center"
          >
                <img 
                  src="/foto2.png" 
                  alt="Angelis García - Nutricionista Profesional" 
                  className="w-64 sm:w-72 md:w-96 h-72 sm:h-80 md:h-full object-cover rounded-2xl shadow-xl max-w-full"
                />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-1 md:order-2"
          >
            <div>
              <h3 className="text-2xl text-center sm:text-3xl font-bold mb-3 md:mb-4">
                Hola, soy Angelis García
              </h3>
              <p className="text-sm sm:text-base text-center leading-relaxed mb-3 md:mb-4">
                Nutricionista con más de 10 años de experiencia en nutrición clínica y deportiva. Licenciada por la universidad de Luz y especializada en crear planes personalizados y sostenibles que se adaptan a tu estilo de vida, objetivos y necesidades individuales
              </p>
             
              <p className="text-sm sm:text-base text-center leading-relaxed">
                Mi compromiso es brindarte un acompañamiento profesional y basado en la ciencia para que alcances resultados duraderos
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-3 md:p-4 rounded-lg text-center"
                >
                  <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-primary-600 mx-auto mb-1 md:mb-2" />
                  <p className="text-lg md:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
