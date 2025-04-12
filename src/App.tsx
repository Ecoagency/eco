import React, { useState } from 'react';
import { Menu, X, ArrowRight, Check, Brain, Rocket, Target, Users, MessageSquare, BarChart2, Puzzle, FileText, DollarSign, HelpCircle } from 'lucide-react';
import StarryBackground from './components/StarryBackground';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ecom from './components/images/ecom.png'
import skin from './components/images/skincare.jpg'
import { motion } from 'framer-motion';
import sulaymon from './components/images/sulaymon.jpeg'
import cro from './components/images/pictureofcro.jpg'
import random from './components/images/random.jpg'
import one from './components/images/1.png'
import two from './components/images/2.png'
import three from './components/images/3.png'
import four from './components/images/4.png'


function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-20 px-6 py-4">
  <div className="container-width flex justify-between items-center">
  <Link to="/" className="text-2xl font-bold gradient-text">
  <img
    src={ecom}
    alt="Logo"
    className="h-16 w-16 rounded-full object-cover"
  />
</Link>



        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#process" className="hover:text-red-500 transition-colors">Process</a>
          <a href="#team" className="hover:text-red-500 transition-colors">Team</a>
          <a href="#faq" className="hover:text-red-500 transition-colors">FAQ</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:text-red-500 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`
          fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-30
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <div className="flex flex-col p-6">
            <button 
              className="self-end text-white p-2 hover:text-red-500 transition-colors mb-8"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-white hover:text-red-500 transition-colors" onClick={closeMenu}>Home</Link>
              <a href="#about" className="text-white hover:text-red-500 transition-colors" onClick={closeMenu}>About</a>
              <a href="#services" className="text-white hover:text-red-500 transition-colors" onClick={closeMenu}>Services</a>
              <a href="#process" className="text-white hover:text-red-500 transition-colors" onClick={closeMenu}>Process</a>
              <a href="#team" className="text-white hover:text-red-500 transition-colors" onClick={closeMenu}>Team</a>
              <a href="#faq" className="text-white hover:text-red-500 transition-colors" onClick={closeMenu}>FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative z-10 section-padding">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-red-600">
          Enhance Your Skincare Brand's Online Presence
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            We create innovative digital solutions that help skincare businesses grow and succeed in the modern world.
          </p>
          <button 
            className="btn-primary"
            onClick={() => navigate('/book')}
          >
            Book a call <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </section>

      

      <section id="about" className="relative z-10 section-padding bg-black/50">
  <div className="container-width">
    {/* About Us heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white">About Us</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative order-first md:order-first">
        <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh]">
          <img
            src={skin}
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="order-last md:order-last">
        <motion.h3
          className="text-3xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Born from a passion for skincare and digital innovation, Ecom Pulse is more than just an agency – it's a movement. We’ve partnered with skincare brands to create impactful online experiences, helping them elevate their digital presence and connect with their audience in meaningful ways.
        </motion.p>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          With years of expertise, we specialize in transforming skincare businesses into digital powerhouses. Our story is built on a foundation of creativity, strategy, and results. We understand the unique needs of skincare brands and provide personalized solutions that deliver measurable growth.
        </motion.p>
      </div>
      
    </div>
  </div>
  <motion.button
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 mt-5 rounded-md hover:opacity-90 transition"
  onClick={() => navigate('/book')}
>
  Partner With Us
</motion.button>

</section>

<section id="results" className="relative z-10 section-padding bg-black/50">
  <div className="container-width">
    <h3 className="text-3xl font-bold mb-6 text-center gradient-text">Our Results</h3>
    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
      Here’s a glimpse of the incredible results we’ve achieved for our clients — scaling brands, boosting revenue, and creating real impact.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {[one, two, three, four].map((image, index) => (
        <div 
          key={index} 
          className="opacity-0 animate-slide-in-left animation-delay"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <img 
            src={image} 
            alt={`Result ${index + 1}`} 
            className="w-full h-64 object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
 

<div className="flex justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 mt-10 rounded-md hover:opacity-90 transition"
    onClick={() => navigate('/book')}
  >
    Book your free call
  </motion.button>
</div>

</section>






<section id="why-choose-us" className="relative z-10 section-padding">
  <div className="container-width">
    <h3 className="text-3xl font-bold mb-12 text-center gradient-text">Why Choose Us</h3>
    <div className="grid md:grid-cols-3 gap-12">
      {[
        { title: 'Data-Driven Approach', description: 'We make decisions based on real data and analytics', icon: <BarChart2 className="text-red-500 mb-4" size={40} /> },
        { title: 'Industry Expertise', description: 'Years of experience in digital marketing and growth', icon: <Users className="text-red-500 mb-4" size={40} /> },
        { title: 'Custom Strategy', description: 'Tailored solutions for your specific business needs', icon: <Puzzle className="text-red-500 mb-4" size={40} /> },
        { title: 'Transparent Reporting', description: 'Clear, regular updates on your campaign performance', icon: <FileText className="text-red-500 mb-4" size={40} /> },
        { title: 'ROI Focused', description: 'We prioritize measurable results and returns', icon: <DollarSign className="text-red-500 mb-4" size={40} /> },
        { title: '24/7 Support', description: 'Always available to address your concerns', icon: <HelpCircle className="text-red-500 mb-4" size={40} /> }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-black p-8 rounded-2xl shadow-lg transition-all transform hover:shadow-2xl hover:border-4 hover:border-red-500 overflow-hidden"
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="flex justify-center items-center mb-6">
            {item.icon}
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center text-white">{item.title}</h4>
          <p className="text-gray-400 text-center">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section id="services" className="relative z-10 section-padding bg-black/50">
  <div className="container-width">
    <h3 className="text-3xl font-bold mb-12 text-center gradient-text">Our Services</h3>
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
      {[
        {
          icon: <Brain className="text-red-500 mb-6" size={40} />,
          title: 'Paid Ads That Scale',
          description: 'Drive high-quality, purchase-ready traffic at the lowest cost through Google Shopping, YouTube, and Meta Ads.',
          details: 'We utilize AI for audience targeting, creative ad campaigns, and retargeting to maximize sales and ROI.'
        },
        {
          icon: <Rocket className="text-red-500 mb-6" size={40} />,
          title: 'Email Marketing & Cart Recovery',
          description: 'Recover abandoned carts and nurture customer relationships through email and SMS marketing.',
          details: 'We create personalized email sequences that re-engage customers and bring them back to complete their purchase.'
        },
        {
          icon: <Target className="text-red-500 mb-6" size={40} />,
          title: 'AI Services for E-commerce Growth',
          description: 'Enhance e-commerce operations with AI-powered tools for customer support, influencer content, and more.',
          details: 'Our AI-driven chatbots, automated content generation, and product recommendations boost conversions.'
        }
      ].map((service, index) => (
        <div 
          key={index} 
          className="p-10 rounded-3xl border border-transparent bg-white/5 text-left transform transition duration-300 ease-in-out hover:border-red-500 hover:bg-white/10"
        >
          {service.icon}
          <h4 className="text-2xl font-semibold mb-4 text-white">{service.title}</h4>
          <p className="text-gray-400 text-lg mb-4">{service.description}</p>
          <p className="text-gray-500 text-sm">{service.details}</p>
        </div>
      ))}
    </div>
  

<div className="flex justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 mt-6 rounded-md hover:opacity-90 transition"
    onClick={() => navigate('/book')}
  >
    Partner With Us
  </motion.button>
</div>

  </div>
</section>



<section id="process" className="relative z-10 section-padding bg-black/50">
  <div className="container-width overflow-hidden">
    <h3 className="text-3xl font-bold mb-12 text-center gradient-text">Our Process</h3>
    <div className="relative">
      <div className="process-scroll-container flex gap-10 px-4 animate-scroll whitespace-nowrap">
        {[
          {
            title: '3 Days',
            description: [
              'Account audits and competitor research',
              'Goal setting and KPI alignment',
              'Pixel tracking and CRM setup',
              'Scaling optimization plan'
            ]
          },
          {
            title: '7 Days',
            description: [
              'Launch initial campaigns',
              'Test multiple creative angles',
              'Analyze CTR and CPC data',
              'Set up A/B testing structure'
            ]
          },
          {
            title: '30 Days',
            description: [
              'Scale winning ads',
              'Start Lookalike audiences',
              'Landing page optimization',
              'Launch retargeting campaigns'
            ]
          },
          {
            title: '50 Days',
            description: [
              'Deep dive into performance metrics',
              'Refresh creatives',
              'Test dayparting strategies',
              'Advanced bid testing'
            ]
          },
          {
            title: '60 Days',
            description: [
              'Aggressive scaling',
              'Expand to new audiences',
              'Launch multi-channel retargeting',
              'Test new offers'
            ]
          },
          {
            title: '90 Days',
            description: [
              'Full funnel audit',
              'Build evergreen campaigns',
              'Prepare for long-term scaling',
              'Launch new creative strategies'
            ]
          }
        ].map((step, index) => (
          <div
            key={index}
            className="min-w-[240px] md:min-w-[280px] lg:min-w-[300px] h-[300px] flex-shrink-0 p-6 rounded-3xl border border-transparent bg-white/5 text-left transition-colors duration-300 hover:border-red-500 hover:bg-white/10 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                {step.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>





<section id="our-team" className="relative z-10 section-padding bg-black/50">
  <div className="container-width">
    <h3 className="text-3xl font-bold mb-12 text-center gradient-text">Our Team</h3>
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
      {[
        {
          name: 'Sulaymon Abdullaev',
          position: 'CEO',
          description: 'Sulaymon is the visionary leader of our team, ensuring that we stay on the cutting edge of digital marketing.',
          image: sulaymon
        },
        {
          name: 'Hoor Ul Ain',
          position: 'CRO Specialist',
          description: 'Hoor Ul Ain has generated 15+ million in sales for 20+ businesses across skincare niches.',
          image: cro
        },
        {
          name: 'Alex Johnson',
          position: 'Lead Developer',
          description: 'Alex is the technical mastermind, building seamless and efficient solutions to support our marketing efforts.',
          image: random
        }
      ].map((member, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />
          <h4 className="text-2xl font-semibold text-white mb-2">{member.name}</h4>
          <p className="text-gray-400 text-lg mb-4">{member.position}</p>
          <p className="text-gray-500">{member.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>







      <section id="faq" className="relative z-10 section-padding">
        <div className="container-width">
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What happens during the strategy call?',
                answer: 'During our 30-minute strategy call, we will discuss your business goals, current challenges, and potential solutions. We will also outline how our team can help you achieve your objectives.'
              },
              {
                question: 'How do you measure success?',
                answer: 'We establish clear KPIs aligned with your business goals and provide regular reports on progress, ROI, and key metrics.'
              },
              {
                question: 'What makes your approach different?',
                answer: 'Our data-driven methodology combined with personalized strategies ensures that every solution is tailored to your specific needs and market conditions.'
              },
              {
                question: 'How long until I see results?',
                answer: 'While results vary by project, we typically begin seeing measurable improvements within the first 30-60 days of implementation.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide continuous support and optimization to ensure long-term success and sustainable growth.'
              },
              {
                question: 'What industries do you work with?',
                answer: 'We work with businesses across various industries, with particular expertise in technology, e-commerce, and professional services.'
              }
            ].map((item, index) => (
              <div key={index} className="faq-item">
                <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
                <p className="text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 section-padding bg-black/80">
        <div className="container-width">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Your Agency</h4>
              <p className="text-gray-400">Transforming businesses through innovative digital solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-red-500">About</a></li>
                <li><a href="#services" className="hover:text-red-500">Services</a></li>
                <li><a href="#process" className="hover:text-red-500">Process</a></li>
                <li><a href="#team" className="hover:text-red-500">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@youragency.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Digital Street</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-red-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-red-500">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-red-900/20 text-center text-gray-400">
            <p>&copy; 2025 Your Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function BookingPage() {
  return (
    <div className="relative z-10 min-h-screen section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Book Your Free Strategy Call</h2>
          
          <div className="card mb-12">
            <h3 className="text-2xl font-semibold mb-6">Why Our Strategy Call is Different</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">What You'll Get:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>Personalized growth strategy tailored to your business</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>Clear action steps for immediate implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>ROI projection and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>Competitive analysis insights</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Our Commitment:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>No hard selling - just valuable insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>Actionable advice you can use immediately</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>Expert analysis of your current strategy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-500 mr-3 mt-1" size={20} />
                    <span>100% satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary">
              Schedule Your Call <MessageSquare className="inline ml-2" size={20} />
            </button>
            <p className="mt-4 text-gray-400">30-minute free consultation. No obligations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white">
        <StarryBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;