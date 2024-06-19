import React from 'react'
import './DataViz.scss';
import waterGlassImage from '../../assets/waterGlassImage.jpg';

const DataViz = ({ waterConsumed }) => {
  const waterGlassImage = waterGlassImage 
  return (
    <>
    {waterConsumed.map((entry, index) => (
        <div key={index}>
          {Array.from({ length: entry }, () => (
            <img src={waterGlassImage} alt="Water Glass" width="50" height="50" />
          ))}
        </div>
      ))}
    </>
  )
}

export default DataViz
