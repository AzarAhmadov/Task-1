import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = [
    {
        pageName: 'about',
        key: "getContact",
    },
    {
        pageName: 'contact',
        key: "getContact",
    },
    {
        pageName: 'galary',
        key: "getAbout",
    }
]

export const ActionSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        getAbout: () => {
            alert('About')
        },
        getContact: () => {
            alert('Contact')
        },
        getGalary: () => {
            alert('Galary')
        }
    }
})

export const { getAbout, getContact, getGalary } = ActionSlice.actions

export const getMyActions = () => useSelector((state) => state.actions)

export default ActionSlice.reducer
