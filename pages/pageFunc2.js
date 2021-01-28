import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

var moment = require('moment');

export default function pageFunc2() {

	// Date Data
	const date = "2020-08-10T14:54:52+07:00"

	// Date year A.D. - 24 hours clock 
	const dateOne = moment(date).format('DD/MM/YYYY') + moment(date).format(' kk:mm')

	// Date year A.D. - 24 hours clock
	const yearsThai = moment(date).add(543, 'years');
	const dateThai = moment(yearsThai).locale('th').format('LL')

	// Days in month
	const totalDaysInMonth = moment(date).daysInMonth();

	// Quarter from date
	const dateQuarter = moment(date).quarter()

	// Unix timestamp
	const unicStamp = moment(date).unix()

	return (
		<Fragment>
			<Grid container
				direction="column"
				justify="center"
				alignItems="center">
				<Typography variant="h4">Result</Typography>
				<Typography>{dateOne}</Typography>
				<Typography>{dateThai}</Typography>
				<Typography>{totalDaysInMonth}</Typography>
				<Typography>{dateQuarter}</Typography>
				<Typography>{unicStamp}</Typography>
			</Grid>
		</Fragment>
	);
}