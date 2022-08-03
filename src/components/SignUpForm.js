import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required")
                .min(6, "Tên phải dài hơn 6 ký tự"),
            email: Yup.string()
                .required("Required")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid address",
                ),
            password: Yup.string()
                .required("Required")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    `Password must be 7-19 characters and contain at least one letter,
                    one number and a special character`,
                ),
            confirmPassword: Yup.string()
                .required("Required")
                .oneOf(
                    [Yup.ref("password"), null],
                    "Passwords are not the same",
                ),
            phone: Yup.string()
                .required("Required")
                .matches(
                    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                    "Must be a valid phone number",
                ),
        }),
        onSubmit: (values) => {
            window.alert("Form Submited");
        },
    });

    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <label>Your name</label>
                <input
                    type="text"
                    id="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Enter your name"
                />
                {formik.errors.name && (
                    <p className="errorMsg">{formik.errors.name}</p>
                )}
                <label>Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your email"
                />
                {formik.errors.email && (
                    <p className="errorMsg">{formik.errors.email}</p>
                )}
                <label>Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                />
                {formik.errors.password && (
                    <p className="errorMsg">{formik.errors.password}</p>
                )}
                <label>Confirm password</label>
                <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    placeholder="Confirm your password"
                />
                {formik.errors.confirmPassword && (
                    <p className="errorMsg">{formik.errors.confirmPassword}</p>
                )}
                <label>Phone number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    placeholder="Confirm your phone number"
                />
                {formik.errors.phone && (
                    <p className="errorMsg">{formik.errors.phone}</p>
                )}
                <button type="submit">Continue</button>
            </form>
        </section>
    );
};

export default SignUpForm;
