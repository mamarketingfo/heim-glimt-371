import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna Petersen',
      location: 'Tórshavn',
      rating: 5,
      text: 'Fantastiskt arbeiði! Mitt heima hevur ongantíð verið so reint. Teymið var professionelt og vinarligt. Anbefali 100%!',
      image: '👩‍💼'
    },
    {
      name: 'Óli Hansen',
      location: 'Klaksvík',
      rating: 5,
      text: 'Sum ein travul faðir, so er henda tænasta ein blessing. Fái nú meira tíð við familjan. Takk fyri frábæra arbeiðið!',
      image: '👨‍💻'
    },
    {
      name: 'Maria Joensen',
      location: 'Runavík',
      rating: 5,
      text: 'Heima Reingerð hevur gjørt mítt lív so nógv einfaldari. Kvaliteturin er altíð í toppinum og tey eru altíð punktlig.',
      image: '👩‍🎓'
    },
    {
      name: 'Rannvá Mortensen',
      location: 'Vágur',
      rating: 5,
      text: 'Eg havi brúkt Heima Reingerð í 6 mánaðir. Tey eru so grundulig og umhyggjuful við mínum eigum. Kann ikki vera forutan!',
      image: '👩‍🏫'
    },
    {
      name: 'Jákup Símun',
      location: 'Saltangará',
      rating: 5,
      text: 'Professional og væl útbúgvið starvsólk. Tey brúka góð reingerðarvørur og síggja altíð til at alt er perfekt.',
      image: '👨‍🔧'
    },
    {
      name: 'Súsanna Berg',
      location: 'Miðvágur',
      rating: 5,
      text: 'Kann bert anbefala! Skjót bóking, góð samskifti og framúr vænt arbeiði. Fái altíð eitt skinandi reint heima.',
      image: '👩‍⚕️'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hvat siga okkara <span className="text-yellow-300">viðskifti</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Les hvat okkara nøgdu viðskifti siga um okkara reingerðartænastu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-100 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-yellow-400 mb-2 opacity-50" />
                <p className="text-blue-50 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Gerst tú eisini ein nøgdur viðskifti</h3>
            <p className="text-blue-100 mb-6">Fá títt frítt tilboð í dag og upplev munin.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Fá frítt tilboð
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;