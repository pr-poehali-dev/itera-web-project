import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "Code",
      title: "Внедрение цифровых инструментов",
      description: "CRM, ERP системы и интеграции для автоматизации бизнес-процессов",
      image: "/img/4cd7a0df-eee2-4dd7-b912-41c4dde30bd2.jpg"
    },
    {
      icon: "Settings",
      title: "B2B-автоматизация процессов", 
      description: "Оптимизация рабочих процессов и повышение производительности",
      image: "/img/650487d8-d87e-4e89-8883-d451d9c5d036.jpg"
    },
    {
      icon: "Monitor",
      title: "Разработка корпоративного ПО",
      description: "Индивидуальные решения под специфику вашего бизнеса",
      image: "/img/a7203693-303c-4163-a8ef-c1ab13a69018.jpg"
    },
    {
      icon: "Brain",
      title: "Интеграция AI/ML",
      description: "Внедрение искусственного интеллекта для анализа данных",
      image: "/img/3dda3c65-84ea-48de-a6ee-8bf790d39a0f.jpg"
    }
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Работаем быстро и гибко",
      description: "Agile-подход к разработке и быстрые итерации"
    },
    {
      icon: "Target",
      title: "Простые решения для сложных задач",
      description: "Делаем сложное простым и понятным"
    },
    {
      icon: "Rocket",
      title: "Продуктовый подход",
      description: "Фокус на результат и долгосрочную ценность"
    },
    {
      icon: "Award",
      title: "Опыт в корпоративных проектах",
      description: "Успешная работа с крупным бизнесом"
    }
  ];

  const cases = [
    {
      title: "Автоматизация логистики",
      description: "Внедрили WMS-систему для крупного ритейлера",
      result: "Снижение затрат на 40%",
      metric: "40%"
    },
    {
      title: "CRM-система для производства",
      description: "Разработали корпоративную CRM под специфику клиента",
      result: "Рост продаж на 60%",
      metric: "60%"
    },
    {
      title: "AI-аналитика для финтеха",
      description: "Система прогнозирования рисков на основе ML",
      result: "Точность прогнозов 95%",
      metric: "95%"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      position: "CTO, TechCorp",
      text: "ITERA BUSINESS помогла нам полностью трансформировать IT-инфраструктуру. Результат превзошел ожидания.",
      avatar: "👨‍💼"
    },
    {
      name: "Мария Сидорова", 
      position: "Директор по развитию, InnovateCo",
      text: "Профессиональный подход и качественное решение. Рекомендуем как надежного партнера.",
      avatar: "👩‍💼"
    },
    {
      name: "Дмитрий Козлов",
      position: "CEO, DataFlow",
      text: "Быстро поняли наши потребности и предложили оптимальное решение. Отличная команда!",
      avatar: "👨‍💻"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/bf95222f-a41a-4c77-aef3-b08445f466e3.jpg" 
              alt="ITERA BUSINESS" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-900 font-['Inter']">ITERA BUSINESS</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Получить консультацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/662af947-f0fd-41fb-9203-43505d968916.jpg" 
            alt="Tech background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors animate-bounce-in">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Цифровая трансформация бизнеса
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Inter'] leading-tight animate-slide-in-left">
              Цифровая трансформация 
              <span className="text-primary block animate-slide-in-right">вашего бизнеса</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Инновационные IT-решения для роста и эффективности. 
              Помогаем компаниям достигать новых высот с помощью современных технологий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 hover:scale-105 transition-transform animate-glow">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:scale-105 transition-transform">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Hexagon decorations */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-primary/30 transform rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary/10 transform rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-6 h-6 border border-primary/20 transform rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Network connection lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#2563EB" strokeWidth="1" className="animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="#2563EB" strokeWidth="1" className="animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="#2563EB" strokeWidth="1" className="animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="2s" />
            </line>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter']">Что мы делаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем комплексные IT-решения для цифровой трансформации вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group hover:shadow-lg transition-all duration-500 border-0 shadow-md hover:shadow-xl hover:-translate-y-2 animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="aspect-video overflow-hidden rounded-t-lg mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-bounce-in">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-['Inter'] group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter']">Почему мы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши принципы работы и подход к решению задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className={`flex gap-4 group animate-slide-in-left`} style={{animationDelay: `${index * 0.3}s`}}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                  <Icon name={advantage.icon as any} size={24} className="text-primary group-hover:animate-bounce-in" />
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Inter'] group-hover:text-primary transition-colors">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter']">Кейсы внедрения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры успешных проектов и достигнутых результатов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className={`group hover:shadow-lg transition-all duration-500 border-0 shadow-md hover:shadow-xl hover:-translate-y-2 animate-bounce-in`} style={{animationDelay: `${index * 0.4}s`}}>
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="text-4xl font-bold text-primary mb-2 font-['Inter'] group-hover:animate-glow relative z-10">{caseItem.metric}</div>
                  <CardTitle className="text-xl font-['Inter'] group-hover:text-primary transition-colors relative z-10">{caseItem.title}</CardTitle>
                  <CardDescription className="text-gray-600 relative z-10">
                    {caseItem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-green-600 font-medium group-hover:scale-105 transition-transform duration-300">
                    <Icon name="TrendingUp" size={16} className="group-hover:animate-bounce-in" />
                    {caseItem.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter']">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас руководители компаний
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`border-0 shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 animate-slide-in-right`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-6 relative">
                  <div className="absolute top-4 right-4 text-primary/20 text-6xl leading-none font-serif">"</div>
                  <div className="text-4xl mb-4 group-hover:animate-bounce-in transition-all duration-300 group-hover:scale-110">{testimonial.avatar}</div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed relative z-10">"{testimonial.text}"</p>
                  <div className="relative z-10">
                    <div className="font-semibold text-gray-900 font-['Inter'] group-hover:text-primary transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/60 group-hover:to-primary/20 transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/img/8e26b31f-dd40-4459-bddf-96ba520b960b.jpg" 
            alt="Network background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary/15 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter'] animate-fade-in">
              Расскажите о вашем бизнесе
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-slide-in-left">
              Мы предложим оптимальное решение для цифровой трансформации
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-md"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-md"
                />
              </div>
              <Textarea
                placeholder="Опишите ваш проект или задачу"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-md"
              />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 animate-glow">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить запрос
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/bf95222f-a41a-4c77-aef3-b08445f466e3.jpg" 
                  alt="ITERA BUSINESS" 
                  className="w-8 h-8 invert"
                />
                <span className="text-xl font-bold font-['Inter']">ITERA BUSINESS</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Цифровая трансформация и автоматизация процессов для B2B-сегмента. 
                Инновационные решения для роста вашего бизнеса.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Email
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-['Inter']">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Цифровые инструменты</li>
                <li>Автоматизация процессов</li>
                <li>Корпоративное ПО</li>
                <li>AI/ML решения</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-['Inter']">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@iterabusiness.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ITERA BUSINESS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;