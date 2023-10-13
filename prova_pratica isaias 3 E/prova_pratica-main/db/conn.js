const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: '3333', // É opcional.
  user: 'aluno_medio',
  password: '@lunoSenai23.',
  database: 'thoughts_system',
})

// É necessário exporta esse modulo