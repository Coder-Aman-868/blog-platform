function Login() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" className="w-full border p-2 mb-3" />
      <input type="password" placeholder="Password" className="w-full border p-2 mb-3" />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
    </div>
  );
}

export default Login;
