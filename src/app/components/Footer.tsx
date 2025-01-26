import React from 'react';

export default function Footer() {
  return (
<footer className="bg-white border-t border-gray-200 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Full Screen Layout */}
    <div className="hidden md:flex justify-between">
      {/* Logo and Vision */}
      <div>
        <h2 className="text-blue-600 text-2xl font-bold">MORENT</h2>
        <p className="mt-4 text-sm text-gray-500">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>

      {/* Footer Links */}
      <div className="flex space-x-16">
        {/* About Section */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-blue-600">How it works</a></li>
            <li><a href="#" className="hover:text-blue-600">Featured</a></li>
            <li><a href="#" className="hover:text-blue-600">Partnership</a></li>
            <li><a href="#" className="hover:text-blue-600">Business Relation</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Events</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Podcast</a></li>
            <li><a href="#" className="hover:text-blue-600">Invite a Friend</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Socials</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Discord</a></li>
            <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Responsive Layout */}
    <div className="md:hidden text-center">
      {/* Logo and Vision */}
      <div>
        <h2 className="text-blue-600 text-2xl font-bold">MORENT</h2>
        <p className="mt-4 text-sm text-gray-500">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* About Section */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-blue-600">How it works</a></li>
            <li><a href="#" className="hover:text-blue-600">Featured</a></li>
            <li><a href="#" className="hover:text-blue-600">Partnership</a></li>
            <li><a href="#" className="hover:text-blue-600">Business Relation</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Events</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Podcast</a></li>
            <li><a href="#" className="hover:text-blue-600">Invite a Friend</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Socials</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Discord</a></li>
            <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>&copy; 2022 MORENT. All rights reserved</p>
      <div className="mt-4 md:mt-0 flex space-x-4">
        <a href="#" className="hover:text-blue-600">Privacy & Policy</a>
        <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
      </div>
    </div>
  </div>
</footer>











  );
}
