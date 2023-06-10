import './App.css'
import Section from './components/Section'
let data_set=[
  {
    title: "About me",
   description : "I'm Deljeet kumar pursuing MCA from Chandigarh University and Simentaneously pursuing MERN stack devolpement", 
  },
  {
    title: "Skills",
  description : "lLorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore repellendus porro reprehenderit quas ullam id tenetur, libero, delectus repellat quasi perspiciatis iure. Odit nihil iusto blanditiis quasi eum? Praesentium quasi accusantium ipsam voluptate quisquam ad accusamus consectetur sed illo distinctio? Sapiente molestias fugit voluptatum nobis ut excepturi saepe? Corrupti, sunt!", 
 },
 {
  title: "Qualification",
 description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore repellendus porro reprehenderit quas ullam id tenetur, libero, delectus repellat quasi perspiciatis iure. Odit nihil iusto blanditiis quasi eum? Praesentium quasi accusantium ipsam voluptate quisquam ad accusamus consectetur sed illo distinctio? Sapiente molestias fugit voluptatum nobis ut excepturi saepe? Corrupti, sunt!", 
}
]
const App =()=> {

  return (
    <div>
     
   {
      data_set.map((value)=>
        <Section
        title = {value.title}
        description = {value.description}
        />
      )

    } 
    
    </div>
  )
}

export default App;
