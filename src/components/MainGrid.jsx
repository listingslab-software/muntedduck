import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Grid,
    Button,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card: {
	},
	cardActions: {
		width: '100%',
		textAlign: 'right',
	},
}))

export default function MainGrid() {
	
	const classes = useStyles()

	return	<React.Fragment>
				<Grid container>
					<Grid item xs={6}>
						<Card className={clsx(classes.none)}>
							<CardHeader 
								title={`Card One`}
								subheader={`subheader`}
								avatar={<Icon icon={`food`} color={`primary`}/>}
							/>
							<CardContent>
								content
							</CardContent>
							<CardActions>
								<div className={clsx(classes.cardActions)}>
									<Button
										variant={`contained`}
										color={`primary`}
										onClick={(e) => {
											e.preventDefault()
										}}>
										Click me
									</Button>
								</div>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card className={clsx(classes.none)}>
							<CardHeader 
								title={`Card Two`}
								subheader={`This will be...`}
								avatar={<Icon icon={`food`} color={`primary`}/>}
							/>
							<CardContent>
								content
							</CardContent>
							<CardActions>
								<div className={clsx(classes.cardActions)}>
									<Button
										variant={`contained`}
										color={`primary`}
										onClick={(e) => {
											e.preventDefault()
										}}>
										Click me
									</Button>
								</div>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</React.Fragment>
}

