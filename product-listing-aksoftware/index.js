import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'product-listing-aksoftware',
    label: 'product listing aksoftware',
    category: 'commerce',
    hidden: false,
    removable: true,
    component: 'sw-cms-block-product-listing-aksoftware',
    previewComponent: 'sw-cms-preview-product-listing-aksoftware',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'product-listing'
    }
});
