const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2020-12-06' });

const filmsTable = process.env.tableName;
console.log(filmsTable);

//consultando data
exports.getAllFilms = async event=>{
  var film= await db.scan({
    TableName: filmsTable,
  }).promise()
  return{statusCode:200,body:JSON.stringify(film)};
};

//insertando data
exports.createFilm=async event=>{
  var film = {
    id:event.id,
    titulo: event.titulo,
    descripcion: event.descripcion
  };
  await db.put({
      TableName: filmsTable,
      Item: film
  }).promise()
  return {statusCode:200,body:JSON.stringify(film)};
};