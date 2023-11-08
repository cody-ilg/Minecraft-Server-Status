import { useState, useEffect } from 'react'

import { getRockets } from '../apiClient.ts'
import Rockets from './Rockets.tsx'

function App() {
  return (
    <>
      <div className="landing">
        <Rockets />
      </div>
    </>
  )
}

export default App
