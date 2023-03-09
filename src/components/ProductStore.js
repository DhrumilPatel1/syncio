import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import ProductStoreDatatable from './ProductStoreDatatable';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';

const ProductStore = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedValue, setselectedValue] = useState([])
    const [filteredItems, setFilteredItems] = useState([]);
    const [value, setValue] = useState([])

    const items = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    // const searchItems = () => {
    //     let _filteredItems = [];
    //     for (let i = 0; i < items.length; i++) {
    //         let item = items[i];
    //         _filteredItems.push(item);
    //     }

    //     setFilteredItems(_filteredItems);
    // };

    // const handleChange = (e) => {
    //     setselectedValue(e.value?.label)
    //     setSelectedItem(e.value)
    // }

    const legendTemplate = (
        <div className="flex align-items-center text-primary">
            <span className="font-bold text-lg text-color-secondary">Select a Source store</span>
        </div>
    );

    return (
        <div>
            <div className="grid p-fluid">
                <div className="col-12 md:col-4 product-store-content">
                    {/* <Fieldset legend={legendTemplate}>
                        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} field="label" dropdown onChange={(e) => handleChange(e)} >
                        </AutoComplete>
                    </Fieldset> */}
                    <Fieldset legend={legendTemplate}>
                        <span className="p-float-label">
                            <Dropdown id="multiselect" options={items} value={value} onChange={(e) => setValue(e.value)} optionLabel="label" />
                            <label htmlFor="multiselect">Select a Source store</label>
                        </span>
                    </Fieldset>
                </div>
            </div>
            {
                value?.length > 0 ? (<ProductStoreDatatable />) : null
            }

        </div>
    );
};

export default ProductStore;
