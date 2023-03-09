import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const ConnectStore = ({ showStore, showDestination, nextIndex }) => {
    const [showConnectionStore, setShowConnectionStore] = useState(false);
    const [showStoreNew, setShowStoreNew] = useState(showStore);
    const [showDestinationNew, setshowDestinationNew] = useState(showDestination);
    const [showConnectionDestination, setShowConnectionDestination] = useState(false);
    const [value, setValue] = useState('');

    const showConnectStore = () => {
        setShowConnectionStore(!showConnectionStore);
        setShowStoreNew(!showStoreNew);
    };

    const showConnectDestination = () => {
        setShowConnectionDestination(!showConnectionDestination);
        setshowDestinationNew(!showDestinationNew);
    };
    return (
        <div className="grid">
            {showStore && <h2 className="col-12 text-center">Connect to your first destination store!</h2>}

            {showDestination && <h2 className="col-12 text-center">Connect to your first source store!</h2>}

            {showStoreNew ? (
                <div className="mx-auto col-12 xl:col-6">
                    <Card>
                        <h5 className="font-bold text-center" style={{ color: 'red' }}>
                            YOUR STORE'S UNIQUE KEY:
                        </h5>
                        <h4 className="text-center" style={{ color: 'red' }}>
                            63fd8389506fc
                        </h4>
                        <p>Share your unique key with destination store to allow them to import your products to sell on their store. This unique key can also be found on your dashboard after completing this setup process. </p>
                        <div className="grid">
                            <div className="col-6">
                                <Button icon="pi pi-arrow-right" iconPos="right" label="Share your key via e-mail" className="p-button-raised mr-2 mb-2 w-12" />
                            </div>
                            <div className="col-6">
                                <Button icon="pi pi-arrow-right" iconPos="right" label="I received a destination store key" onClick={() => showConnectStore()} className="p-button-outlined  mr-2 mb-2 w-12" />
                            </div>
                        </div>
                    </Card>
                </div>
            ) : null}
            {showConnectionStore ? (
                <div className="mx-auto col-12 xl:col-6">
                    <Card title="Connect to a destination store using a unique key.">
                        <h6>Once connected, the destination store will be able to start importing products from your store. </h6>
                        <p>Destination store unique key</p>
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-9 ml-4" />
                        <Button label="Connect" icon="pi pi-plus" iconPos="right" className="p-button-raised mr-2 ml-4 w-2" />
                    </Card>
                </div>
            ) : null}

            {showDestinationNew ? (
                <div className="mx-auto col-12 xl:col-6">
                    <Card>
                        <h5 className="font-bold text-center" style={{ color: 'red' }}>
                            YOUR STORE'S UNIQUE KEY:
                        </h5>
                        <h4 className="text-center" style={{ color: 'red' }}>
                            63fd8389506fc
                        </h4>
                        <p>Share your unique key with source stores to start importing their products to sell on your store. This unique key can also be found on your dashboard after completing this setup process. </p>
                        <div className="grid">
                            <div className="col-6">
                                <Button icon="pi pi-arrow-right" iconPos="right" label="Share your key via e-mail" className="p-button-raised mr-2 mb-2 w-12" />
                            </div>
                            <div className="col-6">
                                <Button icon="pi pi-arrow-right" iconPos="right" label="I received a source store key" onClick={() => showConnectDestination()} className="p-button-outlined mr-2 mb-2 w-12" />
                            </div>
                        </div>
                    </Card>
                </div>
            ) : null}
            {showConnectionDestination ? (
                <div className="mx-auto col-12 xl:col-6">
                    <Card title="Connect to a source store using a unique key.">
                        <h6>Once connected, you will be able to start importing products from this source store. </h6>
                        <p>Source store unique key</p>
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-9 ml-4" />
                        <Button label="Connect" icon="pi pi-plus" iconPos="right" className="p-button-raised mr-2 ml-4 w-2" />
                    </Card>
                </div>
            ) : null}
            <h5 onClick={nextIndex} className="col-12 xl:col-8 text-primary text-center cursor-pointer mx-auto">
                Skip for now
            </h5>
        </div>
    );
};

export default ConnectStore;
