import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';
import { clinics } from '../data/mockData';
import { motion } from 'framer-motion';

const ClinicsPage: React.FC = () => {
  const [selectedClinic, setSelectedClinic] = useState<string | null>(null);

  const handleGetDirections = (clinic: any) => {
    const { lat, lng } = clinic.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Clinic Near You</h1>
          <p className="text-xl text-gray-600">
            Visit our certified homeopathic clinics for in-person consultations
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your location or pincode..."
              className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-lg"
            />
            <MapPin className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Clinic List */}
          <div className="space-y-6">
            {clinics.map((clinic, index) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedClinic === clinic.id ? 'ring-2 ring-emerald-500' : ''
                }`}
                onClick={() => setSelectedClinic(clinic.id)}
              >
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{clinic.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{clinic.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-gray-600">{clinic.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-gray-600">{clinic.hours}</p>
                    </div>
                  </div>

                  {/* Doctors */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Doctors</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.doctors.map((doctor) => (
                        <span
                          key={doctor}
                          className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full"
                        >
                          {doctor}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetDirections(clinic);
                      }}
                      className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>Get Directions</span>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = '/consultation';
                      }}
                      className="flex-1 border-2 border-emerald-600 text-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Clock className="w-5 h-5" />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:sticky lg:top-8 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 h-[600px] flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500">
                  Google Maps integration would be implemented here to show clinic locations
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Our Clinics */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl shadow-md p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our Clinics?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Certified homeopathic doctors with years of experience in natural healing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Locations</h3>
              <p className="text-gray-600">
                Multiple clinic locations across the city for easy accessibility
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Timings</h3>
              <p className="text-gray-600">
                Extended hours and weekend availability to fit your schedule
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ClinicsPage;