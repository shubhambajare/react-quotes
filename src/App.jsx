import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { QuoteList } from './components/QuoteList'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Categories } from './components/Categories'

function App() {

  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Categories />
        <QuoteList />
      </Provider>
    </>
  )
}

export default App