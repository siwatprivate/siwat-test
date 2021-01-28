import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Header from "../Header"
import { Container } from '@material-ui/core';

const styles = (theme) => ({
	main: {
		flex: "1 1 auto",
		maxWidth: "1280px",
		marginLeft: "auto",
		marginRight: "auto"
	},
	container:{
		marginTop:"60px"
	}
});

class Layout extends Component {
	render() {
		const {classes, children} = this.props 

		return (
			<React.Fragment>
				<div >
					<Header/>
					<Container maxWidth="lg" className={classes.container}>
					<main className={classes.main}>
						{children}
					</main>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Layout);