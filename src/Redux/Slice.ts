import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 2,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        decrement: (state): void => {
            state.value -= 1
        },
        increment: (state): void => {
            state.value += 1
        }
    }

})

export const { increment, decrement } = counterSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer