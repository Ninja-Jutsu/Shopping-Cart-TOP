import React from 'react'

export const ItemsContext = React.createContext()

function ItemsProvider({ children }) {
  const [numOfItems, setNumOfItems] = React.useState(0)
  const [items, setItems] = React.useState([])

  return (
    <ItemsContext.Provider
      value={{ numOfItems, items, setNumOfItems, setItems }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider
