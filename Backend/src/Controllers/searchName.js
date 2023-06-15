const TechSchema = require("../Database/Models/Technology");

const Search = async (req, res) => {
    try {
      let { name } = req.query;
      if (name.length === 1) {
       return res.status(400).json({ message: "Debes incluir una nombre de busqueda" });
      }
      // Remover espacios en blanco al principio y al final
      name = name.trim();
      // Escapar caracteres especiales de la consulta
      name = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`.*${name}.*`, 'i');
      const products = await TechSchema.find({ name: { $regex: regex } });
      res.status(200).json({ result: products });
    } catch (error) {
      res.status(400).json({ message: "Error finding product" });
      console.error(error);
    }
  };
  module.exports = Search