import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag, Share2, Heart } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { motion } from 'framer-motion';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-4 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-white/80">
              <User className="w-5 h-5" />
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-gray-600 mb-8">
                    {post.excerpt}
                  </p>
                  
                  <h2>Understanding Homeopathic Potencies</h2>
                  <p>
                    Homeopathy is based on the principle of "like cures like" and uses highly diluted 
                    substances to stimulate the body's natural healing response. The potency of a 
                    homeopathic remedy refers to the number of times it has been diluted and succussed 
                    (vigorously shaken).
                  </p>

                  <p>
                    There are several potency scales used in homeopathy, with the most common being 
                    the decimal (X or D), centesimal (C), and 50-millesimal (LM or Q) scales. 
                    Each scale represents a different dilution ratio and method of preparation.
                  </p>

                  <h3>Decimal Potencies (X or D)</h3>
                  <p>
                    In decimal potencies, the original substance is diluted 1:10 at each step. 
                    For example, 6X means the substance has been diluted 1:10 six times, resulting 
                    in a dilution of 1 part medicine to 1,000,000 parts water.
                  </p>

                  <h3>Centesimal Potencies (C)</h3>
                  <p>
                    Centesimal potencies involve a 1:100 dilution at each step. A 30C potency means 
                    the substance has been diluted 1:100 thirty times. These are the most commonly 
                    used potencies in classical homeopathy.
                  </p>

                  <h3>Choosing the Right Potency</h3>
                  <p>
                    The selection of potency depends on various factors including the patient's 
                    constitution, the nature of the ailment, and the practitioner's experience. 
                    Lower potencies (6X, 12X, 6C, 12C) are often used for acute conditions and 
                    physical symptoms, while higher potencies (200C, 1M) are typically reserved 
                    for chronic conditions and mental/emotional symptoms.
                  </p>

                  <blockquote>
                    <p>
                      "The highest ideal of cure is the rapid, gentle, and permanent restoration 
                      of health by the most trustworthy and least harmful way." - Samuel Hahnemann, 
                      founder of homeopathy
                    </p>
                  </blockquote>

                  <p>
                    It's important to consult with a qualified homeopathic practitioner who can 
                    assess your individual case and recommend the most appropriate remedy and potency 
                    for your specific needs.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Homeopathy
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Potencies
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Natural Healing
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Alternative Medicine
                      </span>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Senior homeopathic practitioner with over 15 years of experience in natural healing.
                  </p>
                  <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Follow
                  </button>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    to="/products"
                    className="block text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Shop Homeopathic Remedies
                  </Link>
                  <Link
                    to="/consultation"
                    className="block text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    to="/clinics"
                    className="block text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Find a Clinic
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <span className="text-sm text-emerald-600 font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-2 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;