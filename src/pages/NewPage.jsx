import SideBar from "../components/general/SideBar/SideBar"
import Footer from "../components/general/Footer"

const NewPage = (Component) => {
    return (
        <>
            <div className="flex">
                <div className="w-1/5">
                    <SideBar role={'gerente'} />
                </div>
                <div className="w-full flex flex-col min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
                    <Component />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default NewPage