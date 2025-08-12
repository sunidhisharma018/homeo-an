import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, Filter } from 'lucide-react';
import { knowledgeHubCategories, expandedBlogPosts } from '../data/mockData';
import { motion } from 'framer-motion';

const KnowledgeHubPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = expandedBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = expandedBlogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Knowledge Hub</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your comprehensive resource for health information, natural remedies, and wellness insights 
              from our expert homeopathic practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles, health topics, or conditions..."
                className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-lg"
              />
              <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === ''
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              All Topics
            </button>
            {knowledgeHubCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {knowledgeHubCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 text-white">
                      <h3 className="font-bold text-sm">{category.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium text-sm">{category.articleCount} articles</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Article */}
        {!searchTerm && !selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">By {featuredPost.author}</span>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-heading">
              {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
            </h2>
            <span className="text-gray-600">{filteredPosts.length} articles found</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or browse different categories</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
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
          )}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Stay Informed</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest health insights, natural remedies, 
            and wellness tips delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-xl border-0 focus:outline-none text-gray-900"
            />
            <button className="bg-primary-800 hover:bg-primary-900 px-8 py-4 rounded-r-xl font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KnowledgeHubPage;