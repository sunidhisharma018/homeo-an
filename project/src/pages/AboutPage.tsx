import React from 'react';
import { Heart, Award, Users, Clock, Leaf, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Award, label: 'Years of Excellence', value: '15+' },
    { icon: Heart, label: 'Products Available', value: '500+' },
    { icon: Clock, label: 'Expert Doctors', value: '25+' }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: 'We believe in the power of nature to heal and restore balance to the body, mind, and spirit.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product is carefully tested and certified to ensure the highest standards of purity and potency.'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Our approach centers on understanding each individual\'s unique needs and providing personalized solutions.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our team of certified homeopathic practitioners brings decades of combined experience to your wellness journey.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Wilson',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '15+ years in constitutional homeopathy and chronic disease management.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Senior Homeopath',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Specializes in pediatric care and family wellness with 12 years of experience.'
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Women\'s Health Specialist',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in women\'s health and hormonal balance with 10 years of practice.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About HomeoVital</h1>
            <p className="text-xl leading-relaxed text-emerald-100">
              For over 15 years, we've been dedicated to bringing the healing power of homeopathy 
              to families worldwide. Our mission is to provide natural, safe, and effective 
              wellness solutions that honor the body's innate ability to heal itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HomeoVital was founded in 2009 with a simple yet powerful vision: to make 
                  high-quality homeopathic remedies accessible to everyone seeking natural 
                  healing solutions. What started as a small practice has grown into a trusted 
                  wellness platform serving thousands of families.
                </p>
                <p>
                  Our founders, Dr. Sarah Wilson and Dr. Michael Chen, combined their decades 
                  of experience in classical homeopathy to create a comprehensive approach to 
                  natural wellness. They believed that true healing comes from treating the 
                  whole person, not just the symptoms.
                </p>
                <p>
                  Today, HomeoVital continues to uphold these founding principles while 
                  embracing modern technology to bring personalized homeopathic care to your 
                  doorstep. We're proud to be part of your wellness journey.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from selecting the finest remedies 
              to providing compassionate care for every individual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of certified homeopathic practitioners is dedicated to providing 
              you with the highest quality care and guidance on your wellness journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed text-emerald-100 mb-8">
              "To empower individuals and families with safe, natural, and effective 
              homeopathic solutions that promote holistic wellness and support the body's 
              innate healing wisdom. We are committed to making quality homeopathic care 
              accessible, affordable, and personalized for everyone."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/consultation"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Start Your Wellness Journey
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Explore Our Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;