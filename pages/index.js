import React, { Component } from 'react';
import Layout from "../components/Layout"
import { Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container } from '@material-ui/core';
import FormContainer from "../components/FormContainer"


const styles = (theme) => ({
	containerTwo: {
		backgroundColor: "#303030",
		color: "#fff",
		padding: "30px",
		borderRadius: "9px"
	}
})

class index extends Component {
	render() {

		const {
			classes: { containerTwo }
		} = this.props;

		return (
				<Container maxWidth="lg">
					<FormContainer/>
				</Container>
		);
	}
}


export default withStyles(styles)(index);