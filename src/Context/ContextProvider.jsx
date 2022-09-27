import React, { createContext, useState } from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {

  const [details, setDetails] = useState('')
  const [loading, setLoading] = useState(true)

  const data = {
    details,
    setDetails,
    loading,
    setLoading
  }

  return (
    <Context.Provider value={data} >{children}</Context.Provider>
  )
}

export {ContextProvider, Context}