import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

function Education() {
  const education = [
    {
      school: 'Đại Học Giao Thông Vận Tải TP.Hồ Chí Minh',
      degree: 'Cử nhân Mạng máy tính và truyền thông dữ liệu',
      period: '2021 - 2025',
      description: 'Chuyên ngành Mạng máy tính và truyền thông dữ liệu. Tham gia các dự án nghiên cứu về AI và Machine Learning.',
    },
  ];

  const certificates = [
    {
      name: 'Google Professional Data Analytic',
      issuer: 'Microsoft',
      date: '2025',
      image: '/images/certificates/google-cert.jpg',
      link: '#'
    },
    {
      name: 'Semiconductor: From Materials to Applications',
      issuer: 'Van Lang University',
      date: '2024',
      image: '/images/certificates/semiconductor-cert.jpg',
      link: '#'
    },
    {
      name: 'IBM Data Analysis',
      issuer: 'Microsoft',
      date: '2025',
      image: '/images/certificates/ibm-cert.jpg',
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">Học Vấn</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-purple-100">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6 flex items-center">
            <GraduationCap className="mr-2" />
            Quá Trình Học Tập
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-4">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2 text-indigo-500" />
                  {edu.period}
                </div>
                <h3 className="text-xl font-semibold text-purple-600">{edu.school}</h3>
                <p className="text-indigo-600 mb-2">{edu.degree}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Chứng Chỉ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-1 group-hover:text-pink-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-indigo-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;