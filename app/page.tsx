import React from 'react';
import { Github, Mail, Facebook, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 1. HERO SECTION - PHẦN ĐẦU TRANG */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-6 shadow-xl shadow-blue-500/20">
          <img src="/avatar.jpg" alt="Your Name" className="w-full h-full object-cover" /> 
          {/* LƯU Ý: Thay ảnh avatar.jpg vào thư mục public */}
        </div>
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          CHÀO, TÔI LÀ [TÊN CỦA BẠN]
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Một Product Manager/Developer tập sự đam mê tạo ra các sản phẩm thực tế.
          {/* Sửa dòng giới thiệu của bạn ở đây */}
        </p>
        
        <div className="flex gap-4 mt-8">
          <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Github size={24} /></a>
          <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
        </div>
      </section>

      {/* 2. PROJECTS SECTION - DỰ ÁN */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-500 pl-4">DỰ ÁN NỔI BẬT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card Dự Án 1 - Bạn có thể copy cụm này ra nhiều cái */}
          <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-slate-700">
            <div className="h-48 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 italic font-mono text-sm">[Ảnh dự án 1]</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Tên Dự Án Của Bạn</h3>
              <p className="text-slate-400 text-sm mb-4">Mô tả ngắn gọn về dự án này giúp giải quyết vấn đề gì cho người dùng.</p>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] bg-slate-900 px-2 py-1 rounded border border-slate-600">Next.js</span>
                <span className="text-[10px] bg-slate-900 px-2 py-1 rounded border border-slate-600">Tailwind</span>
              </div>
              <a href="#" className="flex items-center text-sm font-medium text-white hover:underline">
                Xem chi tiết <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
          {/* Hết card dự án */}

        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="text-center py-10 border-t border-slate-800 text-slate-500 text-sm">
        © 2026 Designed by [Tên của bạn]. Built with Next.js.
      </footer>
    </div>
  );
}
