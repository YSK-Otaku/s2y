import type {NextPage} from 'next'
import {useState} from "react";
import {MyChart1} from "../components/MyChart1";
import {Grid, Slider} from "@mui/material";

const defaultShipData = [
    {x: 1, y: 3000},
    {x: 2, y: 1000},
]
const defaultMaterialData = [
    {x: 1, y: 1000},
    {x: 2, y: 600},
]

const Home: NextPage = () => {
    const [shipData, setShipData] = useState(defaultShipData);
    const [manufacturerData, setManufacturerData] = useState(defaultMaterialData);

    const changeJapanShip = (event: any, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setShipData([{x: 1, y: newValue[0]}, shipData[1]])
        } else {
            setShipData([{x: 1, y: newValue}, shipData[1]])
        }
    };
    return (
        <>
        <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="stretch">
            <Grid item xs={12} sm={6} lg={4}>
                    <MyChart1 tickFormat={(x) => (`${x / 1000} 千円`)} data={manufacturerData} data1={shipData}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                    <MyChart1 tickFormat={(x) => (`${x} 円`)} data={manufacturerData} data1={shipData}/>
            </Grid>
        </Grid>
            <Slider value={shipData[0].y} onChange={changeJapanShip}/>
        </>
    )
}

export default Home

