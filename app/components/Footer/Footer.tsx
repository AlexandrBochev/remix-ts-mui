import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box component='footer' width='100%' bgcolor='primary.main' color='white' textAlign='center' p={2}>
      <Typography variant='body1'>
        &copy; 2023 Remix + TypeScript + MUI
      </Typography>
    </Box>
  )
}

export { Footer }