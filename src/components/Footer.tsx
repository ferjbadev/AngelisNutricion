import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center space-x-2 mb-3 md:mb-4 md:justify-start justify-center">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">MN</span>
              </div>
              <span className="font-bold text-lg md:text-xl">MundoNutri</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Transformando vidas a través de la nutrición personalizada. Tu
              salud es nuestra prioridad.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contacto</h3>
            <div className="space-y-2 md:space-y-3">
              <a
                href="tel:+584127896105"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400 hover:text-primary-400 transition-colors md:justify-start justify-center"
              >
                <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span>+58 412-789-6105</span>
              </a>
              <a
                href="mailto:angelis@mundonutri.com"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400 hover:text-primary-400 transition-colors md:justify-start justify-center"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span className="truncate">angelis@mundonutri.com</span>
              </a>
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400 md:justify-start justify-center">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span>Venezuela</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Enlaces Rápidos</h3>
            <div className="space-y-1 md:space-y-2">
              {['Inicio', 'Sobre Mí', 'Servicios', 'Agendar', 'Contacto'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="block text-xs md:text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-6 md:py-8">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            {/* Social Links */}
            <div className="flex gap-2 md:gap-4 justify-center">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 md:w-10 h-8 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 md:w-5 h-4 md:h-5" />
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/584127896105"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 md:w-10 h-8 md:h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
              </motion.a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-xs md:text-sm text-center">
              © {currentYear} MundoNutri. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
