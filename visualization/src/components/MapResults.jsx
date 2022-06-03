import ElectionsMap from "./ElectionsMap";
import ApexChart from "./BarChart";

function MapResults (props) {
    const data = props.data
    const fractions = props.fractions
    const color = props.color
    return (
        <div>
    <ElectionsMap year={data.year}
                  color={data.color}
                  fillColor={data.fillColor}
                  mouseon={data.mouseon}>
    </ElectionsMap>
    <ApexChart fractions={fractions}
               color={color}>
    </ApexChart>
        </div>
);
}

export default MapResults;