import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'
import { addRepair } from '../redux/actions'
import { repairLog } from "../redux/state"


class AddRepair extends Component {

      
    state = {
        open: false,
        date: '',
        maintenance: '',
        performedBy: '',
        contact: '',
        material: '',
        labor: '',
        other: '',
        total: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.repairTotal + 1
        delete payload.open
        console.log("THE CAR", payload)

        this.props.addRepair(payload)
        this.setState({ open: false })

    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                date: '',
                maintenance: '',
                performedBy: '',
                contact: '',
                material: '',
                labor: '',
                other: '',
                total: '',
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Repair:</h1>
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Repair
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Repair</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="date" 
                                    placeholder="Date" 
                                    value={this.state.date} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="maintenance" 
                                    placeholder="Maintenance Desc" 
                                    value={this.state.maintenance} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="performedBy" 
                                    placeholder="Performed By" 
                                    value={this.state.performedBy} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="contact" 
                                    placeholder="Contact #" 
                                    value={this.state.contact} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="material" 
                                    placeholder="Material" 
                                    value={this.state.material} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="labor" 
                                    placeholder="Labor Cost" 
                                    value={this.state.labor} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="other" 
                                    placeholder="Other" 
                                    value={this.state.other} 
                                    onChange={this.handleTextChange} 
                                    required /> 
                                <TextField 
                                    id="total" 
                                    placeholder="Total" 
                                    value={this.state.total} 
                                    onChange={this.handleTextChange} 
                                    required />                            
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddRepair
