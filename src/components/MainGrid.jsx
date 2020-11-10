import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    // CardContent,
    // CardActions,
    Grid,
    // Button,
    Typography,
} from '@material-ui/core/'
import { 
    useSelector,
} from 'react-redux'
// import { Icon } from '../theme'

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

export default function MainGrid() {
	
	const classes = useStyles()
	const appSlice = useSelector(state => state.app)
	const {
		locale,
	} = appSlice
	const {
		country_name,
	} = locale


	return	<React.Fragment>
				<Grid container>
					
					<Grid item xs={12} md={6}>
						<Card className={clsx(classes.card)}>
							<CardHeader 
								disableTypography
								title={<Typography variant={`body1`}>
											Buy Sensi Seeds
										</Typography>}
								subheader={<Typography variant={`body2`}>
											in {country_name}
										</Typography>}
								avatar={<Avatar 
											alt={`Click me`}
											src={`/png/logos/sensiseeds.png`}
										/>}
							/>
						</Card>
					</Grid>
				</Grid>
			</React.Fragment>
}

/*
<Grid item xs={12} md={6}>
						<Card className={clsx(classes.card)}>
							<CardHeader 
								disableTypography
								title={<Typography variant={`body1`}>WordPress</Typography>}
								subheader={<Typography variant={`body2`}>CMS</Typography>}
								avatar={<Icon icon={`food`} color={`secondary`}/>}
							/>
							<CardContent>
								content
							</CardContent>
							<CardActions>
								<div className={clsx(classes.cardActions)}>
									<Button
										variant={`contained`}
										color={`secondary`}
										onClick={(e) => {
											e.preventDefault()
										}}>
										Click me
									</Button>
								</div>
							</CardActions>
						</Card>
					</Grid>
*/