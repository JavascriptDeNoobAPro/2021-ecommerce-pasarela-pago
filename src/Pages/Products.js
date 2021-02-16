import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline } from "@material-ui/core";
import products from "../product-data";
import Product from "../components/Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Products = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Products;
