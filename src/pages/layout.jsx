
function Layout({ children }) {

    return (
        <main className="text-black">
            <Header />

            {children}
        </main>


    )
}

export default Layout