import { createStore   } from '@reduxjs/toolkit'
import { accountReducer } from './reducer'

const store = createStore(accountReducer)

export default store