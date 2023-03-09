import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import ProductService from '../service/ProductService';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from "primereact/inputswitch";

const ProductStoreDatatable = () => {
    const [products, setProducts] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedSales, setSelectedSales] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedVendors, setSelectedVendors] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [checked, setChecked] = useState(false);
    const toast = useRef(null);
    const dt = useRef(null);

    const sales = [
        { name: 'All', code: 'all' },
        { name: 'Online Store', code: 'onlineStore' },
    ];

    const productItem = [
        { name: 'All', code: 'all' },
        { name: 'Diamond', code: 'diamond' },
    ];

    const vendors = [
        { name: 'All', code: 'all' },
        { name: 'Diamond', code: 'diamond' },
    ];
    
    const status = [
        { name: 'All', code: 'all' },
        { name: 'Synced', code: 'synced' },
        { name: 'Not Synced', code: 'notSynced' },
    ];


    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then((data) => setProducts(data));
    }, []);

    const openNew = () => {
        setSubmitted(false);
    };

    const editProduct = (product) => { };

    const confirmDeleteProduct = (product) => { };

    const confirmDeleteSelected = () => { };

    const productBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Product</span>
                {rowData.code}
            </>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>
            </>
        );
    };

    const inventoryBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Inventory</span>
                {rowData.name}
            </>
        );
    };

    const saleschannelBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Sales Channel Visibility</span>
                {rowData.name}
            </>
        );
    };



    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button label="Map" className="p-button-outlined p-button-help mr-2" onClick={() => editProduct(rowData)} />
                <Button label="Sync" className="p-button-outlined p-button-help mt-2" onClick={() => confirmDeleteProduct(rowData)} />
            </div>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <div className="my-2">
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger font-bold" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
                <Button label="Bulk Mapper" icon="pi pi-cog" className="p-button-help ml-4 font-bold" onClick={openNew} />
            </div>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" className="w-28rem" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card ">
                    <Toast ref={toast} />
                    <h5 className="font-bold mt-0 text-color-secondary">Sync and manage your inventory</h5>
                    <div className='grid'>
                        <div className='col-12 md:col-3'>
                            <Dropdown
                                value={selectedSales}
                                onChange={(e) => setSelectedSales(e.value)}
                                options={sales}
                                optionLabel="name"
                                placeholder="Sales Channel Visibility"
                                className="w-full" />
                        </div>
                        <div className='col-12 md:col-3'>
                            <Dropdown
                                value={selectedProduct}
                                onChange={(e) => setSelectedProduct(e.value)}
                                options={productItem}
                                optionLabel="name"
                                placeholder="Product Type"
                                className="w-full" />
                        </div>
                        <div className='col-12 md:col-3'>
                            <Dropdown
                                value={selectedVendors}
                                onChange={(e) => setSelectedVendors(e.value)}
                                options={vendors}
                                optionLabel="name"
                                placeholder="Vendor"
                                className="w-full" />
                        </div>
                        <div className='col-12 md:col-3'>
                            <Dropdown
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.value)}
                                options={status}
                                optionLabel="name"
                                placeholder="Status"
                                className="w-full" />
                        </div>
                    </div>
                    <div className='flex flex-column md:flex-row  md:align-items-center my-3'>
                        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        <h5 className='my-0 ml-4 font-bold text-color-secondary'>Hide 0 Stock Products</h5>
                    </div>
                    <DataTable
                        ref={dt}
                        scrollHeight="350px"
                        size="small"
                        value={products}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25]}
                        className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter}
                        emptyMessage="No record found."
                        header={header}
                        responsiveLayout="scroll"
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="product" header="Product" sortable headerStyle={{ width: '35%' }} body={productBodyTemplate}></Column>
                        <Column field="inventory" header="Inventory" sortable headerStyle={{ width: '12%' }} body={inventoryBodyTemplate}></Column>
                        <Column field="status" header="status" sortable headerStyle={{ width: '15%' }} body={statusBodyTemplate}></Column>
                        <Column field="salesChannel" header="Sales Channel Visibility" body={saleschannelBodyTemplate} sortable headerStyle={{ width: '20%' }}></Column>

                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default ProductStoreDatatable;
