import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import axios from "axios";
import FeedPokemon from '../components/FeedPokemon/FeedPokemon';

const url = "https://pokeapi.co/api/v2/pokemon?limit=104"

const useStyles = makeStyles((theme) => ({
	slideContainer: {
		marginTop: "-94px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "0px",
		}
	}
}));

const pokemonPage = props => {
	const classes = useStyles();
	const [dataPokemon, setDataPokemon] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await axios.get(url)
			const promises = [];
			response.data.results.forEach(result => {
				promises.push(axios.get(result.url))
			});
			const responseData = await Promise.all(promises);
			const sendPropData = responseData.map((item) => {
				return {
					data: item.data
				}
			})
			setDataPokemon(sendPropData)
			setIsLoading(false)
		}
		fetchPokemon()
	}, [])

	return (
		<Grid container spacing={2}
			direction="column"
			justify="center"
			alignItems="center">
			<Grid className={classes.containerTitle}>
				<Typography variant="h3" gutterBottom> Test Fetch API</Typography>
			</Grid>
			<Grid container spacing={2}>
				<FeedPokemon data={dataPokemon} isLoading={isLoading} />
				<Grid container spacing={2}>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default pokemonPage
