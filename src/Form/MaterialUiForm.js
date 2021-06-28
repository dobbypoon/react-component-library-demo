import { useState } from "react";

import { withStyles } from "@material-ui/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

function MaterialUiForm() {
	const autocompleteList = [
		{ title: "The Shawshank Redemption", year: 1994 },
		{ title: "The Godfather", year: 1972 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: "Pulp Fiction", year: 1994 },
	];

	// alternative: formik - formik-material-ui

	const [fields, setFields] = useState({ emailAddress: "example@email.com", checkbox: false });
	const [errors, setErrors] = useState(null);

	const handleChange = (value, field) => {
		let _fields = { ...fields };
		_fields[field] = value;
		setFields(_fields);
	};

	const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let _errors = {};
        if (!fields["emailAddress"]) {
            _errors["emailAddress"] = { text: "Email required" };
        }
        if (!fields["checkbox"]) {
            _errors["checkbox"] = true;
        }
        setErrors(_errors);
	};

	return (
		<div className="comparison-item-container">
			<div>MaterialUiForm</div>

			<form noValidate onSubmit={handleSubmit}>
				<div className="comparison-row">
					<TextField
                        required
                        type="email"
						error={errors?.emailAddress}
						id="outlined-helperText"
						label="Email address"
						value={fields["emailAddress"]}
                        defaultValue="example@email.com"
						onChange={(e) => handleChange(e.target.value, "emailAddress")}
						helperText={
							errors?.emailAddress?.text
								? errors.emailAddress.text
								: "We'll never share your email with anyone else."
						}
						variant="outlined"
					/>
				</div>

				<div className="comparison-row">
                    <FormControl required error={errors?.checkbox}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    required
                                    name="checkedA"
                                    value={fields["checkbox"]}
                                    onChange={(e) => handleChange(e.target.checked, "checkbox")}
                                />
                            }
                            label="Check me out"
                        />
                    </FormControl>
				</div>

				<div className="comparison-row">
					<FormControl variant="outlined">
						<InputLabel id="demo-simple-select-filled-label">Example select</InputLabel>
						<Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">
							<MenuItem value="">None</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={4}>4</MenuItem>
							<MenuItem value={5}>5</MenuItem>
						</Select>
					</FormControl>
				</div>

				<div className="comparison-row">
					<Slider aria-labelledby="continuous-slider" />
				</div>

				<div className="comparison-row">
					<TextField
						id="date"
						label="Birthday"
						type="date"
						defaultValue="2017-05-24"
						InputLabelProps={{ shrink: true }}
					/>
				</div>

				<div className="comparison-row">/</div>

				<div className="comparison-row">
					<Autocomplete
						id="combo-box-demo"
						options={autocompleteList}
						getOptionLabel={(option) => option.title}
						renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
					/>
				</div>

				<Button type="submit" variant="contained" className="m-2">
					Submit Material-UI
				</Button>
			</form>
		</div>
	);
}

export default MaterialUiForm;
