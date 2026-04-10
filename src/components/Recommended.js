import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"

function Recommended(params) {
    return(
         <div className="recommended">
        <h1 className="recommended__titel">Recommended for You </h1>
        <p className=" recommended__one">Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={c1}/>
                <h3>2023 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐ </p>
                <p>449 <del>999</del> </p>
            </div>

            <div className="course-card">
                <img src={c2}/>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
            <div className="course-card">
                <img src={c3}/>
                <h3> Master UI/UX Designing With Figma </h3>
                <p>Col Steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div className="course-card">
                <img src={c4}/>
                <h3> Basic to Advance Java Core Training </h3>
                <p>Col Steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
        </div>
    </div>
    )
}
export default Recommended;