import React, { useContext, useEffect } from 'react';
import { products } from '../../data/products';
import CartContext from '../context/CartContext';
import { Products, Filtered } from '../components/index';
import useDebounce from '../hooks/useDebounce';

const Home = () => {
  const { searchTerm } = useContext(CartContext);
  const debounceTerm = useDebounce(searchTerm.value, 300);
  const filteredProducts = products.filter(product => product?.name.toLowerCase().includes(debounceTerm.toLowerCase()));
  useEffect(() => {
    searchTerm.value = '';
  }, []);

  return searchTerm.value.length > 0 ? <Filtered data={filteredProducts} /> : <Products />
}

export default Home