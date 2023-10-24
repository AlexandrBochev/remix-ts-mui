import { ImageList, ImageListItem, Skeleton } from "@mui/material"

const Loading = () => {
  return (
    <ImageList cols={4} gap={16}>
      {
        Array.from({ length: 20 }).map((_, i) => (
          <ImageListItem key={i}>
            <Skeleton animation='wave' variant="rectangular" width={280} height={280} />
          </ImageListItem>
        ))
      }
    </ImageList>
  )
}

export { Loading }