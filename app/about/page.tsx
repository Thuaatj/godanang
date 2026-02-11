// components/AboutPage.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <main className="bg-gray-50/50 overflow-hidden font-body">
      {/* 1. Hero – Sang trọng, immersive */}
      <section
        ref={addRef}
        className="relative h-screen min-h-[720px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559810467-1f518e1e0d0e?auto=format&fit=crop&q=80&w=2070"
            alt="Da Nang skyline at sunset"
            fill
            className="object-cover brightness-[0.65] scale-105 transition-transform duration-[35s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-none mb-6 md:mb-10 drop-shadow-2xl">
            GO DA NANG
            <br />
            <span className="text-accent">Trải Nghiệm Đà Nẵng Theo Cách Riêng Của Bạn</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-10 md:mb-14 font-light leading-relaxed opacity-95">
            Chúng tôi là cầu nối giữa du khách và những trải nghiệm đích thực tại Đà Nẵng – Hội An. 
            Từ villa sang trọng bên sông Hàn, tour riêng tư khám phá Hội An cổ kính, đến những hoạt động bản địa độc đáo – 
            mọi hành trình đều được thiết kế riêng, không đại trà, chỉ dành cho bạn.
          </p>
          <a
            href="#story"
            className="inline-flex items-center gap-4 bg-primary hover:bg-teal-dark text-white font-medium text-lg px-10 py-5 rounded-full transition-all duration-400 shadow-premium hover:shadow-xl hover:scale-105 group"
          >
            Khám Phá Ngay
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>
      </section>

      {/* 2. Câu chuyện */}
        <section id="story" ref={addRef} className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-16 md:mb-20 text-gray-900 tracking-tight">
            Câu Chuyện Đằng Sau GO DA NANG
            </h2>

            <div className="grid lg:grid-cols-[50%_50%] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Bên trái - Text chiếm 60% */}
            <div className="lg:pr-8">
                <div
                    className="
                    ml-auto
                    max-w-[560px] xl:max-w-[620px]
                    space-y-8 md:space-y-6
                    text-lg md:text-xl lg:text-xl
                    text-gray-700 leading-[1.8]
                    text-justify
                    "
                >
                    <p>
                     GO DA NANG được tạo ra từ mong muốn đơn giản:
                    </p>

                    <p>
                    Giúp du khách <b>dễ dàng tìm đúng nơi ở – đúng tour – đúng trải nghiệm</b>, thay vì phải mất thời gian lọc giữa quá nhiều thông tin rời rạc.
                    </p>

                    {/* <p className="font-semibold text-primary text-xl lg:text-2xl italic text-left">
                    dễ dàng tìm đúng nơi ở – đúng tour – đúng trải nghiệm
                    </p> */}

                    <p className="text-gray-600">
                    Chúng tôi bắt đầu từ việc làm việc trực tiếp với các đối tác địa phương:
                    chủ villa, đơn vị tour, spa và những người đang sống – làm du lịch tại Đà Nẵng.
                    Từ đó chọn lọc, kiểm chứng và giới thiệu những dịch vụ thực sự phù hợp với từng nhu cầu khác nhau.
                    </p>
                </div>
            </div>
            {/* Bên phải - Ảnh chiếm 40% */}
            <div className="relative overflow-hidden shadow-soft-xl lg:h-[520px] lg:min-h-[520px] aspect-[4/3] lg:aspect-auto">
                <Image
                src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=1974"
                alt="Local team crafting authentic experiences in Da Nang - Hoi An"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Overlay nhẹ để tăng chiều sâu (optional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
            </div>
        </div>
        </section>

      {/* 3. Đang làm gì mỗi ngày */}
      <section ref={addRef} className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-20 text-gray-900 tracking-tight">
            GO DA NANG Làm Gì Mỗi Ngày?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Chọn Lọc Nghiêm Ngặt',
                desc: 'Mọi villa, tour, spa, trải nghiệm đều được kiểm chứng thực tế, đánh giá chân thực từ chính chúng tôi và du khách trước đó.',
              },
              {
                icon: '🤝',
                title: 'Kết Nối Chân Thành',
                desc: 'Mang du khách đến gần hơn với con người địa phương, văn hóa và câu chuyện đằng sau mỗi dịch vụ – không chỉ là du lịch, mà là trải nghiệm sống.',
              },
              {
                icon: '📍',
                title: 'Cá Nhân Hóa Tối Đa',
                desc: 'Dựa trên thời gian, ngân sách, sở thích và phong cách của bạn, chúng tôi gợi ý những hành trình hoàn hảo, không rập khuôn.',
              },
              {
                icon: '🌱',
                title: 'Du Lịch Bền Vững',
                desc: 'Ưu tiên các đối tác thân thiện với môi trường, hỗ trợ cộng đồng địa phương, góp phần bảo tồn văn hóa và thiên nhiên Đà Nẵng – Hội An.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-3xl shadow-soft-xl hover:shadow-premium transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-accent/30"
              >
                <div className="text-6xl mb-6 text-primary/80 group-hover:text-accent transition-colors duration-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Giá trị cốt lõi */}
      <section ref={addRef} className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-20 text-gray-900 tracking-tight">
            Giá Trị Cốt Lõi Của Chúng Tôi
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Chân Thật', desc: 'Thông tin minh bạch, không tô vẽ, không phóng đại – chỉ có những trải nghiệm thực sự đáng giá.' },
              { title: 'Chọn Lọc', desc: 'Chúng tôi không làm nhiều – chúng tôi chỉ làm những gì thực sự xuất sắc và phù hợp nhất.' },
              { title: 'Địa Phương Hóa', desc: 'Tôn vinh văn hóa, con người và bản sắc độc đáo của Đà Nẵng – Hội An qua từng dịch vụ.' },
              { title: 'Khách Hàng Là Trung Tâm', desc: 'Mọi hành trình đều bắt nguồn từ nhu cầu, sở thích và mong muốn thực sự của bạn.' },
              { title: 'Bền Vững', desc: 'Phát triển du lịch hài hòa, hỗ trợ cộng đồng địa phương và bảo vệ môi trường cho thế hệ sau.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-teal-50/40 p-8 rounded-3xl shadow-soft-xl hover:shadow-premium transition-all duration-500 text-center border border-teal-100 hover:border-accent/40 group"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tầm nhìn & Sứ mệnh */}
      <section ref={addRef} className="py-24 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-teal-dark text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-20 tracking-tight">Tầm Nhìn & Sứ Mệnh</h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-white/15 backdrop-blur-lg p-10 rounded-3xl shadow-premium border border-white/10">
              <h3 className="text-3xl font-heading font-bold mb-8 text-accent">🎯 Tầm Nhìn</h3>
              <p className="text-xl leading-relaxed opacity-95">
                Trở thành nền tảng du lịch địa phương uy tín hàng đầu miền Trung Việt Nam – nơi hội tụ mọi trải nghiệm chất lượng cao, chân thực và cá nhân hóa trong một hệ sinh thái liền mạch, đáng tin cậy.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-lg p-10 rounded-3xl shadow-premium border border-white/10">
              <h3 className="text-3xl font-heading font-bold mb-8 text-accent">🚀 Sứ Mệnh</h3>
              <ul className="text-left text-xl space-y-6 list-none">
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl">•</span>
                  Đơn giản hóa việc lên kế hoạch du lịch, giúp bạn tiết kiệm thời gian và công sức
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl">•</span>
                  Mang những trải nghiệm bản địa chất lượng cao đến gần hơn với du khách quốc tế và trong nước
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl">•</span>
                  Đồng hành cùng đối tác địa phương xây dựng một mô hình du lịch bền vững, có trách nhiệm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cam kết */}
      <section ref={addRef} className="py-24 md:py-32 lg:py-40 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-20 tracking-tight">Cam Kết Từ GO DA NANG</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Thông tin minh bạch, rõ ràng, không ẩn giấu bất kỳ chi phí nào',
              'Ưu tiên trải nghiệm thực tế của khách hàng – mọi đánh giá đều được trân trọng',
              'Hỗ trợ 24/7 – đồng hành cùng bạn trước, trong và sau chuyến đi',
              'Không ngừng cải thiện, lắng nghe và nâng cấp chất lượng dịch vụ mỗi ngày',
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-premium border border-white/10 hover:border-accent/50 transition-all duration-400"
              >
                <p className="text-lg leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Đối tác */}
      <section ref={addRef} className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16 md:mb-20 text-gray-900 tracking-tight">
            Đối Tác & Nhà Đầu Tư Đồng Hành
          </h2>

          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            GO DA NANG tự hào hợp tác cùng những đơn vị lưu trú, tour operator và dịch vụ cao cấp nhất tại Đà Nẵng – Hội An. 
            Chúng tôi luôn mở rộng vòng tay chào đón những đối tác chia sẻ chung tầm nhìn về du lịch chất lượng, bền vững và tôn trọng bản địa.
          </p>

          {/* Logo placeholder – thay bằng logo thật */}
          <div className="flex flex-wrap justify-center gap-12 opacity-90">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-semibold shadow-md">Partner 1</div>
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-semibold shadow-md">Partner 2</div>
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-semibold shadow-md">Partner 3</div>
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-semibold shadow-md">Partner 4</div>
          </div>
        </div>
      </section>
    </main>
  );
}