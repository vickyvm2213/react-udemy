import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"
function Popular(params) {
    return (

        <div className="popular">
            <h1 className="popular__title">Most popular</h1>
            <p className="popular__subtitle">Pick the best fit</p>
            <div className="popular__container">

                <div className="course-card">
                    <img src={c4} alt="card" />
                    <h3> Basic to Advance Java Core Training </h3>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={c3} alt="card" />
                    <h3> Master UI/UX Designing With Figma </h3>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={c2} alt="card" />
                    <h3>2023 Python Data Visaulisation Materclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐ </p>
                    <p>449 <del>999</del> </p>
                </div>
                <div className="course-card">
                    <img src={c1} alt="card" />
                    <h3>2023 Python Data Visaulisation Materclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐ </p>
                    <p>449 <del>999</del> </p>
                </div>

                <div className="course-card">
                    <img src={c4} alt="card" />
                    <h3> Basic to Advance Java Core Training </h3>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={c3} alt="card" />
                    <h3> Master UI/UX Designing With Figma </h3>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={c2} alt="card"/>
                    <h3>2023 Python Data Visaulisation Materclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐ </p>
                    <p>449 <del>999</del> </p>
                </div>
                <div class="course-card">
                    <img src={c1} alt="card" />
                    <h3>2023 Python Data Visaulisation Materclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐ </p>
                    <p>449 <del>999</del> </p>
                </div>
            </div>
        </div>
    )
}
export default Popular;