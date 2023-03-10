import React, { useContext } from 'react';
import { products } from '../../data/products';
import CartContext from '../context/CartContext';
import { Products, Filtered } from '../components/index';
import useDebounce from '../hooks/useDebounce';


const Home = () => {
  const { searchTerm } = useContext(CartContext);
  const debounceTerm = useDebounce(searchTerm, 300)
  const filteredProducts = products.filter(product => product?.name.toLowerCase().includes(debounceTerm.toLowerCase()));
  return debounceTerm.length > 0 ? <Filtered data={filteredProducts} /> : <Products />
}

export default Home