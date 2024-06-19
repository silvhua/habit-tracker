// import './Wrangler.scss';

const Wrangler = (props) => {
  const {username, historyArray} = props;
  const valuesArray = historyArray.map(entry => entry.value);
  const sum = valuesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
  console.log(valuesArray);
  return (
    <>
      {username} has consumed {sum} Cups
    </>
  )
}

export default Wrangler
