import { Box, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import PriceFilter from '../../components/common/PriceFilter';
import List from '../../components/home/List';
const Home = () => {
    const [products, setProducts] = useState([]); 
     
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('https://fakestoreapi.com/products/');
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);

    const handlePriceFilter = (sortOrder) => {
      if (sortOrder === 'lowToHigh') {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
      } else if (sortOrder === 'highToLow') {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
      }
    };
  return (
  <Box sx={{
    display : "flex",
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#0A2647",
    flexGrow : 1,
    width: "100%",
    minHeight: "100vh",
  }}> 
    <Grid container spacing={1}> 
    <Grid item xs={12} md={3}>
    <PriceFilter handlePriceFilter={handlePriceFilter} />
    </Grid>
    <Grid item xs={12} md={9}>
    <Grid container spacing={2}>
     <List product={products} />
    </Grid>
    </Grid>
    </Grid>
  </Box>
  )
}

export default Home