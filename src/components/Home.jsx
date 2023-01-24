import React, { useContext } from 'react';
import { products } from '../../data/products';
import CartContext from '../context/CartContext';
import { Products, Filtered } from '../components/index'

const Home = () => {
  const { searchTerm } = useContext(CartContext);
  const filteredProducts = products.filter(product => product?.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return searchTerm.length > 0 ? <Filtered data={filteredProducts} /> : <Products />
}

export default Home