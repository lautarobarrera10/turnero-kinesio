import React from 'react'

const useItem = () => {
    const [item, setItem] = React.useState('');

    const onChangeItem = (event) => {
        setItem(event.target.value);
    }

    return {
        item,
        onChangeItem
    }
}

export { useItem }