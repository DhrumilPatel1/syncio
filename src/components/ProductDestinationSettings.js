import { TabMenu } from 'primereact/tabmenu'
import React, { useState } from 'react'
import ProductDestinationTab from './ProductDestinationTab';

const ProductDestinationSettings = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const checkActiveIndex = () => {
        switch (activeIndex) {
            case 0:
                return <ProductDestinationTab />
            default:
                return null
        }
    }

    const items = [
        {
            label: 'PRODUCT'
        },

    ];

    return (
        <div>
            <h5 className="font-bold mt-0 text-color-secondary">Manage how your products sync with your connected Destination store.</h5>
            <div className="grid p-fluid">
                <div className="col-12 md:col-3 product-settings-tab">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                </div>
            </div>
            <div>{checkActiveIndex()}</div>
        </div>
    )
}

export default ProductDestinationSettings