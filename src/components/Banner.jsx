import React from 'react'

function Banner() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const number = e.target[1].value;
        const email = e.target[2].value;
        const city = e.target[3].value;
        const product = e.target[4].value;
        alert(`thank you for registerd ${name} \nTeam will contact you soon on ${number} or ${email}`);
        console.log(name, email, number, city, product);
    }
    return (
        <div className='banner'>
            <div className="bannerLeft"></div>
            <form className="bannerRight" onSubmit={handleSubmit}>
                <input type="text" required placeholder='Your Name' className='inputfield' /><br />
                <input type="number" required placeholder='Mobile Number' className='inputfield' /><br />
                <input type="email" required placeholder='Email ID' className='inputfield' /><br />
                <select name="city" id="city" required className='inputfield'>
                    <option value="Select City">Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Noida">Noida</option>
                    <option value="Hydrabad">Hydrabad</option>
                    <option value="Bhagalpur">Bhagalpur</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Patna">Patna</option>
                    <option value="Ahmadabad">Ahmadabad</option>
                </select><br />
                <select name="product" id="product" required className='inputfield'>
                    <option value="Product Type">Product Type</option>
                    <option value="Savings Accounts">Savings Accounts</option>
                    <option value="Credit Cards">Credit Cards</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Gold Loan">Gold Loan</option>
                    <option value="Fixed Deposit.">Fixed Deposit</option>
                </select><br />
                <button type='submit' className='inputfield btn'>Register Now</button>
            </form>
        </div>
    )
}

export default Banner