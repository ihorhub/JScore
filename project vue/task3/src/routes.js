import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Myprojects from "./components/Myprojects";


export const routes=[
    {
        path:'', component:Home
    },
    {
        path: '/Contacts',component: Contacts

    },
    {path:'/Myprojects', component: Myprojects
    }
]