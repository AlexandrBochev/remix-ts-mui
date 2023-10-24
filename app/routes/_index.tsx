import type { MetaFunction } from "@remix-run/node"
import { Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import { Loading } from "../components/Loaders/Loading"
import { useGetData } from "../hooks/useGetData"

interface PhotosType {
  isLoading: boolean,
  data: {
    albumId: number
    id: number
    title: string
    url: string 
    thumbnailUrl: string
  }[]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Photos | Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const { data, isLoading } = useGetData('photos?_limit=20') as PhotosType
  const photos = data

  return (
    <>
      <Typography variant='h4' gutterBottom>Photos</Typography>
      <Grid container spacing={2}>
        {isLoading ? (<Loading />) : (
          <ImageList cols={4} gap={16}>
            {photos.map(photo => (
              <ImageListItem key={ photo.id }>
                <img src={ photo.url } alt={ photo.title } width={280} height={280} />
                <ImageListItemBar title={ photo.title } />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Grid>
    </>
  )
}
