import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import Header from "../components/Header";

export default function Home() {
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser);
    return (
        <div className="">
            <Header />
            <h1>Home</h1>
            {/* display loged in user details */}
            {currentUser && (
                <div>
                    <h2> current user is:{currentUser.user.basic_info.first_name}</h2>
                    <p>email:{currentUser.user.contact_info.email}</p>

                    
                </div>
            )}
            <p>Welcome to the home page!</p>
            <Logout />
        </div>
    );
}