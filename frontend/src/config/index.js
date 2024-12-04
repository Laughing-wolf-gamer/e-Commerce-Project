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

