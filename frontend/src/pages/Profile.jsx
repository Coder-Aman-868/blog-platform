function Profile() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded text-center">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p>Name: User Name</p>
      <p>Email: user@example.com</p>
      <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Logout</button>
    </div>
  );
}

export default Profile;
