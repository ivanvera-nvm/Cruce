const { User } = require("../models/index");
const jwt = require("jsonwebtoken");

const loginController = {
  post(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email,
      },
    })
      .then((usuario) => {
        if (!usuario) res.status(400).send("ingrese un email válido");
        if (!usuario.validatePassword(password))
          res.status(401).send("contraseña incorrecta");

        //aca generamos el token
        jwt.sign(
          {
            id: usuario.id,
            email: usuario.email, //payload que queremos usar en el front + clave secreta que se usa para generar token y para validar posteriormente
          },
          "P5",
          (
            err,
            token // token = header + payload + credencial
          ) => {
            res.json(token);
          }
        );
      })
      .catch(next);
  },
};

module.exports = loginController;
