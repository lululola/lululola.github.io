import React from 'react'

const Tick = (props) =>  {
    return (
        <div className={"tick " + props.status}></div>
    )
}

export default Tick;