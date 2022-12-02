# CRUD ‘Multas’

## A Proposta:

Para o trabalho final da disciplina de **Soluções para Internet**, acordou-se que os alunos iriam ficar responsáveis quanto à criação de APIs REST e seus respectivos CRUDs no âmbito de ****************Aluguel de Carros****************.

### O Projeto

Para este projeto, incumbiu-se a responsabilidade da criação do CRUD para Gestão de Multas, o qual abrange:

```json
"Cadastro",
"Listar Todos",
"Buscar por STATUS": "PENDENTE | PAGA", // Inicialmente pensado para ser um ENUM
"Visualizar Multa",
"Atualizar Multa",
"Inativar": "TRUE | FALSE"
```

A classe deverá conter os seguinte atributos:

```json
"codigoMulta",
"tipoInfracao",
"veiculo",
"placa",
"valorMulta",
"quantidadePontos",
"motoristaResponsavel",
"statusMulta",
"registradoPor"
```

### Testes

- Fora adicionado as migrations do banco no caminho: `.\API\src\database\mer\`
- Adicionou-se ao diretório raiz o arquivo das requisições pronto: `.\API\requisicoes-teste.json`
