'use client'

import { Provider } from 'react-redux'

import { store } from '@/redux'

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider