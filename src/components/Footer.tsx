import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Redes sociales mejor organizadas
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/tu.mundonutri/',
      label: 'Facebook',
      hoverClass: 'hover:bg-[#1877F2]', // Azul Facebook
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/tu.mundonutri/',
      label: 'Instagram',
      hoverClass:
        'hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500', // Degradado Instagram
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-14">
          
          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">MN</span>
              </div>
              <span className="font-bold text-xl">MundoNutri</span>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">
              Transformando vidas a través de la nutrición personalizada.  
              Tu bienestar es nuestra prioridad.
            </p>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>

            <div className="space-y-3 text-white/90">
              <a
                href="tel:+584127896105"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors justify-center md:justify-start"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+58 412-789-6105</span>
              </a>

              <a
                href="mailto:angelis@mundonutri.com"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors justify-center md:justify-start"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">angelis@mundonutri.com</span>
              </a>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Venezuela</span>
              </div>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>

            <div className="space-y-2">
              {['Inicio', 'Sobre Mí', 'Servicios', 'Agendar', 'Contacto'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="block text-sm text-white/90 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 pt-6">
          <div className="flex flex-col items-center gap-6">
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 transition-all ${social.hoverClass}`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}

              {/* WHATSAPP */}
              <motion.a
                href="https://wa.me/584127896105"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-600 hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </motion.a>
            </div>

            {/* COPYRIGHT */}
            <p className="text-white/70 text-sm text-center">
              © {currentYear} MundoNutri — Todos los derechos reservados.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
