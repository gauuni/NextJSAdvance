import React from 'react'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'

import { decrement, increment } from '@/lib/features/counter/counterSlice'


const Counter = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <p>Counter number {count}</p>
      <button
        style={{ width: "88px", padding: "8px", margin: "8px" }}
        onClick={() => {
          dispatch(increment())
        }}>
        Cộng
      </button>
      <button
        style={{ width: "88px", padding: "8px", margin: "8px" }}
        onClick={() => {
          dispatch(decrement())
        }}>
        Trừ
      </button>
    </>
  )
}

export default Counter
