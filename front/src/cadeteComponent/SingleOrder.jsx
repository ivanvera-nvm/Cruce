import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { singleOrder } from "../state/orders";
import { useSelector, useDispatch } from "react-redux";
import { orderState } from "../state/orders";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
  },
});

export default function SingleOrder({ match }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(singleOrder(match));
  }, []);

  const Entregado = (id, state) => {
    const state2 = { id: id, state: state };
    dispatch(orderState(state2));
  };

  const DevueltoAsuc = (id, state) => {
    const state2 = { id: id, state: state };
    dispatch(orderState(state2));
  };

  const Cancelado = (id, state) => {
    const state2 = { id: id, state: state };
    dispatch(orderState(state2));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.274812272798!2d-68.84847478505935!3d-32.890901676398016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09c0d5fed751%3A0x859ef7231006759c!2sMITRE%20870!5e0!3m2!1ses-419!2sar!4v1617304827229!5m2!1ses-419!2sar"
          width="100%"
          height="70%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        ;
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {orders.orderNumber}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {orders.productName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {orders.clientName + " " + orders.clientLastName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {orders.street +
              " " +
              orders.number +
              " " +
              (orders.complement ? orders.complement : "")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => Entregado(orders.id, "Entregado")}
        >
          ENTREGADO
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => DevueltoAsuc(orders.id, "Devuelto a sucursal")}
        >
          DEVUELTO A SUCURSAL
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => Cancelado(orders.id, "Pendiente")}
        >
          CANCELAR
        </Button>
      </CardActions>
    </Card>
  );
}
