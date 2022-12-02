const db = require('../database')

module.exports = {
  cadastrar: dados => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'INSERT INTO multas (created_at, codigo_multa, tipo_infracao, veiculo, placa, valor_multa, quantidade_pontos, motorista_responsavel, status_multa, registrado_por, ativo) VALUES (CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
        [
          dados.codigoMulta,
          dados.tipoInfracao,
          dados.veiculo,
          dados.placa,
          dados.valorMulta,
          dados.quantidadePontos,
          dados.motoristaResponsavel,
          dados.statusMulta,
          dados.registradoPor,
        ],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        },
      )
    })
  },

  listarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'SELECT * FROM multas m WHERE m.ativo = TRUE',
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        },
      )
    })
  },
  buscarPorStatus: statusMulta => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'SELECT * FROM multas WHERE status_multa = ? AND ativo = TRUE',
        [statusMulta],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        },
      )
    })
  },

  visualizar: id => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'SELECT * FROM multas m WHERE m.id_multa = ? AND m.ativo = TRUE',
        [id],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        },
      )
    })
  },


  atualizar: (id, dados) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'UPDATE multas SET codigo_multa = COALESCE(?, codigo_multa), tipo_infracao = COALESCE(?, tipo_infracao), veiculo = COALESCE(?, veiculo), placa = COALESCE(?, placa), valor_multa = COALESCE(?, valor_multa), quantidade_pontos = COALESCE(?, quantidade_pontos), motorista_responsavel = COALESCE(?, motorista_responsavel), status_multa = COALESCE(?, status_multa) WHERE id_multa = ?',
        [
          dados.codigoMulta,
          dados.tipoInfracao,
          dados.veiculo,
          dados.placa,
          dados.valorMulta,
          dados.quantidadePontos,
          dados.motoristaResponsavel,
          dados.statusMulta,
          id,
        ],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        },
      )
    })
  },

  inativar: id => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'UPDATE multas SET ativo = FALSE WHERE id_multa = ?',
        [id],
        (error, results) => {
          if (error) {
            rejeitado(error)
            return
          }
          aceito(results)
        },
      )
    })
  },
}
