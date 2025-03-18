import React from 'react'

const CustomSpinner = () => {
    return (
    <div>
        {[1, 2, 3].map((_, index) => (
        <div key={index} className="skeleton-card"></div>))}
  </div>)
}

export default CustomSpinner