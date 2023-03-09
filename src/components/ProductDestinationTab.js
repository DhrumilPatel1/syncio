import { InputSwitch } from 'primereact/inputswitch'
import React, { useState } from 'react'

const ProductDestinationTab = () => {
    const [cost, setCost] = useState(false);
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card ">
                    <h5 className="font-bold mt-0 text-color-secondary">Switch on any product attributes that you would like to sync across all connected source stores.</h5>
                    <div className='grid '>
                        <div className='col-12 md:col-4'>
                            <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                                <InputSwitch checked={cost} onChange={(e) => setCost(e.value)} />
                                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Cose Per Item</h5>
                            </div>
                        </div>
                        <div className='col-12 md:col-7 surface-100 ml-4 my-4' style={{ width: "64%" }}>
                            <div className='flex justify-content-center align-items-center mt-2'>
                                <i className="pi pi-info-circle text-lg" />
                                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Click on an attribute to see more details.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDestinationTab