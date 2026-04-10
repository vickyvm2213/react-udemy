function Navbar(params) {

    return (
        <div className="navbar">

            <div className="navbar_s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#00040a" }}></i>
                <input type="text" placeholder="search for anything here. Tech, Business,Art... "/>

            </div>
            <div className="navbar__s3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-arrow-down" style={{ color: "#000205" }}></i>
                <i className="fa-solid fa-bell" style={{ color: "#010409" }}></i>
                <i className="fa-solid fa-user" style={{ color: "#010409" }}></i>
            </div>
            <div className="navbar__s4">
                <i className="fa-solid fa-list"></i>
            </div>

        </div>
    )

}

export default Navbar;