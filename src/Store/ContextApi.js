import React from 'react';

const ContextApi = React.createContext({
    medicItems : [],
    addMedicItem: (item) => {},
    removeQty: (id) => {},
    items : [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default ContextApi;