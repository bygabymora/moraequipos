const mongoose = require('mongoose');

const pageViewSchema = new mongoose.Schema({
  pageName: { type: String, required: true },
  views: { type: Number, default: 0 },
});

module.exports =
  mongoose.models.PageView || mongoose.model('PageView', pageViewSchema);
