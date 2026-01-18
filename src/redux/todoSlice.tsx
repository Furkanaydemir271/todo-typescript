import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoType } from '../types/todo'

const savedData = localStorage.getItem("myTodos");

const initialState: TodoType[] = savedData ? JSON.parse(savedData) : [];

export const todoSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {

            if (action.payload.trim() === "") {
                alert("lütfen bir todo giriniz")
                return
            }

            const newTodo: TodoType = {
                id: Math.random() * 9999999999,
                todo: action.payload
            }
            state.push(newTodo)
            localStorage.setItem("myTodos", JSON.stringify(state));
        },
        removeSingleTodo: (state, action: PayloadAction<number>) => {
            const filteredTodos = state.filter((todo) => todo.id !== action.payload)

            localStorage.setItem("myTodos", JSON.stringify(filteredTodos));
            return filteredTodos
        }

    }
})

export const { addTodo, removeSingleTodo } = todoSlice.actions

export default todoSlice.reducer
