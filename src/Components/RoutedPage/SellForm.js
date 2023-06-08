import React, {useState, useEffect} from 'react';
import * as yup from "yup";
import axios from "axios";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formSchema = yup.object().shape({
        fName: yup.string().required("First Name Required"),
        lName: yup.string().required("Last Name Required"),
        phone: yup.string().matches(phoneRegExp, 'Valid Phone Number Required'),
        email: yup.string().email("Must be a Valid Email Address").required("Email Required"),
        date: yup.string().required("Approx. Move Date Required"),
        address: yup.string().required("Property Address Required"),
        info: yup.string()
    })

const SellForm = () =>{
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const initFormData = {
        fName: "",
        lName: "",
        phone: "",
        email: "",
        date: "",
        address: "",
        info: "",
    }

    const [errors, setErrors] = useState({
        fName: "",
        lName: "",
        phone: "",
        email: "",
        date: "",
        address: "",
        info: ""
    })

    const [formData, setFormData] = useState(initFormData);

    useEffect(()=>{
        formSchema.isValid(formData).then(valid=>{
            setButtonDisabled(!valid);
        });

    }, [formData])

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
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let newPhone = `+1 (${formData.phone.substring(0,3)}) ${formData.phone.substring(3,6)}-${formData.phone.substring(6)}`;
        let newFormData = {
            firstName: formData.fName,
            lastName: formData.lName,
            phone: newPhone,
            email: formData.email,
            date: formData.date,
            address: formData.address,
            info: formData.info
        }

        axios.post('https://re-website-be.vercel.app/email/hannahsilberman/seller', newFormData).then(res=>{
            setFormData(initFormData);
            alert("Message Sent! \nI have received your message, and you should be hearing a response within the next 24 hours!");
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className="BuySellFormWrapper">
            <h4>Looking to Sell?</h4>
            <p>Looking to move out of the area? Let me do the heavy lifting. You'll be my top priority from the day we list your house to the moment it closes.</p>
            <div className="BSFormRow">
                <div className="BSFormInput">
                    <label htmlFor="fName" className="hide-element">First Name</label>
                    <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleChange}/>
                    {errors.fName.length > 0 ? <p className="bserror">{errors.fName}</p> : null}
                </div>
                <div className="BSFormInput">
                    <label htmlFor="lName" className="hide-element">Last Name</label>
                    <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange}/>
                    {errors.lName.length > 0 ? <p className="bserror">{errors.lName}</p> : null}
                </div>
            </div>
            <div className="BSFormRow">
                <div className="BSFormInput">
                    <label htmlFor="phone" className="hide-element">Phone Number</label>
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
                    {errors.phone.length > 0 ? <p className="bserror">{errors.phone}</p> : null}
                </div>
                <div className="BSFormInput">
                    <label htmlFor="email" className="hide-element">Email</label>
                    <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                    {errors.email.length > 0 ? <p className="bserror">{errors.email}</p> : null}
                </div>
            </div>
            <div className="BSFormRow">
                <div className="BSFormInput">
                    <label htmlFor="address" className="hide-element">Property Address</label>
                    <input type="text" name="address" placeholder="Property Address" value={formData.address} onChange={handleChange}/>
                    {errors.address.length > 0 ? <p className="bserror">{errors.address}</p> : null}
                </div>
                <div className="BSFormInput">
                    <label htmlFor="date" className="hide-element">Approximate Listing Date</label>
                    <input type="text" name="date" placeholder="Approximate Listing Date" value={formData.date} onChange={handleChange}/>
                    {errors.date.length > 0 ? <p className="bserror">{errors.date}</p> : null}
                </div>
            </div>
            <div className="BSFormRow">
                <div className="BSFormInputLong">
                    <label htmlFor="info" className="hide-element">Additional Information</label>
                    <textarea rows="3" name="info" placeholder="Additional Information" value={formData.info} onChange={handleChange} />
                    {errors.info.length > 0 ? <p className="bserror">{errors.info}</p> : null}
                </div>
            </div>
            <button disabled={buttonDisabled} onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SellForm;