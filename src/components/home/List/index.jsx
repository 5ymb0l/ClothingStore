import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Box} from '@material-ui/core';
import React from 'react';
import Cart from '../cart';

const List = ({ product }) => 
    (
  <Box sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
     {product.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia 
                    style={{ height: 0, paddingTop: '100%', 
                    backgroundColor: "0A2647" 
                  }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography sx={{
                    
                       backgroundColor: "0A2647" 
                    }}gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" component="p">
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Cart products={product}/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
  </Box>
);
                

export default List;