import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">Liên Hệ</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Thông Tin Liên Hệ</h2>
            
            <div className="space-y-6">
              <div className="flex items-center transform transition-transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                  <Mail className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Email</p>
                  <p className="text-purple-600">nguyenthanhdat1822@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center transform transition-transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                  <Phone className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Điện Thoại</p>
                  <p className="text-purple-600">+84 353133418</p>
                </div>
              </div>
              
              <div className="flex items-center transform transition-transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                  <MapPin className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Địa Chỉ</p>
                  <p className="text-purple-600">Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Gửi Tin Nhắn</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;