import React, { useState } from 'react';
import { Search, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Clock, Bell, PlayCircle, CheckCircle } from 'lucide-react';

export default function ToOrangeSupport() {
  const [activeTab, setActiveTab] = useState('guide');
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const menuItems = [
    {
      name: '마음전하기',
      href: '/heart',
      submenu: [
        { name: '편지쓰기', href: '/heart/write' },
        { name: '보낸편지함', href: '/heart/sent' },
        { name: '받은편지함', href: '/heart/inbox' },
        { name: '임시보관함', href: '/heart/draft' }
      ]
    },
    {
      name: '법률도우미',
      href: '/legal',
      submenu: [
        { name: '무료법률상담', href: '/legal/consultation' },
        { name: '나의 상담내역', href: '/legal/history' },
        { name: '변호사 목록', href: '/legal/lawyers' }
      ]
    },
    {
      name: '커뮤니티',
      href: '/community',
      submenu: [
        { name: '자유게시판', href: '/community/free' },
        { name: '법률지식 on', href: '/community/legal-info' },
        { name: 'Q&A게시판', href: '/community/qna' }
      ]
    },
    {
      name: '기부나눔',
      href: '/donation',
      submenu: [
        { name: '기부나눔캠페인', href: '/donation/campaign' },
        { name: '기부나눔 스토리', href: '/donation/story' },
        { name: '후원하기', href: '/donation/support' }
      ]
    },
    {
      name: '라이프센터',
      href: '/lifecenter',
      submenu: [
        { name: '상황별안내', href: '/lifecenter/guide' },
        { name: '준비물체크리스트', href: '/lifecenter/checklist' }
      ]
    },
    {
      name: '고객센터',
      href: '/support',
      active: true,
      submenu: [
        { name: '이용가이드', href: '/support/guide' },
        { name: '공지사항', href: '/support/notice' },
        { name: '1:1문의', href: '/support/inquiry' }
      ]
    }
  ];

  const videoGuides = [
    {
      id: 0,
      title: '편지쓰기방법',
      duration: '3:24',
      description: '수감자에게 편지를 작성하고 발송하는 방법을 안내합니다.'
    },
    {
      id: 1,
      title: '받은편지 확인하는 방법',
      duration: '1:58',
      description: '수감자로부터 받은 답장을 확인하는 방법을 안내합니다.'
    },
    {
      id: 2,
      title: '편지발송조회',
      duration: '2:42',
      description: '발송한 편지의 상태와 배송 현황을 조회하는 방법입니다.'
    },
    {
      id: 3,
      title: '변호사만나는 방법',
      duration: '3:10',
      description: '법률 상담 및 변호사 접견 신청 방법을 안내합니다.'
    }
  ];

  const notices = [
    {
      id: 1,
      title: '연휴 배송 및 고객센터 운영 안내',
      date: '2024.11.20',
      isNew: true
    },
    {
      id: 2,
      title: '개인정보처리방침 개정 안내',
      date: '2024.11.15',
      isNew: true
    },
    {
      id: 3,
      title: '11월 멤버십 특별 혜택 안내',
      date: '2024.11.01',
      isNew: false
    },
    {
      id: 4,
      title: '시스템 점검 완료 안내',
      date: '2024.10.28',
      isNew: false
    }
  ];

  const faqs = [
    {
      id: 1,
      category: '계정',
      question: '비밀번호를 잊어버렸어요. 어떻게 재설정하나요?',
      answer: '로그인 페이지에서 "비밀번호 찾기"를 클릭하시고, 가입하신 이메일 주소를 입력하세요. 비밀번호 재설정 링크가 이메일로 전송됩니다. 이메일이 오지 않는 경우 스팸함을 확인해주시거나 고객센터로 문의해주세요.'
    },
    {
      id: 2,
      category: '결제',
      question: '환불은 어떻게 받을 수 있나요?',
      answer: '구매일로부터 14일 이내 환불이 가능합니다. 마이페이지 > 주문내역에서 해당 주문을 선택하고 환불 신청을 해주세요. 영업일 기준 3-5일 내 처리되며, 결제하신 수단으로 환불됩니다.'
    },
    {
      id: 3,
      category: '결제',
      question: '어떤 결제 수단을 사용할 수 있나요?',
      answer: '신용카드, 체크카드, 실시간 계좌이체, 무통장입금, 간편결제(카카오페이, 네이버페이, 토스) 등 다양한 결제 수단을 지원합니다.'
    },
    {
      id: 4,
      category: '배송',
      question: '배송 조회는 어디서 하나요?',
      answer: '마이페이지 > 주문내역에서 송장번호를 확인하실 수 있으며, 클릭하시면 실시간 배송 현황을 확인하실 수 있습니다. 주문 후 24시간 이내에 송장번호가 등록됩니다.'
    },
    {
      id: 5,
      category: '서비스',
      question: 'To-orange 멤버십 혜택은 무엇인가요?',
      answer: '멤버십 회원은 전 상품 10% 할인, 무료 배송, 전용 고객센터, 신제품 우선 구매, 생일 쿠폰 등의 혜택을 받으실 수 있습니다. 월 9,900원으로 이용 가능합니다.'
    },
    {
      id: 6,
      category: '기술',
      question: '앱이 자꾸 멈춰요. 어떻게 해야 하나요?',
      answer: '앱을 완전히 종료하고 재시작해보세요. 문제가 계속되면 앱을 삭제 후 재설치하거나, 기기를 재부팅해보시기 바랍니다. 그래도 해결되지 않으면 고객센터로 문의해주세요.'
    }
  ];

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }
    alert('문의가 접수되었습니다. 영업일 기준 24시간 내 답변드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', category: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
                To-orange
              </a>
            </div>

            {/* Menu Items */}
            <div className="flex items-center space-x-12">
              {menuItems.map((menu, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(menu.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <a 
                    href={menu.href}
                    className={`text-base font-medium transition-colors block py-5 relative ${
                      menu.active ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                    }`}
                  >
                    {menu.name}
                    {menu.active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></span>
                    )}
                  </a>
                  
                  {/* Submenu */}
                  {hoveredMenu === menu.name && menu.submenu && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[180px]">
                        {menu.submenu.map((item, idx) => (
                          <a 
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors whitespace-nowrap"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Utility Menu */}
            <div className="flex items-center space-x-4">
              <a href="/mypage" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                마이페이지
              </a>
              <span className="text-gray-300">|</span>
              <a href="/logout" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Title Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">고객센터</h1>
          <p className="text-sm text-gray-500 mt-2">궁금한 점을 빠르게 해결해드립니다</p>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-8">
            {[
              { id: 'guide', label: '1:1 이용가이드' },
              { id: 'notice', label: '공지사항' },
              { id: 'faq', label: 'FAQ' },
              { id: 'inquiry', label: '1:1 상담문의' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 1:1 이용가이드 Tab */}
        {activeTab === 'guide' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">영상 튜토리얼</h2>
              <p className="text-gray-600">To-orange 이용 방법을 영상으로 확인하세요</p>
            </div>

            <div className="space-y-6">
              {/* Video Tabs - Horizontal */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {videoGuides.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all whitespace-nowrap flex-shrink-0 ${
                      selectedVideo === video.id
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <PlayCircle size={18} className={`flex-shrink-0 ${
                      selectedVideo === video.id ? 'text-orange-500' : 'text-gray-400'
                    }`} />
                    <div className="text-left">
                      <h3 className={`font-semibold text-sm ${
                        selectedVideo === video.id ? 'text-orange-600' : 'text-gray-900'
                      }`}>
                        {video.title}
                      </h3>
                      <p className="text-xs text-gray-500">{video.duration}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Video Player */}
              <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                  <PlayCircle size={80} className="text-white opacity-80" />
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                    {videoGuides[selectedVideo].duration}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {videoGuides[selectedVideo].title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {videoGuides[selectedVideo].description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {videoGuides[selectedVideo].duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle size={16} />
                        한국어 자막
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 공지사항 Tab */}
        {activeTab === 'notice' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">공지사항</h2>
              <p className="text-gray-600">To-orange의 새로운 소식을 확인하세요</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {notices.map((notice, index) => (
                <div
                  key={notice.id}
                  className={`p-5 hover:bg-gray-50 transition-colors cursor-pointer ${
                    index !== notices.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {notice.isNew && (
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      <h3 className="font-semibold text-gray-900">{notice.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{notice.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">자주 묻는 질문</h2>
              <p className="text-gray-600">고객님들이 자주 문의하시는 내용입니다</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    {openFaq === faq.id ? (
                      <ChevronUp className="text-gray-400" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </button>
                  
                  {openFaq === faq.id && (
                    <div className="px-5 pb-5 pt-2 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 1:1 상담문의 Tab */}
        {activeTab === 'inquiry' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">1:1 상담문의</h2>
              <p className="text-gray-600">문의사항을 남겨주시면 빠르게 답변드리겠습니다</p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-gray-600" size={24} />
                  <h3 className="font-semibold text-gray-900">전화 상담</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">1588-0000</p>
                <p className="text-xs text-gray-500">평일 09:00 - 18:00</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-gray-600" size={24} />
                  <h3 className="font-semibold text-gray-900">이메일</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">support@to-orange.com</p>
                <p className="text-xs text-gray-500">24시간 내 답변</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-gray-600" size={24} />
                  <h3 className="font-semibold text-gray-900">실시간 채팅</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">즉시 연결</p>
                <p className="text-xs text-gray-500">평일 09:00 - 18:00</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      이름 <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      이메일 <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      문의 유형 <span className="text-orange-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">선택하세요</option>
                      <option value="account">계정/로그인</option>
                      <option value="payment">결제/환불</option>
                      <option value="delivery">배송</option>
                      <option value="product">상품</option>
                      <option value="membership">멤버십</option>
                      <option value="etc">기타</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    문의 내용 <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="문의하실 내용을 상세히 작성해주세요"
                  />
                </div>

                <div className="flex items-start gap-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                  <p>
                    영업일 기준 24시간 내 답변드립니다. 급하신 경우 전화 상담(1588-0000)을 이용해주세요.
                  </p>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  문의하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}