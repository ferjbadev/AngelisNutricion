import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'consulta-inicial',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear mensaje de WhatsApp
    const message = `Hola Angelis, me gustaría agendar una cita:
    
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Fecha: ${formData.date}
Hora: ${formData.time}
Servicio: ${formData.service}
Mensaje: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/584127896105?text=${encodedMessage}`,
      '_blank'
    );

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: 'consulta-inicial',
      message: '',
    });
  };

const timeSlots = [
  '9 AM',
  '10 AM', 
  '11 AM', 
  '12 PM', 
  '1 PM', 
  '2 PM',
  '3 PM', 
  '4 PM', 
  '5 PM', 
];


  return (
    <section id="booking" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-2 md:mb-4">Agendar Cita</h2>
          <p className="text-base sm:text-lg ">
            Reserva tu consulta de nutrición hoy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-xs md:text-sm font-semibold  mb-1 md:mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs md:text-sm font-semibold  mb-1 md:mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs md:text-sm font-semibold  mb-1 md:mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="+58 412-789-6105"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs md:text-sm font-semibold  mb-1 md:mb-2">
                Tipo de Servicio
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              >
                <option value="consulta-inicial">
                  Consulta Inicial
                </option>
                <option value="seguimiento">Seguimiento</option>
                <option value="plan-personalizado">
                  Plan Personalizado
                </option>
                <option value="coaching-habitos">
                  Coaching de Hábitos
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs md:text-sm font-semibold  mb-1 md:mb-2">
                Mensaje Adicional
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="Cuéntame sobre tus objetivos de salud..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full text-sm md:text-base py-2 md:py-3"
            >
              Agendar por WhatsApp
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-5 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl text-center font-bold  mb-4 md:mb-6">
                Información de Citas
              </h3>

              <div className="space-y-4 md:space-y-6">
                {/* Duration */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base  mb-1">
                      Duración
                    </h4>
                    <p className="text-xs md:text-sm ">
                      Las consultas tienen una duración de 60 minutos
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base  mb-1">
                      Modalidad
                    </h4>
                    <p className="text-xs md:text-sm ">
                      Consultas presenciales y virtuales disponibles
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base  mb-1">
                      Disponibilidad
                    </h4>
                    <p className="text-xs md:text-sm ">
                      Lunes a viernes, 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base  mb-1">
                      Consulta Inicial
                    </h4>
                    <p className="text-xs md:text-sm ">
                      Contacta para conocer nuestros precios y promociones
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <h4 className="font-semibold text-center text-sm md:text-base  mb-3 md:mb-4">
                Horarios Disponibles
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-1.5 md:py-2 px-2 md:px-4 text-xs md:text-sm bg-gray-100 hover:bg-primary-600 hover:text-white  rounded-lg font-medium transition-colors"
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
