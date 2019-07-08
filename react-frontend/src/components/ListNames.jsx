import React from 'react'

const listData= ['김유신', '강감찬','유관순']

const ListNames = (props) => {
    const items = props.data.map(
        (i,v) => {
            return <li>{i} : {v}</li>
        }
    )
    return(
        <ul>
            {items}
        </ul>
    )
}
export default ListNames;