import React, { useState } from 'react';
import {useObserver, useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ['Centipede'],
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount(){
      return store.bugs.length;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

const BugsHeader = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
  <h1> {store.bugsCount} Bugs!!</h1>
  ));
}

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => <li key={bug}> {bug} </li>)}
    </ul>
  ));
}

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = useState('');

  return (<form onSubmit={e => {
    store.addBug(bug);
    setBug('');
    e.preventDefault();
  }}>
    <input type="text" value={bug} placeholder='Enter Bug!!' onChange={e => setBug(e.target.value)} />
    <button type="submit">Add</button>
  </form>)
}

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}

export default App;
