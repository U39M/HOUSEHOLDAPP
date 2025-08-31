import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const MonthlySummary = () => {
    return (
        <Grid container>
            {/* 収入 */}
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "blue", color: "white", borderRadius: "10px" }}>
                    <CardContent sx={{padding: {xs: 1, sm: 2}}}>
                        <Stack direction={"row"}>
                            <ArrowUpwardIcon sx ={{ fontSize: "2rem" }}/>
                            <Typography>収入</Typography>
                        </Stack>
                        <Typography 
                            textAlign={"right"} 
                            variant='h5' 
                            fontWeight={"fontWeightBold"}
                            sx={{wordBreak: "break-word", fontSize: {xs: "0.8rem", sm: "1rem", md: "1.2rem"},
                        }}
                        >¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            {/* 支出 */}
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "red", color: "white", borderRadius: "10px" }}>
                    <CardContent sx={{padding: {xs: 1, sm: 2}}}>
                        <Stack direction={"row"}>
                            <ArrowDownwardIcon sx ={{ fontSize: "2rem" }}/>
                            <Typography>支出</Typography>
                        </Stack>
                        <Typography 
                            textAlign={"right"} 
                            variant='h5' 
                            fontWeight={"fontWeightBold"}
                            sx={{wordBreak: "break-word", fontSize: {xs: "0.8rem", sm: "1rem", md: "1.2rem"},
                        }}
                        >¥50,000</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};

export default MonthlySummary;