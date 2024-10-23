import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = [
    {
        pageName: '/about',
        actions: ['delete', 'edit']
    },
    {
        pageName: '/contact',
        actions: ['edit', 'view']
    },
    {
        pageName: '/galary',
        actions: ['put']
    }
]

export const ActionSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
    }
})

export const { getAbout, getContact, getGalary } = ActionSlice.actions

export const getMyActions = () => useSelector((state) => state.actions)

export default ActionSlice.reducer
