import express from "express";
import {
  getInventor,
  getInventors,
  addInventor,
  deleteInventor,
  updateInventor,
  existeUsuario,
} from "../data/inventor.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const inventors = await getInventors();
  res.json(inventors);
});

router.get("/:id", async (req, res) => {
  const inventor = await getInventor(req.params.id);
  res.json(inventor);
});

router.post("/", async (req, res) => {
  try {
    const inventor = req.body;
    const result = await addInventor(inventor);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/ingreso", async (req, res) => {
  try {
    const usuario = req.body;
    const result = await existeUsuario(usuario);
    if (result === null) {
      throw new Error("Usuario no existe");
    }
    res.status(200).json(result);
  } catch (error) {
    if (error.message === "Usuario no existe") {
      res.status(401).json({ error: error.message });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
});

router.put("/", async (req, res) => {
  const inventor = req.body;
  const result = await updateInventor(inventor);
  res.json(result);
});

// router.delete("/:id", async (req, res) => {
//   const result = await deleteInventor(req.params.id);
//   res.json(result);
// });

router.delete("/", async (req, res) => {
  const result = await deleteInventor(req.body.id);
  res.json(result);
});

export default router;
