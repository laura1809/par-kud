import SideBar from "../components/general/SideBar"
import Footer from "../components/general/Footer"

const NewPage = (Component) => {
    return (
        <>
            <div className="flex">
                <div className="w-1/5">
                    <SideBar role={'superAdmin'} />
                </div>
                <div className="w-3/4 flex flex-col min-h-screen">
                    <Component />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default NewPage