import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Award, Shield, Truck, HeartHandshake, Users, Clock, UserCheck, Heart, Play, ArrowRight, CheckCircle, TrendingUp, Leaf } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories, blogPosts, whyChooseUsPoints, testimonials, services } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

// Icon mapping for dynamic rendering
const iconMap = {
  UserCheck,
  Clock,
  Users,
  Heart,
  Shield,
  Award,
  Leaf
};

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Your Health, Our Priority',
      subtitle: 'Experience the gentle power of homeopathy with expert care and personalized treatment plans',
      image: 'https://images.pexels.com/photos/3683083/pexels-photo-3683083.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Book Consultation',
      link: '/consultation',
      secondaryCta: 'Shop Products',
      secondaryLink: '/products'
    },
    {
      id: 2,
      title: 'Expert Doctors, Proven Results',
      subtitle: 'Consult with certified homeopathic practitioners who have helped thousands heal naturally',
      image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Meet Our Doctors',
      link: '/team',
      secondaryCta: 'Book Now',
      secondaryLink: '/consultation'
    },
    {
      id: 3,
      title: 'Premium Natural Remedies',
      subtitle: 'Discover our extensive range of FDA-approved homeopathic medicines with free shipping',
      image: 'https://images.pexels.com/photos/4099271/pexels-photo-4099271.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Shop Now',
      link: '/products',
      secondaryCta: 'Learn More',
      secondaryLink: '/about'
    }
  ];

  const featuredProducts = mockProducts.filter(product => product.isFeatured);
  const bestSellers = mockProducts.filter(product => product.isBestSeller);
  const saleProducts = mockProducts.filter(product => product.isOnSale);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-6 font-heading"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <Link
                    to={heroSlides[currentSlide].link}
                    className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span>{heroSlides[currentSlide].cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  {heroSlides[currentSlide].secondaryCta && (
                    <Link
                      to={heroSlides[currentSlide].secondaryLink!}
                      className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                    >
                      <span>{heroSlides[currentSlide].secondaryCta}</span>
                    </Link>
                  )}
                </motion.div>
                
                {/* Trust Indicators */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 flex items-center justify-center space-x-8 text-white/80"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">FDA Approved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">50,000+ Patients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm">15+ Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Sale Promotion Banner */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-2"
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg font-bold">MEGA SALE</span>
            </motion.div>
            <span className="text-lg">Up to 50% OFF on Selected Products</span>
            <Link
              to="/products?sale=true"
              className="bg-white text-accent-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Why Choose Home-En-Live?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Experience the difference with our comprehensive approach to natural healing and wellness
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyChooseUsPoints.map((point, index) => {
        const IconComponent = iconMap[point.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
              {IconComponent ? (
                <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              ) : null}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Our Services</h2>
                <p className="text-xl text-gray-600">Comprehensive healthcare solutions tailored to your needs</p>
              </motion.div>
            </div>
            <Link
              to="/services"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">₹{service.price}</span>
                    <div className="flex space-x-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors text-sm"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/consultation"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 font-heading">What Our Patients Say</h2>
            <p className="text-xl text-primary-100">
              Real stories from real people who found healing through homeopathy
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white/20"
                  />
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].feedback}"
                  </blockquote>
                  <div>
                    <p className="text-lg font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-primary-200">{testimonials[currentTestimonial].condition}</p>
                    <p className="text-primary-300 text-sm">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sale Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-4"
              >
                <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                  SALE
                </div>
                <h2 className="text-4xl font-bold text-gray-900 font-heading">Limited Time Offers</h2>
              </motion.div>
              <p className="text-xl text-gray-600">Don't miss out on these amazing deals</p>
            </div>
            <Link
              to="/products?sale=true"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All Offers</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {saleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Featured Remedies</h2>
              <p className="text-xl text-gray-600">Our most recommended products for optimal wellness</p>
            </div>
            <Link
              to="/products"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find the right remedy for your specific health needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-200">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 font-heading">Ready to Start Your Healing Journey?</h2>
              <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
                Book a consultation with our certified homeopathic doctors and discover personalized natural solutions for your health concerns
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/consultation"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Book Online Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/clinics"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
                >
                  Find Clinic Near You
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Best Sellers</h2>
            <p className="text-xl text-gray-600">Most trusted remedies by our customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl font-bold text-primary-600">50,000+</div>
              <div className="text-gray-600 text-lg">Happy Customers</div>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600 text-lg">Premium Products</div>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl font-bold text-primary-600">25+</div>
              <div className="text-gray-600 text-lg">Expert Doctors</div>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600 text-lg">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Health & Wellness Blog</h2>
              <p className="text-xl text-gray-600">Expert insights and natural health tips from our doctors</p>
            </div>
            <Link
              to="/knowledge-hub"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Read More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;