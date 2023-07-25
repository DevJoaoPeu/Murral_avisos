module.exports = {
  mural: [],

  getAll() {
    return this.mural;
  },

  newPosts(title, description) {
    this.mural.push({ id: this.generateId(), title, description });
  },

  generateId() {
    return Math.random().toString(36);
  },

  deletePosts(index) {
    this.mural.splice(index, 1);
  },
};
