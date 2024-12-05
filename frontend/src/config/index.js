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
            {id:'watch',label:"Watch"},
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
            {id:'rebook', label:'Rebook'},
        ]
    }
]

export const shoppingviewHeaderMenuItems = [
    {
        id: 'home',
        label: 'Home',
        path: '/shop/home',
    },
    {
        id: 'electronics',
        label: 'Electronics',
        path: '/shop/listing',
    },
    {
        id: 'clothing',
        label: 'Clothing',
        path: '/shop/listing',
    },
    {
        id:'men',
        label:'Men',
        path:'/shop/listing',
    },
    {
        id: 'women',
        label: 'Women',
        path: '/shop/listing',
    },
    {
        id: 'kids',
        label: 'Kids',
        path: '/shop/listing',
    },
    {
        id: 'cart',
        label: 'Cart',
        path: '/shop/listing',
    },
    {
        id:'watch',
        label: 'Watch',
        path: '/shop/listing',
    },
    {
        id:'search',
        label:'Search',
        path:'/shop/listing',
    },
]
export const filterOptions = {
    category:[
        {id:'men', label:'Men'},
        {id:'women', label:'Women'},
        {id:'kids', label:'Kids'},
        {id:'watch', label:'Watch'},
    ],
    brand:[
        {id:'apple', label:'Apple'},
        {id:'samsung', label:'Samsung'},
        {id:'huawei', label:'Huawei'},
        {id:'xiaomi', label:'Xiaomi'},
        {id:'oppo', label:'Oppo'},
        {id:'puma', label:'Puma'},
        {id:'rebook', label:'Rebook'},
        {id:'h&m', label:'H&M'},
        {id:'footwear', label:'Footwear'},
    ]
}
export const categoryOptions = {
    "men":'Men',
    "women":'Women',
    "kids":'Kids',
    "watch":'Watch',
    "electronics":'Electronics',
    "clothing":'Clothing',
}
export const brandOptions = {
    "apple":'Apple',
    "samsung":'Samsung',
    "huawei":'Huawei',
    "xiaomi":'Xiaomi',
    "oppo":'Oppo',
    "puma":'Puma',
    "rebook":'Rebook',
    "h&m":'H&M',
    "footwear":'Footwear',
 
}
export const sortOptions = [
    {id:'price-low-to-high',label:'Price Low to High'},
    {id:'price-high-to-low',label:'Price High to Low'},
    {id:'title-a-2-z',label:'A 2 Z'},
    {id:'title-z-2-a',label:'Z 2 A'},
]

