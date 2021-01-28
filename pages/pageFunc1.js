import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { data } from '../src/exam-data';
import { Grid } from '@material-ui/core';

export default function pageFunc1() {
	const _ = require('lodash');
	const dataFilterOne = data.filter((items) => items.is_editable_price === false)

	const arrData = dataFilterOne.map((result) => {
		return result.products
	})

	const name = dataFilterOne.map((result) => {
		return result.name
	})

	const weight = arrData.map((result) => {
		let sum = result => result.reduce((x, y) => x + y);
		let totalAmount = sum(result.map(x => Number(x.weight)));
		return totalAmount
	})

	const resultObg = name.map(value => ({ name: value }));
	const weightObj = weight.map(value => ({ totalSubProductWeight: value }));

	const returnedResult = _.merge(resultObg, weightObj)
	const show = JSON.stringify(returnedResult)
	return (
		<Fragment>
			<Grid container
				direction="column"
				justify="center"
				alignItems="center">
				<Typography variant="h4">Result</Typography>
				<Typography>{show}</Typography>
			</Grid>
		</Fragment>
	);
}