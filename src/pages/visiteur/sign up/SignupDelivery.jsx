import { Component } from "react";
export  default class SignupDelivery extends Component{
    render(){
        return(
            <div  className="sing">
                <h1>Sign up for Delivery position :</h1>
                <form>
                    <h3>Applicant Information</h3>
                    <label >Full Name :</label><br/>
                    <input type="text" placeholder="First Name" required/>
                    <input type="text" placeholder="Middle Name" required/>
                    <input type="text" placeholder="Last Name" required/><br/>
                    <label>Date of Birth :</label><br/>
                    <input type="date" placeholder="MM-DD-YYYY" /><br/>
                    <label>Phone Number :</label><br/>
                    <input type="tel" required/><br/>
                    <label>Email Address</label><br/>
                    <input type="email" required placeholder="example@example.com"/><br/>
                    <label >Current Address :</label><br/>
                    <input type="text" placeholder="Street Address" required/>
                    <input type="text" placeholder="Street Address Line 2" required/><br/>
                    <input type="text" placeholder="City" required/>
                    <input type="text" placeholder="State" required/><br/>
                    <input type="text" placeholder="Postal" required/><br/>
                    <h3>Emergency Contact</h3>
                    <label >Name :</label><br/>
                    <input type="text" placeholder="First Name" required/>
                    <input type="text" placeholder="Middle Name" required/><br/>
                    <label >Relationship to you :</label><br/>
                    <input type="text" placeholder="ex: wife/husband" required/><br/>
                    <label>Phone Number :</label><br/>
                    <input type="tel" required/><br/>
                    <h3>Questionnaire</h3>
                    <label>Applying for which city ?</label><br/>
                    <select>
                        <option>Ariana</option>
                        <option>Béja</option>
                        <option>Ben Arous</option>
                        <option>Bizerte</option>
                        <option>Djerba</option>
                        <option>Gabès</option>
                        <option>Gafsa</option>
                        <option>Jendouba</option>
                        <option>Kairouan</option>
                        <option>Kasserine</option>
                        <option>Kebili</option>
                        <option>Kef</option>
                        <option>Mahdia</option>
                        <option>Manouba</option>
                        <option>Medenine</option>
                        <option>Monastir</option>
                        <option>Nabeul</option>
                        <option>Sfax</option>
                        <option>Sidi Bouzid</option>
                        <option>Siliana</option>
                        <option>Sousse</option>
                        <option>Tataouine</option>
                        <option>Tozeur</option>
                        <option>Tunis</option>
                        <option>Zaghouan</option>
                    </select><br/>
                    <label>what is your Availablity ?</label><br/>
                    <input type="checkbox"/>
                    <label>Monday</label><br/>
                    <input type="checkbox"/>
                    <label>Tuesday</label><br/>
                    <input type="checkbox"/>
                    <label>Wednasday</label><br/>
                    <input type="checkbox"/>
                    <label>Thursday</label><br/>
                    <input type="checkbox"/>
                    <label>Friday</label><br/>
                    <input type="checkbox"/>
                    <label>Saturday</label><br/>
                    <input type="checkbox"/>
                    <label>Sunday</label><br/>
                    <label>Are you available to work in other areas?</label><br/>
                    <input type="text"/><br/>
                    <label>Skills :</label><br/>
                    <textarea></textarea>
                </form>
            </div>
        )
    }
}