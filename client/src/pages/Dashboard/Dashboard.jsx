import './Dashboard.scss';
import Dataviz from '../../components/DataViz/DataViz';

const Dashboard = ({ handleWaterSubmission, waterConsumed, setWaterConsumed, comments, setComments, showResult }) => {
  return (
    <>
    <div>
      {/* enter form on water intake */}
      <form onSubmit={handleWaterSubmission}>
        <label>How many glasses of water did you take today? </label>
        <input type="number" value={waterConsumed} onChange={(e) => setWaterConsumed(e.target.value)} />
        <br />
        <label>Comments: </label>
        <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showResult && (
        <>
      <p>You have consumed {waterConsumed} glasses of water today.</p>
      <Dataviz waterConsumed={waterConsumed} />
      </>
    )}
    </div>
    </>
  )
}

export default Dashboard
