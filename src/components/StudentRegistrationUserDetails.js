import React, { useState } from 'react';
import {

    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Typography
} from '@mui/material';
//import { makeStyles } from '@mui/material/styles'
//import MuiAlert from '@material-ui/lab/Alert';
// import { DatePicker } from '@material-ui/pickers';
import { toast } from 'react-toastify';
// import { DesktopDatePicker } from '@mui/material/x-date-pickers/DesktopDatePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


//import DesktopDatePicker from '@mui/x-data-grid-pro/DatePicker';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     submitButton: {
//         marginTop: theme.spacing(3),
//     },
// }));

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default function StudentRegistrationUserDetails() {
    //const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [indexNumber, setIndexNumber] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const [telephone1, setTelephone1] = useState('');
    const [telephone2, setTelephone2] = useState('');
    const [references, setReferences] = useState('');
    const [faculty, setFaculty] = useState('');
    const [field, setField] = useState('');
    const [subSpecialty, setSubSpecialty] = useState('');
    const [year, setYear] = useState('');
    const [projects, setProjects] = useState('');

    const faculties = ['Faculty 1', 'Faculty 2', 'Faculty 3'];
    const fields = ['Field 1', 'Field 2', 'Field 3'];
    const subSpecialties = ['Sub-Specialty 1', 'Sub-Specialty 2', 'Sub-Specialty 3'];
    const years = ['2020', '2021', '2022', '2023'];


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleMiddleNameChange = (event) => {
        setMiddleName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleIndexNumberChange = (event) => {
        setIndexNumber(event.target.value);
    };

    const handleDobChange = (date) => {
        setDob(date);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleTelephone1Change = (event) => {
        setTelephone1(event.target.value);
    };

    const handleTelephone2Change = (event) => {
        setTelephone2(event.target.value);
    };

    const handleReferencesChange = (event) => {
        setReferences(event.target.value);
    };

    const handleFacultyChange = (event) => {
        setFaculty(event.target.value);
    };

    const handleFieldChange = (event) => {
        setField(event.target.value);
    };

    const handleSubSpecialtyChange = (event) => {
        setSubSpecialty(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleProjectsChange = (event) => {
        setProjects(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !firstName || !lastName ||
            !indexNumber ||
            !dob ||
            !gender ||
            !telephone1 ||
            !faculty ||
            !field ||
            !subSpecialty ||
            !year
        ) {
            //setOpen(true);
            // toast.success('Successfully registered!');
            toast.error('Please fill in all fields');
            return;

        }
        toast.success('Successfully registered!');
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setIndexNumber('');
        setDob(null);
        setGender('');
        setTelephone1('');
        setTelephone2('');
        setReferences('');
        setFaculty('');
        setField('');
        setSubSpecialty('');
        setYear('');
        setProjects('');
        return;
    };

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     //setOpen(false);
    // };

    return (
        <div>
            <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
                <Grid container spacing={1} >
                    <Grid item xs={12}  >
                        <Card sx={{ maxWidth: '75%', mt: 5, justifyItems: 'flex-end' }} >
                            <CardContent>
                                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="Black" gutterBottom>
                                    Step 2 : User Details
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    {/* <Typography sx={{ fontSize: 15, alignContent: 'left' }} color="Black" gutterBottom>
                                    Personal Info
                                </Typography> */}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                label="First Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={firstName}
                                                onChange={handleFirstNameChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                label="Middle Name"
                                                variant="outlined"
                                                fullWidth
                                                value={middleName}
                                                onChange={handleMiddleNameChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                label="Last Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={lastName}
                                                onChange={handleLastNameChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Index Number"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={indexNumber}
                                                onChange={handleIndexNumberChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Index Number"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={indexNumber}
                                                onChange={handleIndexNumberChange}
                                            />
                                            {/* <DatePicker
                            label="Date of Birth"
                            inputVariant="outlined"
                            fullWidth
                            required
                            format="dd/MM/yyyy"
                            value={dob}
                            onChange={handleDobChange}
                        /> */}
                                            {/* <DesktopDatePicker
                            label=" Date of Birth"
                            value={dob}
                            format="dd/MM/yyyy"
                            fullWidth
                            required
                            maxDate={new Date()}
                            onChange={handleDobChange}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl variant="outlined" fullWidth required>
                                                <InputLabel>Gender</InputLabel>
                                                <Select value={gender} onChange={handleGenderChange}>
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Telephone 1"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={telephone1}
                                                onChange={handleTelephone1Change}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Telephone 2"
                                                variant="outlined"
                                                fullWidth
                                                value={telephone2}
                                                onChange={handleTelephone2Change}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="References"
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                value={references}
                                                onChange={handleReferencesChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <FormControl variant="outlined" fullWidth required>
                                                <InputLabel>Faculty</InputLabel>
                                                <Select value={faculty} onChange={handleFacultyChange} >
                                                    {faculties.map((faculty) => (
                                                        <MenuItem key={faculty} value={faculty}>
                                                            {faculty}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        < Grid item xs={12} md={4} >
                                            <FormControl variant="outlined" fullWidth required>
                                                <InputLabel>Field</InputLabel>
                                                <Select value={field} onChange={handleFieldChange}>
                                                    {fields.map((field) => (
                                                        <MenuItem key={field} value={field}>
                                                            {field}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                label="Sub Specialty"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={subSpecialty}
                                                onChange={handleSubSpecialtyChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Year of Graduation"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={year}
                                                onChange={handleYearChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Projects"
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                value={projects}
                                                onChange={handleProjectsChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary">
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>

                                </form >
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={2} >
                    <Grid item xs={12} align="right" mr={'25%'} mb={6} sx={{ alignItems: 'flex-end' }}>
                        <div className="student">
                            <Link to="/registerStudent">
                                <Button variant="contained"><ArrowBackIosIcon />  Back</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};


