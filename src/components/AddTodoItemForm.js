import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class AddTodoItemForm extends Component {


    state = {
        title: ''
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            // title: e.target.value
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodoItem(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" name="title" value={this.state.title} placeholder="ingresa la tarea"
                                   onChange={this.onChange}/>
                            {/*<input type="submit" value="Agregar"/>*/}
                            <Button type="submit" variant="contained" color="primary">
                                Agregar Todo
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

AddTodoItemForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AddTodoItemForm);