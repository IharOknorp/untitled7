import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ManagerView from './managerView.js';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import { lighten } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
    flex: {display: 'flex'},
    flexColumn: {display: 'flex', flexDirection: 'column'},
    leftCol: {flex: 1, marginRight: '1em'},
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        maxWidth: 300,
    },
    margin: {
        marginRight: '150px',
        display: 'flex',
    }
});

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});

var currentUnp = 0;

let id = 0;

function createData(name, unp, developer) {
    id += 1;
    return {id, name,unp, developer};
}

var data = [
    createData('ОАО МЗСМ', 100097582,'Simple User'),
    createData('КричевЦементоШифер',100097583,'User'),
    createData('Резиденция Президента',100097584,'Simple User'),
    createData('Сантехника "АкалаКаколо" ',100097585,'User'),
    createData('Горизонт',100097586,'NoSimple User'),
];

const task = [
    createData('изменить поле "unp"', 100097585,'Simple User'),
    createData('добавить поле "data"', 100097585,'Simple User'),
    createData('изменить цвет', 100097582,'Simple User'),
    createData('добавить прав юзеру" ', 100097583,'Simple User'),
    createData('добавить title', 100097584,'Simple User'),
];
class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // filterText: '',
            data : data,
            task : task
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleClick = (event, unp) => {
       var newTask = [];

        for (var i = 0; i < task.length; i++) {

            if (task[i].unp == unp) {
                 newTask[newTask.length] = createData(task[i].name, unp);
            }
        }
        currentUnp = unp;

        this.setState({

            task: newTask

        });
    };

    handleChange = (data) =>{

        this.setState({
            data: data

        });
    }

    handleChangeTask = (task) =>{

        this.setState({
            task: task

        });
    }

    handleUserInput(filterText) {
        // this.setState({
        //     filterText: filterText
        // });
        var rows = [];
       data.forEach((listproject) => {
            if (listproject.developer.indexOf(filterText) === -1)
            {return;}

            rows[rows.length] = createData(listproject.name, listproject.unp,listproject.developer);
                })
        this.setState({
            data: rows
        });

    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <ManagerView/>
                <div className={classes.flexColumn}>

                    <div className={classes.flex}>

                        <Paper className={classes.root}>
                            <EnhancedTableToolbarProject handleChange = {this.handleChange}  onUserInput={this.handleUserInput} />
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>List Project</TableCell>
                                        <TableCell numeric>УНП</TableCell>
                                        <TableCell numeric>Developer</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.data.map(n => {
                                        return (
                                            <TableRow hover key={n.id} onClick={event => this.handleClick(event, n.unp)} filterText={this.state.filterText}>
                                                <TableCell component="th" scope="row">
                                                    {n.name}
                                                </TableCell>
                                                <TableCell numeric>{n.unp}</TableCell>
                                                <TableCell numeric>{n.developer}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>

                        <Paper className={classes.root}>
                            <EnhancedTableToolbarTask handleChangeTask = {this.handleChangeTask} />
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>List Task</TableCell>
                                        <TableCell numeric>УНП</TableCell>
                                        <TableCell numeric>Developer</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.task.map(n => {
                                        return (
                                            <TableRow hover key={n.id}>
                                                <TableCell component="th" scope="row">
                                                    {n.name}
                                                </TableCell>
                                                <TableCell numeric>{n.unp}</TableCell>
                                                <TableCell numeric>{n.developer}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>


                    </div>
                </div>
            </div>
        );
    }
}

class EnhancedTableToolbarProject extends React.Component {

    constructor(props) {
        super(props);


        this.handleClick = this.handleClick.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    handleClick(event) {
        data[data.length] = createData('ОАО Юпитер', 100097595, 'Simple User');

        this.props.handleChange(data)
    }

    handleChangeFilter() {
        this.props.onUserInput(
            this.filterTextInput.value
        );
    }


    render() {
        const {numSelected, classes} = this.props;


        return (
            <Toolbar>
                <div>
                    <Tooltip title="Add project">
                        <IconButton>
                            <AddIcon onClick={(event) => this.handleClick(event)}/>
                        </IconButton>
                    </Tooltip>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.props.filterText}
                        ref={(input) => this.filterTextInput = input}
                        onChange={this.handleChangeFilter}
                    />

                </div>
            </Toolbar>
        );
    };
}

class EnhancedTableToolbarTask extends React.Component {
    constructor(props) {
        super(props);


        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        var newTask = [];

        for (var i = 0; i < task.length; i++) {

            if (task[i].unp == currentUnp) {
                newTask[newTask.length] = createData(task[i].name, currentUnp);
            }
        }



        newTask[newTask.length] = createData('новое задание', currentUnp, 'Simple User');

        this.props.handleChangeTask(

            newTask
        )
    }

    render() {
        const {numSelected, classes} = this.props;

        return (
            <Toolbar>


                <div>
                    <Tooltip title="Add task">
                        <IconButton>
                            <AddIcon onClick={(event) => this.handleClick(event)}/>
                        </IconButton>
                    </Tooltip>
       </div>


            </Toolbar>
        );
    };
};

EnhancedTableToolbarTask.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbarTask = withStyles(toolbarStyles)(EnhancedTableToolbarTask);


SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);