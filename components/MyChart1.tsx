import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";
import {VictoryStack} from "victory-stack";

export const MyChart1 = (props: { tickFormat: (x: any) => string, data: ({ x: number; y: number })[], data1: ({ x: number; y: number })[] }) => {
    return <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
    >
        <VictoryAxis
            tickValues={[1, 2]}
            tickFormat={["日本", "アメリカ"]}
        />
        <VictoryAxis
            dependentAxis
            tickFormat={props.tickFormat}
        />
        <VictoryStack>
            <VictoryBar
                data={props.data}
                x="x"
                y="y"
            />
            <VictoryBar
                data={props.data1}
                x="x"
                y="y"
            />
        </VictoryStack>
    </VictoryChart>;
}