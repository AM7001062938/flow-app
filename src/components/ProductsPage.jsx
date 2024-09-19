import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import CustomSelect from './CustomSelect';
import images from '../images';
import productsData from '../data/productsData'; 

const ProductsPage = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.categories); 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: '',
    vendor: '',
    popularity: ''
  });
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    const fetchProducts = () => {
      try {
        const category = categories.find(cat => cat.id === parseInt(categoryId));
        if (category) {
          setCategoryTitle(productsData[`category${categoryId}`]?.title || 'Products');
          const categoryProducts = productsData[`category${categoryId}`]?.items || [];
          setProducts(categoryProducts);
          setFilteredProducts(categoryProducts);
        } else {
          setError('Category not found.');
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, categories]);

  useEffect(() => {
    let filtered = [...products];

    if (filters.priceRange) {
      filtered = filtered.sort((a, b) =>
        filters.priceRange === 'low'
          ? parseFloat(a.price) - parseFloat(b.price)
          : parseFloat(b.price) - parseFloat(a.price)
      );
    }

    if (filters.vendor) {
      filtered = filtered.filter(p => p.store.toLowerCase().includes(filters.vendor.toLowerCase()));
    }

    if (filters.popularity) {
      filtered = filtered.sort((a, b) =>
        filters.popularity === 'high'
          ? b.rating - a.rating
          : a.rating - b.rating
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#F5F2F7] px-4 py-1 h-full">
      {/* Title and filters */}
      <div className="flex justify-between mb-4">
        <h2 className="font-poppinsSemiBold text-[1rem]">{categoryTitle}</h2>
        <div className="flex gap-3">
          <div className="bg-[#B3C1C521] px-4 flex gap-2 items-center rounded-xl border border-[#00000030] font-poppinsMedium text-[0.88rem] cursor-pointer">
            <img src={images.filter} alt="filter" className="w-[20px]" />
            <span>Filter</span>
          </div>
          <CustomSelect
            bg={"#B3C1C521"}
            radius={"10px"}
            placeholder={"Category"}
            onChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
          />
          <CustomSelect
            bg={"#B3C1C521"}
            radius={"10px"}
            placeholder={"Vendors"}
            onChange={(value) => setFilters(prev => ({ ...prev, vendor: value }))}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 w-full max-h-[70vh] overflow-y-auto">
        <div className="flex">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className=" basis-[14rem] flex-shrink-0" key={product.id}>
                <ProductCard product={product} showOffer={product.offer !== ''} />
              </div>
            ))
          ) : (
            <div>No products found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
