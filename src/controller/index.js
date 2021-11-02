
const NewController =  {
    home(req, res) {
  try {
    const teste = home.find()
    res.status(200).json(teste)
  }
  catch (error) {
      res.sendError('Erro no banco de dados', 500);
  }
    },

    courses(req, res) {
        res.status(200).send({
            menssagem: 'Usando rota de Cursos'
        });
    },
    experience(req, res) {
        res.status(200).send({
            menssagem: 'Usando rota de Experiencia'
        });
    },
    portfolio(req, res) {
        res.status(200).send({
            menssagem: 'Usando rota de Portifolio'
        });
    },
    professional(req, res) {
        res.status(200).send({
            menssagem: 'Usando rota de Profissional'
        });
    },

}

module.exports = NewController;