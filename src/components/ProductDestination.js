import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { Fieldset } from 'primereact/fieldset';
import ProductDestinatonDatatable from './ProductDestinatonDatatable';
import { Dropdown } from 'primereact/dropdown';


const ProductDestination = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedValue, setselectedValue] = useState([])
    const [filteredItems, setFilteredItems] = useState([]);
    const [value, setValue] = useState([])


    // const items = Array.from({ length: 20 }).map((_, i) => ({ label: `Item #${i}`, value: i }));


    // const searchItems = (event) => {

    //     let query = event.query;
    //     let _filteredItems = [];

    //     for (let i = 0; i < items.length; i++) {
    //         let item = items[i];
    //         if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
    //             _filteredItems.push(item);
    //         }
    //     }

    //     setFilteredItems(_filteredItems);
    // }


    // const handleChange = (e) => {
    //     setselectedValue(e.value?.label)
    //     setSelectedItem(e.value)
    // }

    const legendTemplate = (
        <div className="flex align-items-center text-primary">
            <span className="font-bold text-lg text-color-secondary">Select a Destination store</span>
        </div>
    );

    const items = [
        { label: 'modernrusticdiamond.myshopify.com', value: 'modernrusticdiamond.myshopify.com' },
        { label: 'think-dev-test.myshopify.com', value: 'think-dev-test.myshopify.com' },

    ];

    return (
        <div>
            <div className="grid p-fluid">
                <div className="col-12 md:col-4 product-store-content">
                    {/* <span className="p-float-label">
                        <Fieldset legend={legendTemplate}>
                            <AutoComplete id="dropdown" value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} field="label" dropdown onChange={(e) => handleChange(e)} >

                                <label htmlFor="dropdown">Dropdown</label>
                            </AutoComplete>
                        </Fieldset>
                    </span> */}
                    <Fieldset legend={legendTemplate}>
                        <Dropdown id="multiselect" options={items} value={value} onChange={(e) => setValue(e.value)} optionLabel="label" />
                    </Fieldset>
                </div>
            </div>
            {
                value?.length > 0 ? (<ProductDestinatonDatatable />) : null
            }

        </div>
    );
};

export default ProductDestination;
