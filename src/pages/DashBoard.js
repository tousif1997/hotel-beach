import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Title from '../components/Title';
import { useState, useEffect } from 'react'


const useStyles = makeStyles({

    root: {
        width: '70%',
        marginLeft: "15%",
        marginTop: "3%",
        backgroundColor: "#f2ecec",
        borderLeft: 'outset',
        borderTop: 'outset',
    },

    container: {
        maxHeight: 440,
        borderRightColor: 'red',
    },
});



export default function MatPaginationTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [data, setData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    //   useEffect(() => {    
    //         const GetData = async () => {    
    //           const result = await axios('http://localhost:3003/getEMPLOYEE');    
    //           setData(result.data);  
    //           console.log('my result.data :',result.data);  
    //         }  
    //         GetData();    
    //         console.log('my data :',data);  
    // });   
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };



    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);

        setPage(0);

    };



    return (<>
    <div className="container">
     <section className="featured-rooms">
            <Title title="Dashboard"/>

        <Paper className={classes.root}>
               
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Room No</TableCell>
                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Room Type</TableCell>
                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Booked By</TableCell>
                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Phone Number</TableCell>
                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Check In</TableCell>
                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Check Out</TableCell>
                            <TableCell align="center" style={{backgroundColor:"#e8e5f6"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow >
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">single basic</TableCell>
                            <TableCell align="center">jhon</TableCell>
                            <TableCell align="center">8050505050</TableCell>
                            <TableCell align="center">21-08-2021</TableCell>
                            <TableCell align="center">25-08-21</TableCell>
                            <TableCell align="center"><button type ="submit"className="btn-primary"> Check Out</button></TableCell>                        </TableRow>
                        <TableRow >
                            <TableCell align="center">02</TableCell>
                            <TableCell align="center">double basic</TableCell>
                            <TableCell align="center">tony</TableCell>
                            <TableCell align="center">80505101010</TableCell>
                            <TableCell align="center">21-08-2021</TableCell>
                            <TableCell align="center">25-08-21</TableCell>
                            <TableCell align="center"><button type ="submit"className="btn-primary"> Check Out</button></TableCell>                        </TableRow>
                        <TableRow >
                            <TableCell align="center">03</TableCell>
                            <TableCell align="center">family basic</TableCell>
                            <TableCell align="center">baigan</TableCell>
                            <TableCell align="center">80508787878</TableCell>
                            <TableCell align="center">21-08-2021</TableCell>
                            <TableCell align="center">25-08-21</TableCell>
                            <TableCell align="center"><button type ="submit"className="btn-primary"> Check Out</button></TableCell>                        </TableRow>
                        <TableRow >
                            <TableCell align="center">04</TableCell>
                            <TableCell align="center">presidential</TableCell>
                            <TableCell align="center">arjit</TableCell>
                            <TableCell align="center">8050505050</TableCell>
                            <TableCell align="center">21-08-2021</TableCell>
                            <TableCell align="center">25-08-21</TableCell>
                            <TableCell align="center"><button type ="submit"className="btn-primary"> Check Out</button></TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper> </section></div>
</>
    );
}