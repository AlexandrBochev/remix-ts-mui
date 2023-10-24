import type { MetaFunction } from "@remix-run/node"
import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useGetData } from "../hooks/useGetData"
import { Link } from "@remix-run/react"

interface CommentsType {
  isLoading: boolean,
  data: {
    id: number
    name: string
  }[]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Comments | Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function CommentsPage() {
  const { data, isLoading } = useGetData("comments?_limit=20") as CommentsType
  const comments = data

  return (
    <>
      <Typography variant='h4' gutterBottom>Comments</Typography>
      {isLoading ? ('Loading...') : (
        <List>
          {comments.map(comment => (
            <ListItem key={ comment.id } component={ Link } to={`/comments/${comment.id}`}>
              <ListItemText primary={ comment.name } />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}