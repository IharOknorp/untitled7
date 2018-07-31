import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import {browserHistory, Link} from 'react-router';



class UserSignin extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isAdmin: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this)
        this.handleAdminChange = this.handleAdminChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({error: ''});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state);

        if (!this.state.username) {
            return this.setState({error: 'Username is required'});
        }

        if (!this.state.password) {
            return this.setState({error: 'Password is required'});
        }
        this.setState({error: ''})

        return  browserHistory.push('/taskList');;
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {

        this.setState({
            password: evt.target.value,
        });
    }

    handleAdminChange(evt,checked) {

        this.setState({
            isAdmin: checked,
        });
    }



    render() {


        return (

            <div style={styles.div}>
                <Paper zDepth={3} style={styles.paperOne}>
                    <h1  style={{fontWeight: 'bold', color: '#880E4F' , fontSize:30}}>User LogIn</h1>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <Button onClick={this.dismissError}>✖</Button>
                            {this.state.error}
                        </h3>
                    }

                    <div>
                        <TextField type="text"
                               placeholder="Any nick"

                               onChange={this.handleUserChange}>

                        </TextField>
                    </div>

                    <div>
                        <TextField type="password"
                               placeholder="Any password"
                               onChange={this.handlePassChange}>

                        </TextField>
                    </div>
                    <div>
                        <Checkbox type="checkbox"
                                  id="isAdmin"
                                  onChange={this.handleAdminChange}>

                        </Checkbox>

                        <InputLabel For="isAdmin">is Admin
                        </InputLabel>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"

                        >
                           LogIn
                        </Button>
                    </div>
                    < Link to = "/createUser" >Create a new user </Link>

                </form>
                </Paper>
            </div>
        );
    }
}

const styles = {
    div: {
        padding: 20,
        textAlign: 'center',
        width: '96%',
        float: 'center'
    },
    errorStyle: {
        color: '#E57373'
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
        float: 'center',
        backgroundColor:'#E0F7FA',
    },
    paperRight: {
        height: 600,
        flex: 4,
        margin: 10,
        textAlign: 'center'
    }
};

export default UserSignin;