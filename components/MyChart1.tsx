import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";
import {VictoryStack} from "victory-stack";

export const MyChart1 = (props: { tickFormat: (x: number) => string, data: ({ x: number; y: number })[][] }) => {
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
            {props.data.map((data, index) => {
                return <VictoryBar
                    key={index}
                    data={data}
                    x={"x"}
                    y={"y"}
                />
            })}
        </VictoryStack>
    </VictoryChart>;
}