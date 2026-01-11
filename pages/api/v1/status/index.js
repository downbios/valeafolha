import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 2 + 2 as sum;");
  console.log(result.rows);
  res.status(200).json({ chave: "valor" });
}

export default status;
