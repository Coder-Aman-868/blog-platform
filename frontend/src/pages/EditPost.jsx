function EditPost() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <input type="text" placeholder="Title" className="w-full border p-2 mb-3" />
      <textarea placeholder="Content" className="w-full border p-2 mb-3 min-h-[150px]" />
      <button className="w-full bg-yellow-500 text-white py-2 rounded">Update</button>
    </div>
  );
}

export default EditPost;
