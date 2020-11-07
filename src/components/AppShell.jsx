import React from 'react'
import clsx from 'clsx'
import {
  CssBaseline,
  makeStyles,
  useScrollTrigger,
  Zoom,
  Fab,
  Toolbar,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { 
  Header,
} from './'

const useStyles = makeStyles((theme) => ({
  appShell: {
    maxWidth: 800,
    margin: 'auto',
  },
}))



function ScrollTop(props) {

  const { children, window } = props
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.appShell}>
        {children}
      </div>
    </Zoom>
  )
}

export default function AppShell(props) {
  
  const classes = useStyles()
  // const theme = useTheme()

  return   <React.Fragment>
            <CssBaseline />
            <div className={clsx(classes.appShell)} >
              <Header />
              <Toolbar id={`back-to-top-anchor`} />
              <ScrollTop {...props}>
                <Fab 
                  color={`primary`} 
                  size={`large`} 
                  aria-label={`Scroll back to top`}>
                  <Icon icon={`parent`} color={`inherit`} />
                </Fab>
              </ScrollTop>
            </div>
          </React.Fragment>
}
