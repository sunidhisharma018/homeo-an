import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, User, Phone, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const ConsultationPage: React.FC = () => {
  const [consultationType, setConsultationType] = useState<'online' | 'clinic'>('online');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    age: '',
    gender: ''
  });

  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Wilson',
      specialization: 'Constitutional Treatment',
      experience: '15 years',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200',
      availability: ['10:00 AM', '2:00 PM', '4:00 PM'],
      onlineFee: 500,
      clinicFee: 800
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialization: 'Chronic Diseases',
      experience: '12 years',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200',
      availability: ['9:00 AM', '11:00 AM', '3:00 PM'],
      onlineFee: 600,
      clinicFee: 900
    },
    {
      id: '3',
      name: 'Dr. Emily Johnson',
      specialization: 'Pediatric Care',
      experience: '10 years',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200',
      availability: ['10:30 AM', '1:00 PM', '5:00 PM'],
      onlineFee: 450,
      clinicFee: 750
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const getDoctorPrice = (doctorId: string) => {
    const doctor = doctors.find(d => d.id === doctorId);
    return doctor ? (consultationType === 'online' ? doctor.onlineFee : doctor.clinicFee) : 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle consultation booking
    console.log('Booking consultation:', {
      type: consultationType,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
          <p className="text-xl text-gray-600">
            Connect with our certified homeopathic doctors for personalized care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Consultation Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Consultation Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`relative flex items-center space-x-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  consultationType === 'online' 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="consultationType"
                    value="online"
                    checked={consultationType === 'online'}
                    onChange={(e) => setConsultationType(e.target.value as 'online' | 'clinic')}
                    className="sr-only"
                  />
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Online Consultation</h4>
                    <p className="text-sm text-gray-600">Video call from comfort of your home</p>
                  </div>
                </label>

                <label className={`relative flex items-center space-x-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  consultationType === 'clinic' 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="consultationType"
                    value="clinic"
                    checked={consultationType === 'clinic'}
                    onChange={(e) => setConsultationType(e.target.value as 'online' | 'clinic')}
                    className="sr-only"
                  />
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Clinic Visit</h4>
                    <p className="text-sm text-gray-600">Visit our clinic for in-person consultation</p>
                  </div>
                </label>
              </div>
            </motion.div>

            {/* Doctor Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Doctor</h3>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <label
                    key={doctor.id}
                    className={`flex items-start space-x-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedDoctor === doctor.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="doctor"
                      value={doctor.id}
                      checked={selectedDoctor === doctor.id}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="sr-only"
                    />
                    
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                          <p className="text-sm text-emerald-600">{doctor.specialization}</p>
                          <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xs ${
                                  i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'
                                }`}>★</span>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {doctor.rating} ({doctor.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            ₹{consultationType === 'online' ? doctor.onlineFee : doctor.clinicFee}
                          </p>
                          <p className="text-sm text-gray-600">
                            {consultationType === 'online' ? 'Online' : 'In-Clinic'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Date & Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date & Time</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border transition-colors ${
                          selectedTime === time
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Patient Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Enter full name"
                        required
                      />
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Enter phone number"
                        required
                      />
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                      placeholder="Enter age"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Concern / Symptoms
                  </label>
                  <textarea
                    value={formData.concern}
                    onChange={(e) => setFormData({...formData, concern: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                    placeholder="Describe your health concerns or symptoms in detail..."
                    required
                  />
                </div>
              </form>
            </motion.div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 sticky top-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Booking Summary</h3>
              
              {selectedDoctor && (
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={doctors.find(d => d.id === selectedDoctor)?.image}
                      alt=""
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {doctors.find(d => d.id === selectedDoctor)?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {doctors.find(d => d.id === selectedDoctor)?.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        consultationType === 'online' ? 'bg-blue-500' : 'bg-green-500'
                      }`} />
                      <span className="capitalize">{consultationType} Consultation</span>
                    </div>

                    {selectedDate && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span>{new Date(selectedDate).toLocaleDateString()}</span>
                      </div>
                    )}

                    {selectedTime && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{selectedTime}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total Fee</span>
                      <span className="text-emerald-600">₹{getDoctorPrice(selectedDoctor)}</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedDoctor || !selectedDate || !selectedTime}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Book & Pay</span>
              </button>

              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-sm text-green-800 font-medium">Instant Confirmation</p>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  You'll receive booking confirmation via SMS & email
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;