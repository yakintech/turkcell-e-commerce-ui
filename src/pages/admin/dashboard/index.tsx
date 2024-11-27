import React from 'react'
import { queryClient } from '../../..'

function Dashboard() {

  const clearCache = () => {
    queryClient.invalidateQueries({
      queryKey: ['products']
    })
  }

  return <>
    <h1>Dashboard</h1>
    <button onClick={() => clearCache()}>Clear Cache</button>
  </>
}

export default Dashboard