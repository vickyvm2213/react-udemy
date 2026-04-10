import one from "../images/sale-image.png";

function Sale(params) {

    return(

        <div className="sale">
        <img src={one} alt="Sale"/>
        <div className="sale-image__offer">
            <h2>Udamy Flash Sale! 24 hours to save.</h2>
            <p>Get the top Courses for iust 499. Just one day save but a lifetime to learn</p>
        </div>
    </div>
    )
}

export default Sale