import Navbar from "@/components/Navbar/Navbar";


const Layout = ({children}) => {
    return (
        <div >
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Layout;