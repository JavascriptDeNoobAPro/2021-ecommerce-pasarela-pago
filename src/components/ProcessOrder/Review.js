import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText primary={product.name} secondary={`Qty : ${1}`} />
            <Typography variant='body2'>
              {accounting.formatMoney(product.price, "€")}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
            {accounting.formatMoney(getBasketTotal(basket), "€")}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
