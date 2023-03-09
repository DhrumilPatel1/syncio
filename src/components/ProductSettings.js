import { TabMenu } from 'primereact/tabmenu'
import React, { useState } from 'react'
import ProductTab from './ProductTab';
import VariantTab from './VariantTab';

const ProductSettings = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const checkActiveIndex = () => {
        switch (activeIndex) {
            case 0:
                return <ProductTab />
            case 1:
                return <VariantTab />
            default:
                return null
        }
    }



    const items = [
        {
            label: 'PRODUCT'
        },
        {
            label: 'VARIANT'
        },
    ];

    return (
        <div>
            <h5 className="font-bold mt-0 text-color-secondary">Manage how your products sync with your connected Source stores.</h5>
            <div className="grid p-fluid">
                <div className="col-12 md:col-3 product-settings-tab">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                </div>
            </div>
            <div>{checkActiveIndex()}</div>
        </div>
    )
}

export default ProductSettings