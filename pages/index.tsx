import type {NextPage} from 'next'
import {useState} from "react";
import {MyChart1} from "../components/MyChart1";
import {Grid, Slider, Typography} from "@mui/material";

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

    const changeAmericaShip = (event: any, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setShipData( [shipData[0] ,{x: 2, y: newValue[0]}])
        } else {
            setShipData([shipData[0] ,{x: 2, y: newValue}])
        }
    };
    return (
        <>
        <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="stretch">
            <Grid item xs={12} sm={6} lg={3}>
                <MyChart1 tickFormat={(x) => (`${x / 1000} 千円`)} data={[manufacturerData,shipData]}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <MyChart1 tickFormat={(x) => (`${x / 1000} 千円`)} data={[defaultMaterialData,defaultShipData]}/>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={"h6"}>日本輸送コスト</Typography>
                <Slider value={shipData[0].y} onChange={changeJapanShip}　valueLabelDisplay="on" defaultValue={defaultShipData[0].y} min={0} max={5000}/>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={"h6"}>アメリカ輸送コスト</Typography>
                <Slider value={shipData[1].y} onChange={changeAmericaShip}　valueLabelDisplay="on" defaultValue={defaultShipData[1].y} min={0} max={5000}/>
            </Grid>
        </Grid>

        </>
    )
}

export default Home

