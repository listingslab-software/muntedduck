import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
	Avatar,
    makeStyles,
    Card,
    CardHeader,
} from '@material-ui/core/'
import { SelectLang } from './'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card: {
		width: '100%',
	},
}))

export default function Welcome() {
	
	const classes = useStyles()
	// const theme = useTheme()
	const dispatch = useDispatch()
	const appSlice = useSelector(state => state.app)
	const {
		language,
		languageChoices,
		locale,
	} = appSlice
	const {
		country_name,
	} = locale
	const geoLang = locale.languages.substring(0,2)
    let choice = null
    for (let i=0; i<languageChoices.length; i++) {
      if (languageChoices[i].code === language){
        choice = languageChoices[i]
      }
    }

    React.useEffect(() => {
    	if (geoLang !== language){
			if (geoLang === 'fr')
			dispatch({type: `APP/LANGUAGE`, language: geoLang})
		}
	}, [dispatch, geoLang, language])


	return	<Card className={classes.card}>
				<CardHeader 
					title={`The Munted Duck`}
					subheader={`${country_name} ${choice.translation}`}
					avatar={<React.Fragment>
								<Avatar src={`/svg/muntedduckIcon.svg`} />
							</React.Fragment>}
					action={<React.Fragment>
								<SelectLang />
							</React.Fragment>}
					
				/>
			</Card>
}
















/*

<IconButton
  onClick={(e) => {
    e.preventDefault()
    window.open(`/`, `_self`)
  }}>
  <Avatar src={`/logo32.png`} />
</IconButton>

<pre>{ JSON.stringify(geoLang, null, 2) }</pre>
<Avatar 
	className={classes.image}
	src={`/svg/flags/${country_code2.toLowerCase()}.svg`}/> 
*/
