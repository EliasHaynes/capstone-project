import React, {useState} from "react";
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddRepair from "../containers/AddRepair";
import { addRepair, removeRepair } from "../redux/actions";


function RepairLog(props) {
    return (
        <div>
            <Container maxWidth="lg" className="car-container">
            <div className="flex-container">
                <AddRepair repairTotal={props.repairLog.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Maintenance Description</TableCell>
                        <TableCell>Performed by</TableCell>
                        <TableCell>Contact #</TableCell>
                        <TableCell>Material</TableCell>
                        <TableCell>Labor</TableCell>
                        <TableCell>Other</TableCell>
                        <TableCell>Total</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                {props.repairLog.map((repair, idx) => (
                    <TableRow key={repair.id}>
                        <TableCell component="th" scope="row">
                            {repair.id}
                        </TableCell>
                        <TableCell>{repair["date"]}</TableCell>
                        <TableCell>{repair["maintenance"]}</TableCell>
                        <TableCell>{repair["performedBy"]}</TableCell>
                        <TableCell>{repair["contact"]}</TableCell>
                        <TableCell>{repair["material"]}</TableCell>
                        <TableCell>{repair["labor"]}</TableCell>
                        <TableCell>{repair["other"]}</TableCell>
                        <TableCell>{repair["total"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeRepair(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
        </div>
    )
}

export default RepairLog

