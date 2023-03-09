import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import StoreType from './StoreType';
import ConnectStore from './ConnectStore';
import CompleteStore from './CompleteStore';

const DashboardMain = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showStore, setshowStore] = useState(false);
    const [showDestination, setshowDestination] = useState(false);

    const StoreIndex = () => {
        setActiveIndex(activeIndex + 1);
        setshowStore(!showStore);
    };

    const showDestinationIndex = () => {
        setActiveIndex(activeIndex + 1);
        setshowDestination(!showDestination);
    };

    const getActivePage = () => {
        switch (activeIndex) {
            case 0:
                return <StoreType nextStoreIndex={() => StoreIndex()} nextDestinationIndex={() => showDestinationIndex()} />;
            case 1:
                return <ConnectStore nextIndex={() => setActiveIndex(activeIndex + 1)} showStore={showStore} showDestination={showDestination} />;
            case 2:
                return <CompleteStore />;
            default:
                return null;
        }
    };
    const items = [
        {
            label: 'STEP 1'
        },
        {
            label: 'STEP 2'
        },

        {
            label: 'STEP 3'
        }
    ];
    return (
        <div className="layout-dashboard">
            <div className="grid justify-content-center">
                <div className="col-12 md:col-4">
                    <div className="card card-w-title">
                        {/* <h5>Steps</h5> */}
                        <Steps model={items} activeIndex={activeIndex} />
                    </div>
                </div>
            </div>
            <div>{getActivePage()}</div>
        </div>
    );
};

export default DashboardMain;
