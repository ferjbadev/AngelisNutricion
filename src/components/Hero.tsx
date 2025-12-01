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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transforma tu <span className="text-primary-600">Salud</span> con
              <span className="text-primary-500"> Nutrición</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Hola, soy <span className="font-semibold text-primary-600">Angelis García</span>, nutricionista profesional. Te ayudaré a alcanzar tus objetivos de salud con un plan personalizado basado en tus necesidades.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Agendar Cita <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://wa.me/584127896105?text=Hola%20Angelis,%20me%20gustaría%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Reemplaza este div con tu imagen */}
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-6xl mb-4">👩‍⚕️</div>
                  <p className="text-gray-600 font-semibold">Angelis García</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Nutricionista Profesional
                  </p>
                  <p className="text-xs text-gray-400 mt-4 max-w-xs">
                    Copia tu foto a public/angelis.jpg y reemplaza este div con:
                    &lt;img src="/angelis.jpg" alt="Angelis" className="w-full h-full object-cover" /&gt;
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
