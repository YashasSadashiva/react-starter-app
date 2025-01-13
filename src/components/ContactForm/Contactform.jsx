import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Button from "../Button/Button";
import styles from "./Contact.module.css"
import { IoMdMail } from "react-icons/io";
import { useState } from "react"

const Contactform = () => {
  const [name, setName] = useState("yashas");
  const [email, setEmail] = useState("Godisdoublegreat@gmail.com");
  const [text, setText] = useState("Thank youu");
const onSubnit = (event) => {
  event.preventDefault();

 setName(event.target[0].value);
 setEmail(event.target[1].value);
setText(event.target[2].value);

  console.log({name,email,text})
};




  return (
   <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}> 
            <Button text= "Via Support Chat" icon= {<MdMessage fontSize="24px" />} />
           <Button  text= "Via call" icon= {<IoMdCall fontSize="24px" />} />
         </div>
         <Button isOutline ={true}
          text= "Via Email Form" 
          icon= {<IoMdMail fontSize="14px" />} />

 
 <form onSubmit={onSubnit}>
  <div className={styles.form_control}>
  <label htmlFor="name">Name</label>
  <input type="text"  name="name" />
  </div>

  <div className={styles.form_control}>
  <label htmlFor="email">Email</label>
  <input type="email"  name="email" />
  </div>

  <div className={styles.form_control}>
  <label htmlFor="text">Text</label>
  <textarea name="text" rows={8} />
  </div>
 <div style={{display: "flex",
 justifyContent: "end"}}>
 <Button text="SUBMIT Button" />
 </div>
 <div>
  {name + " " + email +" " + text}
 </div>

 </form>
    </div>
    <div className={styles.Conatactimage}> </div>
   </section>
  )
}

export default Contactform;
