import './Dashboard.scss';

const Dashboard = () => {
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
      {showResult && <p>You have consumed {waterConsumed} glasses of water today.</p>}
    </div>
    </>
  )
}

export default Dashboard
