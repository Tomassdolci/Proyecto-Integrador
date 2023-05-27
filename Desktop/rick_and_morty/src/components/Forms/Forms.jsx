import { useState } from "react";
import validation from "../validation";

const Forms = ({ login }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({

    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <div>
            <form>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} value={userData.email} type="text" name="email" />
                {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2}
                <p>{errors.e2}</p>
                <hr />
                <label htmlFor="password">password: </label>
                <input onChange={handleChange} value={userData.password} type="text" name="password" />
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Forms;