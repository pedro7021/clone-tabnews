import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("select 1 + 1;");
  response.status(200).json({ mensagem: "hello world!!" });
  response;
}

export default status;
