const createController = (Model) => ({
  getAll: async (req, res) => {
    try {
      const data = await Model.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const item = await Model.getById(req.params.id);
      if (!item) return res.status(404).json({ error: "Not found" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const newItem = await Model.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedItem = await Model.update(req.params.id, req.body);
      res.json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  remove: async (req, res) => {
    try {
      const result = await Model.remove(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
});

module.exports = createController;
