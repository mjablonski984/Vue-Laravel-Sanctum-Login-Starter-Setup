import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';


export default{
    mode: 'history', // how we check visited pages -browser default
    linkActiveClass: 'font-semibold', // specify class for active links (overwrite dafault vue-router style)
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: "/dashboard",
            component: Dashboard,
            name: "Dashboard",
            beforeEnter: (to, form, next) =>{
                // if user is authenticated proceed to dashboard else redirect to login (uses our middleware with  auth/authenticated route)
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
       
          }
          
    ]
}