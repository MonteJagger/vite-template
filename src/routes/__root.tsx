import { createRootRoute, createRoute, createRouter, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { LoginPage } from "../pages/LoginPage";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <div>
                <Link to="/">Home</Link>
                {' '}
                <Link to="/login">Login</Link>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => {
        return (
            <div className="text-3xl font-bold underline text-gray-500">
                Hello world!
            </div>
        )
    }
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
})

const routeTree = rootRoute.addChildren([indexRoute, loginRoute])
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export { router }