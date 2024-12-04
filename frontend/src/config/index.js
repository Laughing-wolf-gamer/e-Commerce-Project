export const registerFormControls = [
    {
        name:'userName',
        label :"User Name",
        placeHolder:'Enter your User Name',
        componentType: 'input',
        type: 'text',
    },
    {
        name:'email',
        label :"Email",
        placeHolder:'Enter your Email Address',
        componentType: 'input',
        type: 'email',
    },
    {
        name:'password',
        label :"Password",
        placeHolder:'Enter your password',
        componentType: 'input',
        type: 'password',
    },

]
export const loginFormControls = [
    {
        name:'email',
        label :"Email",
        placeHolder:'Enter your Email Address',
        componentType: 'input',
        type: 'email',
    },
    {
        name:'password',
        label :"Password",
        placeHolder:'Enter your password',
        componentType: 'input',
        type: 'password',
    },

]

export const adminSideBarMenu = [
    {
        id: 'dashboard',
        label: 'DashBoard',
        path: '/admin/dashboard',
        
    },
    {
        id: 'products',
        label: 'Products',
        path: '/admin/products',
        
    },
    {
        id: 'features',
        label: 'Features',
        path: '/admin/features',
        
    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/orders',
        
    }
];

export const addProductsFromElement = [
    {
        label:'Title',
        name:'title',
        componentType:'input',
        type:'text',
        placeHolder:'Enter Product Name',
    },
    {
        label:'Description',
        name:'description',
        componentType:'textarea',
        placeHolder:'Enter Product Name',
    },
    {
        label:'Price',
        name:'price',
        componentType:'input',
        type:'number',
        placeHolder:'Enter Product Price',
    },
    {
        label:'Sale Price',
        name:'salePrice',
        componentType:'input',
        type:'number',
        placeHolder:'Enter Product Sale Price',
    },
    {
        label:'Quantity',
        name:'quantity',
        componentType:'input',
        type:'number',
        placeHolder:'Enter Product Quantity',
    },
    {
        label:'Total Stock',
        name:'totalStock',
        componentType:'input',
        type:'number',
        placeHolder:'Enter Product Quantity',
    },
    {
        label:"Category",
        name:'category',
        componentType:'select',
        placeHolder:'Select Product Category',
        options:[
            {id:'electronics', label:'Electronics'},
            {id:'clothing', label:'Clothing'},
            {id:'men',label:"Men"},
            {id:'women',label:"Women"},
            {id:'kids',label:"Kids"},
        ]
    },
    {
        label:"Brand",
        name:'brand',
        componentType:'select',
        placeHolder:'Select Product Brand',
        options:[
            {id:'apple', label:'Apple'},
            {id:'samsung', label:'Samsung'},
            {id:'huawei', label:'Huawei'},
            {id:'xiaomi', label:'Xiaomi'},
            {id:'oppo', label:'Oppo'},
            {id:'puma', label:'Puma'},
        ]
    }
]

