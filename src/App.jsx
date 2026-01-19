import { createContext, useState } from 'react'
import './App.css'
import { MyContextProvider } from './components/MyContext'
import MyRoutes from './MyRoutes'
// import MyButton from './components/MyButton'
// import { combineReducers, createStore } from 'redux'
// import counterReducer from './components/redux/counterReducer'
import { Provider } from 'react-redux'
// import personReducer from './components/redux/personReducer'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import { PersistGate } from 'redux-persist/integration/react'
import { store } from './components/Reducer/store'


export const MyThemeContext = createContext()

function App() {
  let [theme, setTheme] = useState('LIGHT')

  // let myStore = createStore(counterReducer)
  // let myStore = createStore(personReducer)

  // let rootReducer = combineReducers({
  //   counterStore: counterReducer,
  //   personStore: personReducer
  // })

  // const persistConfig = {
  //   key: 'root',
  //   storage,
  // }

  // const persistedReducer = persistReducer(persistConfig, rootReducer)

  // let myStore = createStore(rootReducer)
  // let myStore = createStore(persistedReducer)
  // let persistor = persistStore(myStore)


  return (
    <>
  
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}

          <MyThemeContext.Provider value={theme}>
            <MyContextProvider>
              <button className={`btn ${theme === 'LIGHT' ? 'btn-warning' : 'btn-accent'} fixed right-0 top-50`}
                onClick={() => {
                  setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')
                }}>
                {theme}
              </button>
              <MyRoutes />
            </MyContextProvider>
          </MyThemeContext.Provider>
        {/* </PersistGate> */}
      </Provider>

    </>
  )
}

export default App
