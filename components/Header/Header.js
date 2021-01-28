import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from "next/link";

const useStyles = makeStyles({
	container: {
		height: 60,
		width: "100%",
		backgroundColor: "#d5d5d5"
	}
})

const navigate = [
	{ name: "Home", linkHref: "/" },
	{ name: "Pokemon", linkHref: "/pokemonPage"},
	{ name: "Function1", linkHref: "/pageFunc1"},
	{ name: "Function2", linkHref: "/pageFunc2"},
	{ name: "Function3", linkHref: "/pageFunc3"}
]

const Header = props => {
	const classes = useStyles();
	return (
		<Grid container
			direction="row"
			justify="center"
			alignItems="center" className={classes.container}>
			{navigate.map((data, index) => (
				<Fragment key={index}>
					<Box pr={2} pl={2}>
						<Link href={data.linkHref}>
						<Button size="small" >
							{data.name}
						</Button>
						</Link>
					</Box>
				</Fragment>
			))}
		</Grid>
	);
};

Header.propTypes = {

};

export default Header;