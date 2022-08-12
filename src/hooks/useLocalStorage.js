import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError]=React.useState(false);
    const [loading, setLoading]=React.useState(true);
    const [item, setItem]=React.useState(initialValue);

    React.useEffect(()=>{
        setTimeout(() => {
            try{
                 //Haciendo la persistencia de datos

                const localStoreItem = localStorage.getItem(itemName);
                let parsedItems;

                if (!localStoreItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItems = initialValue;
                }
                else {
                    parsedItems = JSON.parse(localStoreItem);
                }

                setItem(parsedItems);
                setLoading(false);
            }
            catch (error) {
                setError(error);
            }
        }, 6000);
    }, [])

    //Guardar los datos en el localStore y actualizar el estado de setTodos

    const savedItem=(newTodos)=>{
        try{
            const temItems=JSON.stringify(newTodos);
            localStorage.setItem(itemName,temItems);
            setItem(newTodos);
        }
        catch(error){
            setError(error);
        }
    }

    return {
        item,
        savedItem,
        loading,
        error
    };
}

export { useLocalStorage }