import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Clock, Star, GraduationCap, ArrowRight } from 'lucide-react';
import { teamMembers } from '../data/mockData';
import { motion } from 'framer-motion';

const TeamMemberPage: React.FC = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Team member not found</h2>
          <Link
            to="/team"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Team</span>
          </Link>
        </div>
      </div>
    );
  }

  const otherMembers = teamMembers.filter(m => m.id !== member.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link
            to="/team"
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Team</span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              {member.name}
            </h1>
            <p className="text-xl text-white/90 mb-4">{member.designation}</p>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{member.experience} experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>{member.specialization}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Biography */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {member.name.split(' ')[1]}</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {member.fullBio.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements & Recognition</h3>
                <div className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                  <span>Education & Qualifications</span>
                </h3>
                <div className="space-y-3">
                  {member.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 text-sm">Specialization:</span>
                  <p className="font-semibold text-gray-900">{member.specialization}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Experience:</span>
                  <p className="font-semibold text-gray-900">{member.experience}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Patient Rating:</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">5.0</span>
                  </div>
                </div>
              </div>

              <Link
                to="/consultation"
                className="w-full mt-6 bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Have questions about {member.name.split(' ')[1]}'s specialization or want to learn more about their approach?
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Clinic:</strong> Home-En-Live Wellness Center</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Email:</strong> info@home-en-live.com</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Other Team Members */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Meet Other Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherMembers.map((otherMember) => (
              <Link
                key={otherMember.id}
                to={`/team/${otherMember.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={otherMember.image}
                  alt={otherMember.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {otherMember.name}
                  </h3>
                  <p className="text-primary-600 text-sm font-medium mb-2">{otherMember.designation}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {otherMember.shortBio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TeamMemberPage;