import HomePosts from './components/HomePosts'
import SinglePost from './components/SinglePost'
import Category from './components/Category'
import AddPost from './components/AddPost'

export default [
    {
        path: "/",
        component: HomePosts
    },
    {
        path: "/post/:slug",
        component: SinglePost
    },
    {
        path: "/category/:slug",
        component: Category
    },
    {
        path: "/add-post",
        component: AddPost
    }
]