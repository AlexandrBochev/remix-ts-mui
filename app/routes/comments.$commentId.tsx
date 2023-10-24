import type { MetaFunction } from "@remix-run/node"
import { useGetData } from "../hooks/useGetData"
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Link, useParams } from "@remix-run/react"

interface CommentType {
  name: string
  email: string
  body: string
}

const FiELDS = [
  { label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Comment', value: 'body' },
]

export const meta: MetaFunction = () => {
  return [
    { title: "Comment details | Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function CommentDetail() {
  const { commentId } = useParams()
  const { data, isLoading } = useGetData(`comments/${ commentId }`)
  const comment = data as CommentType

  return (
    <>
      <Typography variant='h4' gutterBottom>Comment</Typography>
      { isLoading && <Typography variant='h6' gutterBottom>Loading...</Typography> }
      {comment && (
        <Card>
          <CardContent>
            <List>
              {FiELDS.map(field => (
                <ListItem key={ field.value }>
                  <ListItemText primary={ field.label } secondary={ comment[field.value as keyof CommentType] } />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 2 }}>
        <Button component={ Link } variant='contained' color='primary' to='/comments'>Back to comments</Button>
      </Box>
    </>
  )
}