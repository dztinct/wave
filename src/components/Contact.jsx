
const Contact = () => {
  return (
    <div>
        <section className="get-in-touch">
            <h1 className="text-center mt-4 bg-info text-white p-3">Get in touch</h1>
            <form className="contact-form row">
                <div className="form-field col-lg-6">
                    <input id="name" className="input-text js-input" type="text" required/>
                    <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="email" className="input-text js-input" type="email" required/>
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="company" className="input-text js-input" type="text" required/>
                    <label className="label" htmlFor="company">Company Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="phone" className="input-text js-input" type="text" required/>
                    <label className="label" htmlFor="phone">Contact Number</label>
                </div>
                <div className="form-field col-lg-12">
                    <input id="message" className="input-text js-input" type="text" required/>
                    <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col-lg-12">
                    <input className="submit-btn" type="submit" value="Submit"/>
                </div>
            </form>
        </section>      
    </div>
  )
}

export default Contact
