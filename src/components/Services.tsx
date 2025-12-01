import { motion } from 'framer-motion';
import {
  Apple,
  Dumbbell,
  TrendingUp,
  Users,
  BookOpen,
  Zap,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Apple,
      title: 'Planes Nutricionales',
      description:
        'Planes personalizados diseñados específicamente para tus objetivos y necesidades dietéticas.',
    },
    {
      icon: Dumbbell,
      title: 'Asesoramiento Fitness',
      description:
        'Combinación de nutrición y ejercicio para resultados óptimos en tu transformación.',
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento Continuo',
      description:
        'Monitoreo regular de tu progreso con ajustes en tu plan según sea necesario.',
    },
    {
      icon: Users,
      title: 'Consultas Grupales',
      description:
        'Sesiones en grupo para aprender juntos sobre nutrición y hábitos saludables.',
    },
    {
      icon: BookOpen,
      title: 'Educación Nutricional',
      description:
        'Aprende sobre nutrición, lectura de etiquetas y toma de decisiones alimentarias.',
    },
    {
      icon: Zap,
      title: 'Coaching de Hábitos',
      description:
        'Desarrollo de hábitos saludables sostenibles a largo plazo.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-primary-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">Mis Servicios</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Soluciones integrales para tu bienestar
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center mb-3 md:mb-4"
              >
                <service.icon className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
