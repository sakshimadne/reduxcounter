import { Link } from 'react-router-dom'

function Users() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Corrected the link path */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
