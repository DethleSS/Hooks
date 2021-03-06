import React, {useState, useEffect} from 'react'

export default function ItemList({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems()
        setItems(newItems)
        console.log('render')
    }, [getItems])
    return (
        <ul>
            {items.map(el => <li key={el}>{el}</li>)}
        </ul>
    )
}