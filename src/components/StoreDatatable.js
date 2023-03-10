import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import ProductService from '../service/ProductService';

const StoreDatatable = () => {
    const [products, setProducts] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

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

    const platformBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Platform</span>
                {rowData.code}
            </>
        );
    };

    const storeUrlBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Store URL</span>
                {rowData.name}
            </>
        );
    };

    const inventoryLocationBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Inventory Location</span>
                {rowData.category}
            </>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-sitemap" className="p-button-rounded p-button-info mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-link" className="p-button-rounded p-button-secondary mt-2" onClick={() => confirmDeleteProduct(rowData)} />
            </div>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <div className="my-2">
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger font-bold" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
                <Button label="Connect New Store" icon="pi pi-plus-circle" className="p-button-help ml-4 font-bold" onClick={openNew} />
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
                <div className="card">
                    <Toast ref={toast} />
                    <h5 className="font-bold mt-0">Manage your Destination store</h5>
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
                        className="datatable-responsive datatable_container"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter}
                        emptyMessage="No record found."
                        header={header}
                        responsiveLayout="scroll"
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="platform" header="Platform" sortable headerStyle={{ width: '20%' }} body={platformBodyTemplate}></Column>
                        <Column field="storeUrl" header="Store URL" sortable headerStyle={{ width: '35%' }} body={storeUrlBodyTemplate}></Column>
                        <Column field="inventoryLocation" header="Inventory Location" body={inventoryLocationBodyTemplate} sortable headerStyle={{ width: '30%' }}></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default StoreDatatable;
