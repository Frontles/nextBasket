import NavBar from "../components2/header"
function Layout({ children }) {

    return (
        <main className="text-black">
            <NavBar />

            {children}
        </main>


    )
}

export default Layout