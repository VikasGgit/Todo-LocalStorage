import React from 'react'
import Todo from './Components/Todo'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

const App = () => {
  return (
    <>
    <Provider store={Store}>
    <Todo/>
    </Provider>
    </>
  )
}

export default App