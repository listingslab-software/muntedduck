import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Avatar,
    IconButton,
} from '@material-ui/core/'
import { 
    useSelector,
} from 'react-redux'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card: {
		background: theme.palette.primary.main,
		margin: theme.spacing(),
		color: 'black',
	},
	cardActions: {
		width: '100%',
		textAlign: 'right',
	},
}))

export default function User() {
	
	const classes = useStyles()
	const appSlice = useSelector(state => state.app)
	const {
		locale,
	} = appSlice
	const {
		country_name,
	} = locale


	return	<React.Fragment>
				<IconButton
					color={`secondary`}
					onClick={(e) => {
						e.preventDefault()
					}}>
					<Icon icon={`manager`} color={`primary`}/>
				</IconButton>
			</React.Fragment>
}

