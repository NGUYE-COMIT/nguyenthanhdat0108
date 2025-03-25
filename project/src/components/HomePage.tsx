import React from 'react';
import { Github, Linkedin, Mail, Download, Share2, Globe } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

function HomePage() {
  const handleDownloadCV = () => {
    const cvUrl = 'https://app.enhancv.com/resume/67cb1ca5a38c5e1a2a2d2c54';
    window.open(cvUrl, '_blank');
  };

  const websiteUrl = 'https://nguyenthanhdat.com';

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src="/images/profile/avatar.jpg"
                alt="Profile"
                className="h-48 w-48 object-cover md:h-full md:w-64"
              />
            </div>
            <div className="p-8">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                Nguyễn Thành Đạt
              </div>
              <p className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                <span>Data Analyst</span>
                <a 
                  href={websiteUrl}
                  className="ml-2 text-purple-600 hover:text-pink-600 transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} className="ml-1" />
                  <span className="text-sm ml-1">nguyenthanhdat.com</span>
                </a>
              </p>
              <p className="text-gray-600 mb-6">
                Xin chào! Tôi là Nguyễn Thành Đạt, một Data Analyst mới vào nghề với niềm đam mê khám phá và phân tích dữ liệu. Tôi có nền tảng về [nếu có chuyên ngành liên quan, hãy đề cập], cùng với kỹ năng xử lý dữ liệu bằng các công cụ như SQL, Python, Excel và Power BI.

Tôi yêu thích việc tìm ra những insights từ dữ liệu để hỗ trợ quyết định kinh doanh và tối ưu hóa quy trình. Hiện tại, tôi đang không ngừng học hỏi, trau dồi kỹ năng và mong muốn phát triển sự nghiệp trong lĩnh vực phân tích dữ liệu.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="https://github.com/NGUYE-COMIT" className="text-purple-600 hover:text-pink-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nguyenthanhdat2002/" className="text-purple-600 hover:text-pink-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://mail.google.com/mail/u/0/?pli=1#inbox" className="text-purple-600 hover:text-pink-600 transition-colors">
                  <Mail size={24} />
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Download size={20} className="mr-2" />
                  Tải CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">Kỹ Năng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-3">
                  {['SQL Server', 'MySQL', 'Tableau', 'Power BI', 'Microsoft Excel'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                      </div>
                      <span className="ml-4 text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  {['R', 'Python', 'ETL', 'Linux','Data WareHouse'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                      </div>
                      <span className="ml-4 text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
              <Share2 className="mr-2" />
              Quét mã QR
            </h2>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-inner">
                <QRCodeSVG
                  value={websiteUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                  imageSettings={{
                    src: "/images/profile/logo.png",
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Quét mã QR để truy cập website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;