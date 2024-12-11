import { useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()

  // Example data for user validation
  const users = {
    1: 'Alice',
    2: 'Bob',
    3: 'Charlie',
  }

  const userName = users[id]

  return (
    <div>
      {userName ? (
        <h1>User Details for {userName}</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  )
}

export default UserDetails
