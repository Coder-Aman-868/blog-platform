function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
