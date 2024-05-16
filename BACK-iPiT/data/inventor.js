import { ObjectId } from "mongodb";
import getConnection from "./connection.js";

export async function getInventors() {
  const clientmongo = await getConnection();

  const inventors = await clientmongo
    .db("NOMBRE_DB")
    .collection("NOMBRE_COLECCION")
    .find()
    .toArray();

  return inventors;
}

export async function getInventor(id) {
  const clientmongo = await getConnection();

  const inventor = await clientmongo
    .db("NOMBRE_DB")
    .collection("NOMBRE_COLECCION")
    .findOne({ _id: new ObjectId(id) });

  return inventor;
}

export async function addInventor(inventor) {
  const clientmongo = await getConnection();
  let errors = [];
  // Define los atributos que debe tener un inventor
  const requiredAttributes = ['name', 'nationality', 'invention'];

  // Comprueba si el inventor tiene todos los atributos requeridos
  for (const attribute of requiredAttributes) {
    if (!inventor.hasOwnProperty(attribute)) {
       errors.push(`Falta el atributo requerido: ${attribute}`);
    }
  }

  // Comprueba si el inventor tiene atributos adicionales
  for (const attribute in inventor) {
    if (!requiredAttributes.includes(attribute)) {
      errors.push(`Atributo no permitido: ${attribute}`);
    }
  }

  if(errors.length > 0) {
    throw new Error(errors);
  }
    const result = await clientmongo
    .db("NOMBRE_DB")
    .collection("NOMBRE_COLECCION")
    .insertOne(inventor);

  return result;
}

export async function existeUsuario(usuario) {
  const clientmongo = await getConnection();
  const result = await clientmongo
    .db("NOMBRE_DB")
    .collection("NOMBRE_COLECCION")
    .findOne(usuario);
  return result;
}


export async function updateInventor(inventor) {
  const clientmongo = await getConnection();
  const query = { _id: new ObjectId(inventor._id) };
  const newValues = {
    $set: {
      first: inventor.first,
      last: inventor.last,
      year: inventor.year,
    },
  };

  const result = await clientmongo
    .db("NOMBRE_DB")
    .collection("NOMBRE_COLECCION")
    .updateOne(query, newValues);
  return result;
}

export async function deleteInventor(id) {
  const clientmongo = await getConnection();

  const result = await clientmongo
    .db("NOMBRE_DB")
    .collection("NOMBRE_COLECCION")
    .deleteOne({ _id: new ObjectId(id) });
  return result;
}
