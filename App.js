import React from 'react'
import Navigetor from './src/Navigation/Router'
import { Provider } from 'react-redux'
import store from './src/Store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigetor />
    </Provider>
  )
}

export default App
