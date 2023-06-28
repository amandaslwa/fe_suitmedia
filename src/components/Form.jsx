import { useForm } from "react-hook-form";

const Form  = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div className="form-container">
    <div className="contact-us">
        <h2>Contact Us</h2>
    </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name
            <input type="text" name="name" required="Required"/>
        </label>
        <label>Email
        <input
            type="email"
            {...register("email", {
            required: "Required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
            })}
        />
        {errors.email && errors.email.message}
        </label>
        <label>Message
            <textarea name="message" required="Required"/>
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Form;