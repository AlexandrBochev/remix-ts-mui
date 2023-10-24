import type { MetaFunction } from "@remix-run/node"
import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useGetData } from "../hooks/useGetData"
import { Link } from "@remix-run/react"

interface UsersType {
  isLoading: boolean,
  data: {
    id: number
    name: string
    email: string
  }[]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Users | Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function UsersPage() {
  const { data, isLoading } = useGetData('users') as UsersType
  const users = data

  return (
    <>
      <Typography variant='h4' gutterBottom>Users</Typography>
      {isLoading ? ('Loading...') : (
        <List>
          {users.map(user => (
            <ListItem key={ user.id } component={ Link } to={`/users/${user.id}`}>
              <ListItemText primary={ user.name } secondary={ user.email } />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}