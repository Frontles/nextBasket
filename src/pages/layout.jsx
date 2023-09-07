import NavBar from "@/components/Header"
function Layout({ children }) {

    return (
        <main className="text-black">
            <NavBar />

            {children}
        </main>


    )
}

export default Layout