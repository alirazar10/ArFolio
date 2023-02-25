import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

export default function layout ({children}){
    return (
        <div className="w-full min-h-screen " name="wrapper">
            <Header/>
            <Sidebar/>
            <main className="min-h-0 bg-primary-500 h-full ">
                {children}
            </main>  
            <Footer/>
        </div>
    )
}