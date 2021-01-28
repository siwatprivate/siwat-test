import React, { Fragment, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import SimpleSchema from "simpl-schema";
import { useReactoForm, muiOptions } from "reacto-form";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import {
	CardMedia,
	Container,
	Typography,
	Grid,
	TextField,
} from "@material-ui/core";

const formSchema = new SimpleSchema({
	firstName: {
		type: String,
		min: 4,
		max: 15,
	},
	lastName: {
		type: String,
		min: 4,
		max: 15,
	},
	email: {
		type: String,
		min: 4,
		regEx: SimpleSchema.RegEx.Email,
	},
	password: {
		type: String,
		min: 8,
	},
	verifypassword: {
		type: String,
		min: 8,
		custom() {
			if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		},
	},
	gender: {
		type: String,
		required: true,
		allowedValues: ['male', 'female', 'nongender']
	}
});
const validator = formSchema.getFormValidator();

//Style
const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(4),
		backgroundColor: "#d5d5d5",
		color: "#000",
		padding: theme.spacing(6),
		borderRadius: "4px",
	},
	root: {
		marginTop: "16px",
		backgroundColor: "#fff",
		borderRadius: "4px",
	},
	root2: {
		margin: "16px",
		backgroundColor: "#fff",
		borderRadius: "4px",
	},
	textfield: {
		width: "100%",
		backgroundColor: "#fff"
	},
	formControl: {
		width: "100%"
	}
}));

export default function Menu() {
	const classes = useStyles();
	const [obgData, setObgData] = React.useState([])
	const [gender, setGender] = React.useState('');
	const [isShowing,setIsShowing] = React.useState(false);

	const handleChange = (event) => {
		setGender(event.target.value);
	};
	// Validation submmit
	const {
		getFirstErrorMessage,
		getInputProps,
		hasErrors,
		submitForm,
	} = useReactoForm({
		logErrorsOnSubmit: true,
		// onChange: (val) => {
		// 	console.log("onChangeForm", val);
		// },
		// onChanging: (val) => {
		// 	console.log("onChangingForm", val);
		// },
		onSubmit: (formData) => {
			// console.log("onSubmitForm", formData);
			setObgData(formData)
			setIsShowing(true)
		},
		validator,
		isReadOnly: false,
	});

	return (
		<Grid container direction="row" justify="center" alignItems="center">
			<Grid item xs={8} className={classes.container}>
				<Typography variant="h5" style={{ textAlign: "center" }}>Test form and validate inputs</Typography>
				<Grid item container
					direction="row"
					justify="center"
					alignItems="center"
					style={{ marginTop: 10 }}>
					<Grid item xs>
						<Typography variant="body">Firstname</Typography></Grid>
					<Grid item xs={9}>
						<TextField
							id="standard-basic"
							className={classes.textfield}
							variant="filled"
							label="Please fill firstname"
							size="small"
							error={hasErrors(["firstName"])}
							helperText={getFirstErrorMessage(["firstName"])}
							{...getInputProps("firstName", muiOptions)}
						/></Grid>
				</Grid>
				<Grid item container
					direction="row"
					justify="center"
					alignItems="center"
					style={{ marginTop: 10 }}>
					<Grid item xs>
						<Typography variant="body">LastName</Typography></Grid>
					<Grid item xs={9}>
						<TextField
							className={classes.textfield}
							type="tel"
							name="lastName"
							variant="filled"
							label="Please fill last name"
							size="small"
							error={hasErrors(["lastName"])}
							helperText={getFirstErrorMessage(["lastName"])}
							{...getInputProps("lastName", muiOptions)}
						/>
					</Grid>
				</Grid>
				<Grid item container
					direction="row"
					justify="center"
					alignItems="center"
					style={{ marginTop: 10 }}>
					<Grid item xs>
						<Typography variant="body">E-mail</Typography></Grid>
					<Grid item xs={9}>
						<TextField
							className={classes.textfield}
							variant="filled"
							label="Please fill e-mail"
							size="small"
							error={hasErrors(["email"])}
							helperText={getFirstErrorMessage(["email"])}
							{...getInputProps("email", muiOptions)}
						/>
					</Grid>
				</Grid>
				<Grid item container
					direction="row"
					justify="center"
					alignItems="center"
					style={{ marginTop: 10 }}>
					<Grid item xs>
						<Typography variant="body">Password</Typography></Grid>
					<Grid item xs={9}>
						<TextField
							className={classes.textfield}
							type="password"
							name="lastName"
							variant="filled"
							label="Please fill password"
							size="small"
							error={hasErrors(["password"])}
							helperText={getFirstErrorMessage(["password"])}
							{...getInputProps("password", muiOptions)}
						/>
					</Grid>
				</Grid>
				<Grid item container
					direction="row"
					justify="center"
					alignItems="center"
					style={{ marginTop: 10 }}>
					<Grid item xs>
						<Typography variant="body">Verify Password</Typography></Grid>
					<Grid item xs={9}>
						<TextField
							className={classes.textfield}
							type="password"
							name="lastName"
							variant="filled"
							label="Please fill verify password"
							size="small"
							error={hasErrors(["verifypassword"])}
							helperText={getFirstErrorMessage(["verifypassword"])}
							{...getInputProps("verifypassword", muiOptions)}
						/>
					</Grid>
				</Grid>
				<Grid item container
					direction="row"
					justify="center"
					alignItems="center"
					style={{ marginTop: 10 }}>
					<Grid item xs>
						<Typography variant="body">Gender</Typography></Grid>
					<Grid item xs={9}>
						<FormControl className={classes.formControl} {...getInputProps("gender", muiOptions)}>
							<InputLabel htmlFor="age-native-simple">Please select Gender</InputLabel>
							<Select
								value={gender}
								onChange={handleChange}
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="nongender">Non gender</option>
							</Select>
							<FormHelperText style={{ color: "red" }}>{getFirstErrorMessage(["gender"])}</FormHelperText>
						</FormControl>
						{/* <FormControl className={classes.formControl}
							{...getInputProps("gender", muiOptions)}
						>
							<InputLabel htmlFor="age-native-simple">Please select Gender</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange}
								inputProps={{
									name: 'gender',
									id: 'age-native-simple',
								}}
							>
								<option aria-label="None" value="" />
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="nongender">Non gender</option>
							</Select>
							<FormHelperText style={{ color: "red" }}>{getFirstErrorMessage(["gender"])}</FormHelperText>
						</FormControl> */}
					</Grid>
				</Grid>
				<Button
				color="primary"
					variant="contained"
					style={{ marginTop: "14px", width: "100%" }}
					onClick={submitForm}
				>
					Submit
              </Button>
				{isShowing ?
					<Grid style={{ marginTop: 20 }}>
						<Typography variant="h6">Result: </Typography>
						<Typography variant="body2">{obgData.firstName}</Typography>
						<Typography variant="body2">{obgData.lastName}</Typography>
						<Typography variant="body2">{obgData.email}</Typography>
						<Typography variant="body2">{obgData.gender}</Typography>
					</Grid>
					:
					<div></div>}
			</Grid>
		</Grid>
	);
}
