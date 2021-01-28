import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	paperContainer: {
		width: "100%",
		color: "#888888",
	},
})

class FeedPokemon extends Component {
	render() {
		const { classes: { paperContainer } } = this.props
		const dataLoop = this.props.data.map((result) => {
			return result.data
		})
		const isLoading = this.props.isLoading

		return (
			<Grid container spacing={2}>
				{(isLoading ? Array.from(new Array(104)) : dataLoop).map((item, index) => (
					<Grid key={index} item xs={2} container direction="column"
						justify="center"
						alignItems="center">
						{item ? (
							<Grid item>
								<img
									src={item.sprites.front_default}
								/>
							</Grid>
						) : (
								<Skeleton variant="rect" width="80%" height={96} />
							)}
						{item ? (
							<Grid item style={{ width: "100%" }} >
								<Paper elevation={0} className={{ paperContainer }}>
									<Typography style={{ textAlign: "center" }}>{item.name}</Typography>
								</Paper>
							</Grid>
						) : (
								<Skeleton variant="rect" width="70%" height={20} style={{ marginTop: 10 }} />
							)}
					</Grid>
				))
				}
			</Grid >
		);
	}
}

FeedPokemon.propTypes = {
	data: PropTypes.array.isRequired,
	isLoading: PropTypes.bool
};

export default withStyles(styles)(FeedPokemon);