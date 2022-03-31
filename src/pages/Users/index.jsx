import React from 'react'
import withProtect from '../../utils/withProtect'

function Users() {
  return (
    <div>Users</div>
  )
}

export default withProtect(Users, true)