import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from '@remix-run/react'

const HEADER_SX = {
  flexGrow: 1
}

const navigations = [
  { label: 'Photos', to: '/' },
  { label: 'Posts', to: 'posts' },
  { label: 'Comments', to: 'comments' },
  { label: 'Users', to: 'users' },
]

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={HEADER_SX}>
          Remix + TS + MUI
        </Typography>
        { navigations.map(({ label, to }) => (
          <Button key={label} color='inherit' component={ Link } to={to}>{label}</Button>
        )) }
      </Toolbar>
    </AppBar>
  )
}

export { Header }