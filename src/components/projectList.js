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

let id = 0;

function createData(name, unp) {
    id += 1;
    return {id, name,unp};
}

const data = [
    createData('ОАО МЗСМ', 100097582),
    createData('КричевЦементоШифер',100097583),
    createData('Резиденция Президента',100097584),
    createData('Сантехника "АкалаКаколо" ',100097585),
    createData('Горизонт',100097586),
];

const task = [
    createData('изменить поле', 100097585),
    createData('КричевЦементоШифер', 100097585),
    createData('Резиденция Президента', 100097582),
    createData('Сантехника "АкалаКаколо" ', 100097583),
    createData('Горизонт', 100097584),
];

function SimpleTable(props) {
    const {classes} = props;

    return (
        <div>
            <ManagerView/>
            <div className={classes.flexColumn}>

                <div className={classes.flex}>
                    <Paper className={classes.root}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>List Project</TableCell>
                                    <TableCell numeric>УНП</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell component="th" scope="row">
                                                {n.name}
                                            </TableCell>
                                            <TableCell numeric>{n.unp}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>

                    <Paper className={classes.root}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>List Task</TableCell>
                                    <TableCell numeric>УНП</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {task.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell component="th" scope="row">
                                                {n.name}
                                            </TableCell>
                                            <TableCell numeric>{n.unp}</TableCell>
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

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);