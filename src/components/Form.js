import React, {useState} from "react";

const Form = ({getMovie}) => {

    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        setFormData(e.target.value)
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await getMovie(formData)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={formData}/>
                <input type="submit" value="submit" />
            </form>
        </div>
     )
}
 
export default Form;