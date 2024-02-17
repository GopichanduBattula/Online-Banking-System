
export default function Validation(values)
{

const errors = {}
const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
const contact_pattern =/^\d{10}$/ ;


if(values.name === "")
{
errors.name = "Name is Required";
}
if(values.email === "")
{
errors.email = "email is required";
}
else if(!email_pattern.test(values.email))
{
errors.email = "Email pattern not correct";
}
if(values.password === "")
{
errors.password = "password is required";
}
else if(!password_pattern.test(values.password))
{
errors.password = "Password pattern not correct";
}
if(values.contact === "")
{
errors.contact = "contact is required";
}
else if(!contact_pattern.test(values.contact))
{
errors.contact = "Contact pattern not correct";
}
return  errors;

}