import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, Grid, List, Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories } from '../data/mockData';
import { Product } from '../contexts/AppContext';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedForms, setSelectedForms] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const brands = Array.from(new Set(mockProducts.map(p => p.brand)));
  const forms = Array.from(new Set(mockProducts.map(p => p.form)));
  const maxPrice = Math.max(...mockProducts.map(p => p.price));

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Form filter
    if (selectedForms.length > 0) {
      filtered = filtered.filter(product => selectedForms.includes(product.form));
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.isNew ? 1 : -1;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrands, priceRange, selectedForms, sortBy]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleFormToggle = (form: string) => {
    setSelectedForms(prev => 
      prev.includes(form) 
        ? prev.filter(f => f !== form)
        : [...prev, form]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedBrands([]);
    setPriceRange([0, maxPrice]);
    setSelectedForms([]);
    setSearchParams({});
  };

  const activeFiltersCount = 
    (searchTerm ? 1 : 0) +
    (selectedCategory ? 1 : 0) +
    selectedBrands.length +
    selectedForms.length +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <span className="cursor-pointer hover:text-emerald-600" onClick={() => navigate('/')}>
              Home
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Products</span>
            {selectedCategory && (
              <>
                <span className="mx-2">/</span>
                <span className="text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showMobileFilters ? 'fixed inset-0 z-50 bg-white' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              {/* Mobile Filter Header */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Search Products</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search remedies..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Categories</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value=""
                        checked={selectedCategory === ''}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3 text-emerald-600"
                      />
                      <span>All Categories</span>
                    </label>
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="mr-3 text-emerald-600"
                        />
                        <span>{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                {/* Brands */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Brands</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="mr-3 text-emerald-600 rounded"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Forms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Forms</label>
                  <div className="space-y-2">
                    {forms.map(form => (
                      <label key={form} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedForms.includes(form)}
                          onChange={() => handleFormToggle(form)}
                          className="mr-3 text-emerald-600 rounded"
                        />
                        <span>{form}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors"
                  >
                    Clear All Filters ({activeFiltersCount})
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedCategory 
                      ? categories.find(c => c.id === selectedCategory)?.name 
                      : 'All Products'
                    }
                  </h1>
                  <p className="text-gray-600">
                    {filteredProducts.length} products found
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    <span>Filters</span>
                    {activeFiltersCount > 0 && (
                      <span className="bg-emerald-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </button>

                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-white text-emerald-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-white text-emerald-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                  : 'space-y-4'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className={viewMode === 'list' ? 'flex' : ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;