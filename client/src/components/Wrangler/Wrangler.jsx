import DataViz from "../DataViz/DataViz";

const Wrangler = (props) => {
  const {username, historyArray} = props;
  const valuesArray = historyArray.map(entry => entry.value);
  const sum = valuesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <>
      <DataViz
        waterConsumed={sum}
        username={username}
      />
    </>
  )
}

export default Wrangler
