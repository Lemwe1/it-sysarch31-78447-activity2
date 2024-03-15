import Student from "./Student";
import './index.css';
function Content(){
    const list = {
      stud1: {
        name: "Lemuel Dioquino",
        email: "example1@gmail.com",
        image: <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"/>
      },
      stud2:{
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU37FnbBg50aestSWYenXfXOSAK5UjVcHCJfgbl96rpocUMXtGqXaVFBxHbou9qWNzQoU&usqp=CAU"/>,
        name: "Juan Tan",
        email: "example2@gmail.com",
      },
      stud3:{
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfF6nBhidhIzL330CYtg70I8tpDBGJ2YjBPnE9D9gY0iLmGu563WBIab4KBexSDv7kG8&usqp=CAU"/>,
        name: "Sean Archer",
        email: "example3@gmail.com",
      },
      stud4:{
        image: <img src="https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"/>,
        name: "Nino cezar",
        email: "example4@gmail.com",
      },
      stud5:{
        image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48QxzamxCVIWbH47YKDXjxyZuCINYZFGXK0gnBWeJcWQcwZFc0RhOS6VBhUvktmYeVZg&usqp=CAU"/>,
        name: "FrancisBien",
        email: "example5@gmail.com",
      }
    }
  
    return(
      <>
        {Object.keys(list).map((key) => {
          const studentlist = list[key];
          return (
            <Student
              key={key}
              studentImage={studentlist.image}
              studentName={studentlist.name}
              studentEmail={studentlist.email}
            />
          );
          })}
      </>
    )
}

export default Content