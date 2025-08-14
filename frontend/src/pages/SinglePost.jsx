function SinglePost() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded">
      <h1 className="text-3xl font-bold mb-2">Post Title</h1>
      <p className="text-gray-500 mb-4">Author Name • Date</p>
      <p>Here will be the blog post content fetched from backend.</p>
    </div>
  );
}

export default SinglePost;
