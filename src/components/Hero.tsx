import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 pt-20 pb-10 md:pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 md:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transforma tu <span className="text-primary-600">Salud</span> con
              <span className="text-primary-500"> Nutrición</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-center sm:text-lg md:text-xl leading-relaxed"
            >
              Nutricionista profesional, te ayudaré a alcanzar tus objetivos de salud con un plan personalizado basado en tus necesidades.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
            >
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base py-2 md:py-3 px-4 md:px-6"
              >
                Agendar Cita <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </motion.a>

              <motion.a
                href="https://wa.me/584127896105?text=Hola%20Angelis,%20me%20gustaría%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 text-sm md:text-base py-2 md:py-3 px-4 md:px-6"
              >
                <MessageCircle className="w-4 md:w-5 h-4 md:h-5" /> WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center order-1 md:order-2 mb-6 md:mb-0"
          >
              <img 
                src="/foto.png" 
                alt="Angelis García - Nutricionista Profesional" 
                className="w-64 sm:w-72 md:w-96 h-72 sm:h-80 md:h-full object-cover rounded-2xl shadow-xl max-w-full"
              />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
