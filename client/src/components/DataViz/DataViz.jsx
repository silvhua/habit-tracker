import React from 'react'
import './DataViz.scss';

const DataViz = ({ waterConsumed,username }) => {
  const waterGlassImage = 'http://localhost:8080/waterglassimage.jpg';

  let elements = [];
  for (let i = 0; i < waterConsumed; i++) {
    elements.push(<img
      key={i} src={waterGlassImage}
      alt="Water Glass"
       width="50" height="50"
    />);
  }
  return (
    <div>
      <h3>{username} has consumed {waterConsumed } cups of water</h3>
      {elements}
    </div>
  )
  // return (
  //   <>
  //   {waterConsumed.map((entry, index) => (
  //       <div key={index}>
  //         {Array.from({ length: entry }, () => (
  //           <img src={waterGlassImage} alt="Water Glass" width="50" height="50" />
  //         ))}
  //       </div>
  //     ))}
  //   </>
  // )
}

export default DataViz
