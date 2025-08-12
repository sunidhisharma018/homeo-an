import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { knowledgeHubCategories, expandedBlogPosts } from '../data/mockData';
import { motion } from 'framer-motion';

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const categoryInfo = knowledgeHubCategories.find(c => c.id === category);
  const categoryPosts = expandedBlogPosts.filter(post => post.categoryId === category);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h2>
          <Link
            to="/knowledge-hub"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Knowledge Hub</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Button */}
            <Link
              to="/knowledge-hub"
              className="inline-flex items-center space-x-2 text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Knowledge Hub</span>
            </Link>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                {categoryInfo.name}
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                {categoryInfo.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{categoryInfo.articleCount} articles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Articles Grid */}
        {categoryPosts.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">Articles for this category are coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

        {/* Related Categories */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Explore Other Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeHubCategories
              .filter(c => c.id !== category)
              .slice(0, 4)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  to={`/category/${relatedCategory.id}`}
                  className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={relatedCategory.image}
                      alt={relatedCategory.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 text-white">
                      <h3 className="font-bold text-sm">{relatedCategory.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{relatedCategory.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium text-sm">{relatedCategory.articleCount} articles</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CategoryPage;