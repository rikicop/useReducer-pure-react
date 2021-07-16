import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
           /*  console.log('Esto es Acción:',action)
            console.log('Esto es State:',state) */
            return [
                ...state,
                {
                    id: state.length,
                    name: action.name
                }
            ];
        case 'remove':
            console.log('Esto es Acción:', action)
            console.log('Esto es State:', state)
            // keep every item except the one we want to remove
            // El primer argumento _ es asi por que no lo necesitas type
            return state.filter((_,indice) => indice !== action.indice);

        default:
            return state;
    }
};

function ShoppingList() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer(reducer, []);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: 'add',
            name: inputRef.current.value
        });
        inputRef.current.value = '';
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} />
            </form>
            <ul>
                {items.map((item, indice) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({ type:'remove',indice })}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ShoppingList