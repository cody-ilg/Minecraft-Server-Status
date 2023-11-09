import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.js'
import { Players } from '../../models/serverData.js'
import '../../server/main.css'

export function IpForm(){
  return(
    <label>
    <input name='ipInput' />
    </label>
    <label>
      Bedrock server: <input type=
    </label>
  )
} 