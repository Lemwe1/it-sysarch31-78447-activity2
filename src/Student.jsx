import './index.css';
function Student({studentImage, studentName, studentEmail}){
    return(
        <div className="card">
            <h1 className="card-image" >{studentImage} </h1>
            <h2 className="stud-name">{studentName}</h2>
            <p className="stud-email">{studentEmail}</p>
        </div>
    );
}
export default Student