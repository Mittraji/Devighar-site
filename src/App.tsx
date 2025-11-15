import { Mail, Instagram, MapPin, Home, Utensils, Flower2, Users, BedDouble } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const threshold = 50; // min swipe distance in px

    if (diff > threshold) {
      // swipe right → previous
      setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    } else if (diff < -threshold) {
      // swipe left → next
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }

    setTouchStartX(null);
  };

  const galleryImages = [
    'Corner pic.png',
    'Shiva.png',
    'DeviGhar background.png',
    'Entrance.png',
    'Seating area 1.png',
    'room 1.png',
    'Flower mirror.png',
    'Seating area 3.png',
    'room 2.png',
    'Hanuman.png',
    'Hanuman side.png',
    'Sahadev.png',
    'Shiva close.png',
    'room 3.png',
    'Temple.png',
    'Temple close.png',
    'Food.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDE6E9]">
      <section className="relative h-[80vh] flex items-center justify-center bg-[#FDE6E9]">
  <img
    src="Devighar no email.png"
    className="w-[280px] md:w-[380px] lg:w-[450px] h-auto object-contain"
  />
      </section>
        
      <section className="pt-0 pb-4 px-6 md:px-12 bg-[#FDE6E9]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal type="fadeDown" delay={0}>
            <h2 className="font-serif text-5xl md:text-6xl text-[#B55676] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              What is Devi Ghar
            </h2>
          </ScrollReveal>
           <ScrollReveal type="fadeIn" delay={0.1}>
      <div className="w-24 h-1 bg-gradient-to-r from-[#D67A99] via-[#D6A24C] to-[#D67A99] mx-auto mb-12" />
    </ScrollReveal>

    {/* 🌸 Four Pillars Section */}
    <ScrollReveal type="fadeIn" delay={0.15}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-16 text-center">
        {/* Yoga Shala */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D67A99] to-[#B55676] flex items-center justify-center mb-4">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h3
            className="font-serif text-xl text-[#B55676]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Yoga Shala
          </h3>
          <p
            className="text-[#B55676]/90 mt-2 text-sm leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            A bright, serene, calm space surrounded by mountain views.
          </p>
        </div>

        {/* Meals */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D6A24C] to-[#D67A99] flex items-center justify-center mb-4">
            <Utensils className="w-8 h-8 text-white" />
          </div>
          <h3
            className="font-serif text-xl text-[#B55676]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sattvic Meals
          </h3>
          <p
            className="text-[#B55676]/90 mt-2 text-sm leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Nourishing vegetarian food prepared with love and devotion each day.
          </p>
        </div>

        {/* Rooms */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B55676] to-[#D6A24C] flex items-center justify-center mb-4">
            <BedDouble className="w-8 h-8 text-white" />
          </div>
          <h3
            className="font-serif text-xl text-[#B55676]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Peaceful Rooms
          </h3>
          <p
            className="text-[#B55676]/90 mt-2 text-sm leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Clean, comfortable rooms that reflect simplicity, calm, and care.
          </p>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D67A99] to-[#D6A24C] flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3
            className="font-serif text-xl text-[#B55676]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Retreat Support
          </h3>
          <p
            className="text-[#B55676]/90 mt-2 text-sm leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Guidance and care for teachers and guests, so you can simply arrive and be.
          </p>
        </div>
      </div>
    </ScrollReveal>
          <ScrollReveal type="fadeIn" delay={0.1}>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D67A99] via-[#D6A24C] to-[#D67A99] mx-auto mb-12" />
          </ScrollReveal>
          <ScrollReveal type="fadeUp" delay={0.2}>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border-2 border-[#D67A99]/30 shadow-lg">
              <p className="text-lg md:text-xl text-[#B55676] leading-relaxed mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                Devi Ghar is a peaceful guest house and retreat space in Tapovan, Rishikesh, created for those who wish to live close to nature and practice with awareness. Surrounded by the Himalayan foothills and blessed by the flow of the Ganga, it offers a simple and sacred environment for rest, yoga, and inner reflection.
    </p>

    <p className="text-lg md:text-xl text-[#B55676] leading-relaxed mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
      Guests are invited to join daily yoga and meditation, take part in Vedic ceremonies, poojas, and kirtan, or simply enjoy the quiet rhythm of mountain life. The rooms are beautifully designed with care and cleanliness, offering comfort while keeping a natural and traditional feel. Fresh, sattvic meals are lovingly prepared with local ingredients, nourishing both body and spirit.
    </p>

    <p className="text-lg md:text-xl text-[#B55676] leading-relaxed mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
      Evenings often bring together community through song, fire rituals, or silent sitting under the stars. Devi Ghar means “the home of the Divine”, a place where every guest is invited to slow down, reconnect, and experience the stillness that is already within.
    </p>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-[#FDE6E9] to-white/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal type="fadeIn">
            <h2 className="font-serif text-5xl md:text-6xl text-[#B55676] mb-16 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Sacred Space
            </h2>
          </ScrollReveal>
        </div>

  <ScrollReveal type="scaleUp">
  <div className="flex flex-col items-center gap-6">
    {/* image frame */}
    <div
  className="relative w-full max-w-[470px] aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#D6A24C] shadow-2xl bg-[#FDE6E9]"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
      {galleryImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
  src={img}
  alt={`Devi Ghar space ${idx + 1}`}
  className="h-full w-full object-cover"
/>
        </div>
      ))}
    </div>

    {/* dots */}
    <div className="flex gap-3 justify-center">
      {galleryImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            idx === currentSlide
              ? 'bg-[#D6A24C] w-8'
              : 'bg-[#B55676]/30 hover:bg-[#B55676]/60'
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  </div>
</ScrollReveal>
</section>

      <section className="py-8 px-6 md:px-4 bg-gradient-to-b from-white/50 to-[#FFFBF5]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal type="fadeIn">
            <h2 className="font-serif text-5xl md:text-6xl text-[#B55676] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Host Your Retreat or Join a Retreat
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fadeIn" delay={0.1}>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D67A99] via-[#D6A24C] to-[#D67A99] mx-auto mb-16" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
            <ScrollReveal type="fadeUp">
               <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#D67A99]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full min-h-[480px] flex flex-col">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D67A99] to-[#B55676] flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#B55676] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Beautiful Yoga Shala
                </h3>
                <p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  The Yoga Shala at Devi Ghar is a calm and open space surrounded by mountain views and the gentle sound of the Ganga. Filled with natural light and fresh air, it offers the perfect setting for yoga, meditation, and chanting.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  The hall’s clean, minimal design supports stillness and presence. Morning practices begin in the soft light of sunrise, while evenings close with quiet reflection or the uplifting sound of kirtan.
</p>

<p className="text-[#B55676] leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
It’s a space made for connection, grounded, serene, and deeply attuned to the sacred rhythm of Rishikesh.
</p>
              </div>
            </ScrollReveal>

            <ScrollReveal type="fadeUp">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#D67A99]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D67A99] to-[#B55676] flex items-center justify-center mb-6">
                  <Flower2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#B55676] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Comfortable Rooms and Stay
                </h3>
                <p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  At Devi Ghar, each room is created to offer a sense of peace, cleanliness, and comfort. The spaces are bright, simple, and thoughtfully designed, carrying the quiet energy of the surrounding mountains.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  All rooms include comfortable double beds, attached bathrooms, air conditioning, and Wi-Fi, with some opening to views of hills and sunlight-filled corners. Fresh meals and morning tea add warmth to your stay.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  It’s a homely, relaxed environment, a place to rest, read, or simply be, where hospitality is heartfelt and every detail feels personal.
</p>

              </div>
            </ScrollReveal>

            <ScrollReveal type="fadeUp">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#D67A99]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D67A99] to-[#B55676] flex items-center justify-center mb-6">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#B55676] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Nourishing Vegetarian Meals
                </h3>
                <p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  Every meal at Devi Ghar is lovingly prepared by Sahadev Rana, whose fresh, sattvic cooking is one of the most cherished parts of the experience. His food is simple, nourishing, and filled with care, bringing everyone together around the table.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  Before dinner, guests often gather to chant the Hanuman Chalisa, filling the space with devotion and peace. It’s a gentle ritual that deepens connection and gratitude before sharing the meal.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
Food here is more than nourishment, it’s a daily expression of love, community, and sacred simplicity.
</p>

              </div>
            </ScrollReveal>

            <ScrollReveal type="fadeUp">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#D67A99]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D67A99] to-[#B55676] flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#B55676] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Retreat Support & Guidance
                </h3>
                <p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  Devi Ghar offers complete support for teachers and groups wishing to host meaningful retreats. Our team takes care of the practicalities so you can focus fully on guiding your participants.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  From arranging rooms, meals, and yoga spaces to helping with ceremonies, schedules, and transport, we handle the details with ease and care.
</p>

<p className="text-[#B55676] leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
  Hosting here feels natural and heart-centered, everything flows smoothly so your retreat unfolds with harmony, trust, and grace.
</p>

              </div>
            </ScrollReveal>
          </div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center mt-8">
  <button
    onClick={scrollToContact}
    className="bg-gradient-to-r from-[#D67A99] to-[#B55676] text-white px-10 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-80 whitespace-nowrap text-center"
    style={{ fontFamily: 'Lato, sans-serif' }}
  >
    Host your retreat at Devi Ghar
  </button>

  <a
    href="https://bookretreats.com/r/7-day-non-dual-yoga-awakening-retreat-in-rishikesh-india"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-[#B55676] to-[#D67A99] text-white px-10 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-80 whitespace-nowrap text-center flex justify-center"
    style={{ fontFamily: 'Lato, sans-serif' }}
  >
    Join a retreat
  </a>
</div>
</div>
</section>

      <section className="py-24 px-6 md:px-12 bg-[#FDE6E9] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Flower2 className="w-96 h-96 text-[#D67A99]" strokeWidth={0.5} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal type="fadeIn">
            <h2 className="font-serif text-5xl md:text-6xl text-[#B55676] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rishikesh — Where the Ganga Whispers to the Soul
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fadeIn" delay={0.1}>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D67A99] via-[#D6A24C] to-[#D67A99] mx-auto mb-12" />
          </ScrollReveal>

          <ScrollReveal type="fadeUp" delay={0.2}>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 border-2 border-[#D67A99]/30 shadow-lg mb-12">
              <p className="text-lg md:text-xl text-[#B55676] leading-relaxed mb-6 text-center" style={{ fontFamily: 'Lato, sans-serif' }}>
  Rishikesh rests at the meeting point of mountain and river, where the Himalayan foothills descend gracefully to meet Mother Ganga, the eternal flow of purity and awakening. Known across the world as the yoga capital of India, this sacred town has for centuries called to seekers, mystics, and wanderers of truth.
</p>

<p className="text-lg md:text-xl text-[#B55676] leading-relaxed mb-6 text-center" style={{ fontFamily: 'Lato, sans-serif' }}>
  The Ganga is not merely a river, she is a living presence, a goddess, a song of remembrance. Her waters carry prayers, stories, and blessings from the high Himalayas, washing away the noise of the world. To sit by her banks at dawn or watch her shimmer under the evening lamps is to feel the pulse of the divine within one’s own heart.
</p>

<p className="text-lg md:text-xl text-[#B55676] leading-relaxed mb-6 text-center" style={{ fontFamily: 'Lato, sans-serif' }}>
  At Devi Ghar, you are invited to live in rhythm with this sacred landscape, to wake to the sound of the river, practice yoga as the sun rises over the hills, share nourishing food, and rest in stillness as the Ganga sings outside your door. Around her, ancient temples and ashrams echo with chants, the air carries the scent of incense and flowers, and the mountain winds move like whispers of meditation.
</p>
            </div>
          </ScrollReveal>

          <ScrollReveal type="scaleUp" delay={0.3}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D6A24C]">
              <img
                src="Ganga small.png"
                alt="Rishikesh Ganges"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-2 px-6 md:px-12 bg-gradient-to-b from-[#FDE6E9] to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal type="fadeIn">
            <h2 className="font-serif text-5xl md:text-6xl text-[#B55676] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              <MapPin className="inline-block w-12 h-12 mb-2 text-[#D67A99]" />
              <br />
              Find Us
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fadeIn" delay={0.1}>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D67A99] via-[#D6A24C] to-[#D67A99] mx-auto mb-16" />
          </ScrollReveal>

          <ScrollReveal type="scaleUp" delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D6A24C]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.547136343291!2d78.316153!3d30.1296438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917001992778d%3A0xa2d3e622406f1e87!2sDevi%20ghar!5e0!3m2!1sen!2sin!4v1730494234562!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Devi Ghar Location"
            />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal type="fadeIn">
            <Flower2 className="w-16 h-16 mx-auto mb-8 text-[#D67A99]" strokeWidth={1.5} />
          </ScrollReveal>
          <ScrollReveal type="fadeIn" delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl text-[#B55676] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Connect With Us
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fadeIn" delay={0.2}>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D67A99] via-[#D6A24C] to-[#D67A99] mx-auto mb-16" />
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ScrollReveal type="fadeUp" delay={0.3}>
              <a
                href="mailto:devigharbooking@gmail.com"
                className="group flex items-center gap-3 bg-gradient-to-r from-[#D67A99] to-[#B55676] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                <span className="text-lg font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>
                  devigharbooking@gmail.com
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal type="fadeUp" delay={0.3}>
              <a
                href="https://www.instagram.com/devigharrishikesh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-[#D67A99] to-[#B55676] text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-6 h-6" />
                <span className="text-lg font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>
                  @devigharrishikesh
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-[#D6A24C] to-[#B8934A] py-12 text-center">
        <ScrollReveal type="fadeIn">
          <Flower2 className="w-12 h-12 mx-auto mb-4 text-white" strokeWidth={1.5} />
        </ScrollReveal>
        <ScrollReveal type="fadeIn" delay={0.1}>
          <p className="text-white text-2xl font-serif tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
            www.devighar.com
          </p>
        </ScrollReveal>
      </footer>
    </div>
  );
}

export default App;
