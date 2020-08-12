const store = {
  bugs: ['Centipede'],
  addBug: (bug) => {
    store.bugs.push(bug);
  },
  get bugsCount(){
    return store.bugs.length;
  }
}
export default store;