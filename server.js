const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "comunidade"
});

app.post("/api/doacoes", (req, res) => {
    const { nome, item, quantidade, contato } = req.body;
    db.query("INSERT INTO doacoes (nome, item, quantidade, contato) VALUES (?, ?, ?, ?)",
        [nome, item, quantidade, contato],
        (err) => {
            if (err) return res.json({ mensagem: "Erro ao cadastrar" });
            res.json({ mensagem: "Doação cadastrada com sucesso!" });
        }
    );
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
