import React, { createContext, useReducer } from 'react'

const userInitialState = { user: null, marks: [] }
const store = createContext(userInitialState)
const { Provider } = store

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'setUser':
                return { ...state, user: action.payload }
            case 'setWorkMarks':
                return { ...state, marks: action.payload }
            case 'insertWorkMark':
                return { ...state, marks: [...state.marks, action.payload] }
            default: 
            throw new Error(`Ação desconhecida: ${action.type}`)
        }
    }, userInitialState)

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { store, UserProvider }


