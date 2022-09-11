import React from 'react'

const useItem = (initialState) => {
    const [item, setItem] = React.useState(initialState || '');

    const onChangeItem = (event) => {
        setItem(event.target.value);
    }

    return {
        item,
        onChangeItem
    }
}

export { useItem }