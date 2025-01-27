const { Order, Product, User, Cadeteria } = require("../models");

const NewOrderController = {
  newOrder(req, res, next) {
    const orders = req.body.items;
    orders.map((order) => {
      /*  Order.findOrCreate({
          where: {
            orderNumber: order.Order,
          },
          defaults: {
            clientName: order["Client Name"],
            clientLastName: order["Client Last Name"],
            productName: order["SKU Name"],
            productSku: order["ID_SKU"],
            creationDate: order["Creation Date"],
            orderNumber: order.Order,
            province: order["UF"],
            city: order.City,
            street: order.Street,
            number: order.Number,
            complement: order.Complement,
          },
        });
 */
      Product.create({
        productName: order["SKU Name"],
        productSku: order["ID_SKU"],
        orderNumber: order.Order,
      });
    });
    let ids = [];
    let newOrders = [];
    orders.map((order) => {
      if (!ids.includes(order.Order)) {
        newOrders.push(order);
        ids.push(order.Order);
      }
    });
    let lastOrders = [];
    newOrders.map((order) => {
      Order.create({
        clientName: order["Client Name"],
        clientLastName: order["Client Last Name"],
        creationDate: order["Creation Date"],
        orderNumber: order.Order,
        province: order["UF"],
        clientPhone: order.Phone,
        city: order.City,
        street: order.Street,
        number: order.Number,
        complement: order.Complement,
      }).then((order) => lastOrders.push(order));
    });

    res.status(200).send(lastOrders);
  },

  async allOrders(req, res) {
    try {
      const orders = await Order.findAll();
      res.send(orders);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  /*  async allOrders(req, res) {
    let list = {};
    let ord = [];
    try {
      const orders = await Order.findAll();
      orders.map((order) => {
        if (!order.userId) list[order.orderNumber] = true;
      });

      for (id in list) {
        const ordy = await Order.findOne({
          where: { orderNumber: id },
        });
        ord.push(ordy);
      }
      res.send(ord);
    } catch (e) {
      res.send(e);
    }
  }, */

  async findOrderById(req, res) {
    const id = req.params.id;
    try {
      const order = await Order.findByPk(id);
      res.send(order);
    } catch (e) {
      res.send(e);
    }
  },

  changeStateOrders(req, res) {
    const orderNumber = req.params.id;
    const status = req.body.status;
    const cadeteId = req.body.cadeteId;
    console.log(orderNumber, "ACA ESTA LA ORDER NUMBER");
    console.log(status, "ACA ESTA EL ESTADO");
    console.log(cadeteId, "ACA ES EL ID DEL CADETE");

    User.findByPk(cadeteId).then((cadete) => {
      Cadeteria.findByPk(cadete.cadeteriumId).then((cadeteria) => {
        Order.findOne({
          where: {
            orderNumber: orderNumber,
          },
        })
          .then((order) => {
            order
              .setUser(cadete)
              .then(order.setCadeterium(cadeteria))
              .then(order.update({ status: status }))
              .then((newOrders) => res.send(newOrders));
          })
          .catch((err) => console.log(err));
      });
    });
  },
};

/*  Order.findByPk(id).then((order) => {
            order
              .setUser(cadete)
              .then(() => {
                order.setCadeterium(cadeteria);
              })
              .then(() => {
                order
                  .update({
                    status: status,
                  })
                  .then((order) => {
                    res.send(order);
                  });
              });
          });
        });
      })
      .catch((e) => console.log(e));*/

module.exports = NewOrderController;
