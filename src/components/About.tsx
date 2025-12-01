import { motion } from 'framer-motion';
import { Award, Heart, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Experiencia', value: '8+ años' },
    { icon: Heart, label: 'Clientes', value: '500+' },
    { icon: Zap, label: 'Transformaciones', value: '95%' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Conoce mi historia y experiencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl p-8 shadow-lg">
                <img 
                  src="/foto2.png" 
                  alt="Angelis García - Nutricionista Profesional" 
                  className="w-full h-full object-cover"
                />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Hola, soy Angelis García
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nutricionista con más de 10 años de experiencia en nutrición clínica y deportiva. Licenciada por la universidad de Luz y especializada en crear planes personalizados y sostenibles que se adaptan a tu estilo de vida, objetivos y necesidades individuales
              </p>
             
              <p className="text-gray-600 leading-relaxed">
                Mi compromiso es brindarte un acompañamiento profesional y basado en la ciencia para que alcances resultados duraderos
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
