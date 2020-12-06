const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2020-12-06' });

const filmsTable = process.env.tableName;
// Crear un response
function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
};
function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else return 1;
};
//consultando data
exports.getAllFilms = (event, context, callback) => {
  return db
    .scan({
      TableName: filmsTable
    })
    .promise()
    .then((res) => {
      callback(null, response(200, res.Items.sort(sortByDate)));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));
};

//insertando data
exports.createFilm = (event, context, callback) => {
  const reqBody = JSON.parse(event.body);

  if (
    !reqBody.title ||
    reqBody.title.trim() === '' ||
    !reqBody.body ||
    reqBody.body.trim() === ''
  ) {
    return callback(
      null,
      response(400, {
        error: 'Post must have a title and body and they must not be empty'
      })
    );
  }

  const film = {
    id: uuid(),
    titulo: reqBody.title,
    descripcion: reqBody.body
  };

  return db
    .put({
      TableName: filmsTable,
      Item: film
    })
    .promise()
    .then(() => {
      callback(null, response(201, film));
    })
    .catch((err) => response(null, response(err.statusCode, err)));
};