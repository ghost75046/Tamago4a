import React, { useContext } from 'react';
import StoreContext from '../context/cloudWithTextContext';
import {logDOM} from "@testing-library/react";

const MyComponent = () => {
    const store:any = useContext(StoreContext);

    const handleChangeText = () => {
        // Изменяем значение текста через метод хранилища MobX
        store.setTextInCloud('New text');
        console.log('textChanged')
    };

    return (
        <div>
            <button onClick={handleChangeText}>Change Text</button>
            <p>{store.textInCloud}</p>
        </div>
    );
};

export default MyComponent;