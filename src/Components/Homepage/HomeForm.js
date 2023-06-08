import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import {Collapse} from 'reactstrap';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = yup.object().shape({
    firstName: yup.string().required("First Name Required"),
    lastName: yup.string().required("Last Name Required"),
    phone: yup.string().matches(phoneRegExp, 'Valid Phone Number Required'),
    email: yup.string().email("Must be a Valid Email Address").required("Email Required"),
    message: yup.string().required("Message Required")
})

const tyMessage = (data) =>{
    return(
        <div className="tyMessage">
            <h3>Thank you!</h3>
            <p>I have received your message, and you should be hearing a response within the next 24 hours!</p>
        </div>
    )
}

const HomeForm = () =>{

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [collapseOpen, setCollapseOpen] = useState(true);
    
    const initFormData = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    };

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    })
    const [data, setData] = useState(initFormData);

    useEffect(()=>{
        formSchema.isValid(data).then(valid=>{
            setButtonDisabled(!valid);
        });

    }, [data])

    const validateChange = event => {
        yup
          .reach(formSchema, event.target.name)
          .validate(event.target.value)
          .then(valid => {
            setErrors({
              ...errors, [event.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors, [event.target.name]: err.errors[0]
            });
          });
      };

    const handleChange = e =>{
        validateChange(e);
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        let newPhone = `+1 (${data.phone.substring(0,3)}) ${data.phone.substring(3,6)}-${data.phone.substring(6)}`
        let formData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: newPhone,
            message: data.message
        }
        setData(formData);
        setCollapseOpen(false);
        
        axios.post('https://re-website-be.vercel.app/email/hannahsilberman', formData).then(res=>{
            setCollapseOpen(false);
        }).catch(err=>{
            console.log(err);
        })
    }
    
    return(
        <div className="HomeForm" id="contact">
            <div className="HomeFormTitle">
                <h4>Connect with Me</h4>
                <h6>To learn more, please fill out the form below</h6>
            </div>
            <Collapse isOpen={collapseOpen}>
                <form>
                    <div className="FormTop">
                        <div className="FormInput">
                            <label htmlFor="firstName" className="hide-element">First Name</label>
                            <input type="text" name="firstName" placeholder="First Name *" value={data.firstName} onChange={handleChange} />
                            {errors.firstName.length > 0 ? <p className="error">{errors.firstName}</p> : null}
                        </div>
                        <div className="FormInput">
                            <label htmlFor="lastName" className="hide-element">Last Name</label>
                            <input type="text" name="lastName" placeholder="Last Name *" value={data.lastName} onChange={handleChange} />
                            {errors.lastName.length > 0 ? <p className="error">{errors.lastName}</p> : null}
                        </div>
                    </div>
                    <div className="FormMiddle">
                        <div className="FormInput">
                            <label htmlFor="phone" className="hide-element">Email</label>
                            <input type="text" name="phone" placeholder="Phone *" value={data.phone} onChange={handleChange} />
                            {errors.phone.length > 0 ? <p className="error">{errors.phone}</p> : null}
                        </div>
                        <div className="FormInput">
                            <label htmlFor="email" className="hide-element">Email</label>
                            <input type="text" name="email" placeholder="Email *" value={data.email} onChange={handleChange} />
                            {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                        </div>
                    </div>
                    <div className="FormBottom">
                        <div className="FormInputTA">
                            <label htmlFor="message" className="hide-element">Message</label>
                            <textarea rows="5" name="message" placeholder="Message *" value={data.message} onChange={handleChange} />
                            {errors.message.length > 0 ? <p className="error">{errors.message}</p> : null}
                        </div>
                    </div>
                    <button disabled={buttonDisabled} onClick={handleSubmit}>Send</button>
                </form>
            </Collapse>
            {collapseOpen ? null : <>{tyMessage(data)}</>}
        </div>
    )
}

export default HomeForm;