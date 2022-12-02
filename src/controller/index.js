const service = require('../service/multaService')

module.exports = {
  cadastrar: async (req, res) => {
    let json = { error: '', result: {} }
    const dados = req.body

    try {
      let idMulta = await service.cadastrar(dados)
      json.result = { id: idMulta, dados }
    } catch {
      json.error = '❌ Informe todos os dados necessários para o cadastro!'
    }
    res.json(json)
  },

  listarTodos: async (req, res) => {
    const multas = await service.listarTodos()
    res.json(multas)
  },

  visualizar: async (req, res) => {
    const json = { error: '', result: {} }

    const id = req.params.id

    try {
      let multa = await service.visualizar(id)
      json.result = multa
    } catch {
      json.error =
        '❌ Não foi possível acessar este registro no momento, tente novamente.'
    }

    res.json(json)
  },

  buscarPorStatus: async (req, res) => {
    const statusMulta = req.params.statusMulta
    const multa = await service.buscarPorStatus(statusMulta)
    res.json(multa)
  },

  atualizar: async (req, res) => {
    let json = { error: '', result: {} }

    const id = req.params.id
    const dados = req.body

    try {
      let multa = await service.atualizar(id, dados)
      json.result = { id, dados }
    } catch {
      json.error =
        '❌ Não foi possível alterar este registro no momento, tente novamente.'
    }
    res.json(json)
  },

  inativar: async (req, res) => {
    const json = { error: '', result: {} }

    const id = req.params.id

    try {
      await service.inativar(id)
    } catch {
      json.error =
        '❌ Não foi possível inativar esse registro, tente novamente.'
    }
    res.json(json)
  },
}
