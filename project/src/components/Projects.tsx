import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Xây dựng website thương mại điện tử với React, Node.js và MongoDB. Tích hợp thanh toán online và quản lý đơn hàng.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với tính năng real-time collaboration sử dụng Socket.io và React.',
      image: '/images/projects/task-management.jpg',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Image Generator',
      description: 'Ứng dụng tạo hình ảnh sử dụng AI với OpenAI API và Next.js.',
      image: '/images/projects/ai-generator.jpg',
      technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">Dự Án</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-purple-100 transform transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-purple-600 hover:text-pink-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Github
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-purple-600 hover:text-pink-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;