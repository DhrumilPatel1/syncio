import { InputSwitch } from 'primereact/inputswitch'
import React, { useState } from 'react'

const VariantTab = () => {
  const [price, setPrice] = useState(false);
  const [syncCost, setSyncCost] = useState(false);
  const [addVariant, setAddVariant] = useState(false);
  const [removeVariant, setRemoveVariant] = useState(false);
  const [quantity, setQuantity] = useState(false);
  const [variant, setVariant] = useState(false);

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card ">
          <h5 className="font-bold mt-0 text-color-secondary">Switch on any product attributes that you would like to sync across all connected source stores.</h5>
          <div className='grid '>
            <div className='col-12 md:col-4'>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={price} onChange={(e) => setPrice(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Price</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={syncCost} onChange={(e) => setSyncCost(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Sync Cost Per Item</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={addVariant} onChange={(e) => setAddVariant(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Auto-Add Variant</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={removeVariant} onChange={(e) => setRemoveVariant(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Auto-Remove Variant</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={quantity} onChange={(e) => setQuantity(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Track quantity & Continue selling when out of stock</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={variant} onChange={(e) => setVariant(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Variant Name </h5>
              </div>
            </div>
            <div className='col-12 md:col-7 surface-100 ml-4 my-4' style={{ width: "64%" }}>
              <div className='flex justify-content-center align-items-center mt-5'>
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

export default VariantTab