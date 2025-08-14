import { useState } from "react";
import axios from "axios";

function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState(""); // 👈 Define message state

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Registration successful ✅");
            } else {
                setMessage(data.error || "Something went wrong ❌");
            }
        } catch (error) {
            setMessage("Server error ❌");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />
            <button type="submit">Register</button>

            {message && <p>{message}</p>} {/* 👈 Show message */}
        </form>
    );
}

export default Register;
