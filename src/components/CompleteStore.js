import { Button } from 'primereact/button';
import React from 'react';

const CompleteStore = () => {
    return (
        <div>
            <div className="mt-4 text-center">
                <h3>Installation Complere!</h3>
                <h5>Here are a few guides to help you Sync your first product!</h5>
            </div>
            <div className="grid justify-content-center mt-5">
                <div className="col-12 md:col-6 xl:col-3 ">
                    <div className="card grid-nogutter orders hover:shadow-5 cursor-pointer">
                        <div className="flex justify-content-between">
                            <h4 className="font-bold">Orders</h4>
                            <span className="pi pi-external-link text-2xl"></span>
                        </div>
                        <p className="text-2xl">Read our step by step guide to sync your first product!</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 ">
                    <div className="card grid-nogutter orders hover:shadow-5 cursor-pointer">
                        <div className="flex justify-content-between">
                            <h4 className="font-bold">Best Practices</h4>
                            <span className="pi pi-external-link text-2xl"></span>
                        </div>
                        <p className="text-2xl">Six steps to ensure your inventory syncs properly</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3">
                    <div className="card grid-nogutter orders hover:shadow-5 cursor-pointer">
                        <div className="flex justify-content-between">
                            <h4 className="font-bold">Use Cases</h4>
                            <span className="pi pi-external-link text-2xl"></span>
                        </div>
                        <p className="text-2xl">See how other companies use Syncio!</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-7">
                <Button label="Continue to Dashboard" icon="pi pi-arrow-right" iconPos="right" className="p-button-raised mr-2 mb-2 text-center w-2" />
            </div>
        </div>
    );
};

export default CompleteStore;
