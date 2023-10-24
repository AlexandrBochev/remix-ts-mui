import type { MetaFunction } from "@remix-run/node"
import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useGetData } from "../hooks/useGetData"
import { Link } from "@remix-run/react"

interface PostsType {
  isLoading: boolean,
  data: {
    id: number
    title: string
  }[]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Posts | Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function PostsPage() {
  const { data, isLoading } = useGetData("posts?_limit=20") as PostsType
  const posts = data

  return (
    <>
      <Typography variant='h4' gutterBottom>Posts</Typography>
      {isLoading ? ('Loading...') : (
        <List>
          {posts.map(post => (
            <ListItem key={ post.id } component={ Link } to={`/posts/${post.id}`}>
              <ListItemText primary={ post.title } />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}