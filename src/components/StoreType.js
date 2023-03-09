import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

import React from 'react';

const StoreType = ({ nextStoreIndex, nextDestinationIndex }) => {
    return (
        <div className="grid justify-content-center">
            <div className="col-12 md:col-3">
                <div className="card hover:shadow-5 cursor-pointer border-round-xl h-full">
                    <div className="flex">
                        <Image src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt="Image" width="150" height="100" className="mx-auto" />
                    </div>
                    <h4 className="text-center text-base font-bold">Source Store</h4>
                    <h6 className="text-sm font-bold">I am the source of the truth. I hold the master inventory & product information. I can also fulfill and ship products to the customer.</h6>
                    <ul className="text-sm font-bold -ml-4">
                        <p className="-ml-3 my-0">Examples:</p>
                        <li>The primary online store</li>
                        <li>Connected to warehouse soruce/location</li>
                        <li>A supplier to other retailers</li>
                        <li>A brand store</li>
                    </ul>
                    <Button label="Choose this store type" onClick={nextStoreIndex} className="p-button-raised  mr-2 mb-2" />
                </div>
            </div>
            <div className="col-12 md:col-3">
                <div className="card hover:shadow-5 cursor-pointer border-round-xl ">
                    <div className="flex">
                        <Image src="https://bootstrapmade.com/demo/templates/Impact/assets/img/hero-img.svg" alt="Image" width="150" height="100" className="mx-auto" />
                    </div>
                    <h4 className="text-center text-base font-bold">Destination Store</h4>
                    <h6 className="text-sm font-bold">I sync inventory and product information from the source store. I can also send orders to the source store to fulfill.</h6>
                    <ul className="text-sm font-bold -ml-4">
                        <p className="-ml-3 my-0">Examples:</p>
                        <li>secondary retail location (different region)</li>
                        <li>Third party retailer</li>
                        <li>Drop shipping store</li>
                        <li>Alternative sales channel (wholesale/retail)</li>
                    </ul>
                    <Button label="Choose this store type" className="p-button-raised  mr-2 mb-2" onClick={nextDestinationIndex} />
                </div>
            </div>
        </div>
    );
};

export default StoreType;
