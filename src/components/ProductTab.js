import { InputSwitch } from 'primereact/inputswitch'
import React, { useState } from 'react'

const ProductTab = () => {
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  const [tags, setTags] = useState(false);
  const [url, setUrl] = useState(false);
  const [seoMetafields, setSeoMetafields] = useState(false);
  const [hsCode, setHsCode] = useState(false);
  const [media, setMedia] = useState(false);
  const [store, setStore] = useState(false);
  const [hideSynced, setHideSynced] = useState(false);
  return (
    <div className="grid">
      <div className="col-12">
        <div className="card ">
          <h5 className="font-bold mt-0 text-color-secondary">Switch on any product attributes that you would like to sync across all connected source stores.</h5>
          <div className='grid '>
            <div className='col-12 md:col-4'>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={title} onChange={(e) => setTitle(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Title</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={description} onChange={(e) => setDescription(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Description</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={tags} onChange={(e) => setTags(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>tags</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={url} onChange={(e) => setUrl(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>URL Handle</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={seoMetafields} onChange={(e) => setSeoMetafields(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>SEO Metafields (Initial Sync only)</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={hsCode} onChange={(e) => setHsCode(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>HS Code and Country of Origin</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={media} onChange={(e) => setMedia(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Media-Images &#123; BETA &#125;</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={store} onChange={(e) => setStore(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Online Store Sales Channel</h5>
              </div>
              <div className='border-1 border-gray-400 border-round-xl flex flex-column md:flex-row  md:align-items-center mb-3 p-3'>
                <InputSwitch checked={hideSynced} onChange={(e) => setHideSynced(e.value)} />
                <h5 className='my-0 ml-4 font-bold text-lg text-color-secondary'>Hide Synced Product By Default</h5>
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

export default ProductTab