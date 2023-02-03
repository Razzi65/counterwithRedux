import counterslice from './counterslice'

import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {
    counterslice
  }

})

export default store