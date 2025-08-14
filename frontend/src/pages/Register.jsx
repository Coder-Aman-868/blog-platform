import { useState } from "react";

function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", form);
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || "Error occurred");
        }
    };
    return (
        <div className="max-w-sm mx-auto mt-10 p-6 border rounded">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <input type="text" placeholder="Name" className="w-full border p-2 mb-3" />
            <input type="email" placeholder="Email" className="w-full border p-2 mb-3" />
            <input type="password" placeholder="Password" className="w-full border p-2 mb-3" />
            <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
        </div>
    );
}

export default Register;
