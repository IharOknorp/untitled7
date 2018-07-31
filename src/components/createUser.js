import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import { browserHistory } from 'react-router';

import {Link} from 'react-router';


export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_type: ''
        };
        this.userData = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeForSelect = this.handleChangeForSelect.bind(this);
    }

    handleSubmit(event) {
        browserHistory.push('/');

    }

    handleChangeForSelect(event, index, value) {

        this.userData['user_type'] = event.target.value;

        this.setState(this.userData);

    }

    render() {
        return (
            <div style={styles.div}>
                <CreateUserForm
                    handleSubmit={this.handleSubmit}
                    handleChangeForSelect={this.handleChangeForSelect}
                    value={this.state.user_type}/>
            </div>
        );
    }

};

const CreateUserForm = (props) => (
    <div style={styles.div}>
        <Paper zDepth={3} style={styles.paperOne}>
            <h1  style={{fontWeight: 'bold', color: '#880E4F' , fontSize:30}}>Create Account</h1>
            <TextField
                id="name"
                label="Name"
              //  className={classes.textField}
              //  value={this.state.name}
               // onChange={this.handleChange('name')}
                margin="normal"
            />
            <br/>
            <TextField
                id="password-input"
                label="Password"
                //className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
            <br/>
            <TextField
                id="confirm_password-input"
                label="Confirm Password"
                //className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
            <br/>
            <FormControl className={styles.formControl}>
                <Select
                    value={props.value}
                    onChange={props.handleChangeForSelect}
                    //displayEmpty
                    name="user_type"
                    className={styles.selectEmpty}
                >

                    <MenuItem value={"Manager"}>Manager</MenuItem>
                    <MenuItem value={"Programmer"}>Programmer</MenuItem>

                </Select>
                <FormHelperText>Select User Type</FormHelperText>
            </FormControl>
            <br/>
            <Button variant="contained" color="primary" type="submit" onClick={props.handleSubmit}>
                Done
            </Button>


        </Paper>
    </div>
)


const styles = {
    div: {
        verticalAlign: 'middle',
        padding: 20,
        textAlign: 'center',
        width: '96%',
        border: '3px',
        float: 'center',
    },
    errorStyle: {
        color: '#E57373'
    },
    about: {
        textalign: 'center',
        padding: 20
    },
    mediaPiece: {
        maxwidth: '70%',
        margin: 'auto',
        maxheight: '70%',
    },
    marginTop: {
        margintop: 30
    },
    underlineStyle: {
        borderColor: '#FF9800'
    },
    floatingLabelStyle: {
        color: '#FF9800'
    },
    floatingLabelFocusStyle: {
        color: '#2196F3'
    },
    paperOne: {
        height: '100%',
        textAlign: 'center',
        padding: 10,
        margin: 10,
        width: '100%',
        float: 'center',
        backgroundColor:'#E0F7FA',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: 100,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: 200,
    }
};
