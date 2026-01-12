import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    age: 32,
    text: "Depois do método, parei de implorar atenção e comecei a ser escolhida naturalmente. A mudança foi incrível.",
    transformation: "De ansiosa para segura",
  },
  {
    name: "Fernanda S.",
    age: 28,
    text: "Entendi finalmente por que eu sempre atraía homens errados. Agora sei exatamente como me posicionar.",
    transformation: "De confusa para seletiva",
  },
  {
    name: "Juliana R.",
    age: 35,
    text: "Meu relacionamento mudou completamente. Ele passou a me valorizar mais quando eu aprendi a me valorizar primeiro.",
    transformation: "De carente para valiosa",
  },
  {
    name: "Amanda L.",
    age: 30,
    text: "Achei que precisava mudar quem eu era. O método me ensinou que eu só precisava mudar minha postura.",
    transformation: "De insegura para confiante",
  },
  {
    name: "Beatriz C.",
    age: 27,
    text: "Parei de aceitar migalhas e encontrei um homem que me dá o mundo. A diferença é gritante.",
    transformation: "De tolerada para escolhida",
  },
  {
    name: "Larissa P.",
    age: 34,
    text: "Finalmente tenho paz nos meus relacionamentos. Sem jogos, sem drama, só conexão verdadeira.",
    transformation: "De ansiosa para tranquila",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-rose/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-foreground mb-4">
            Transformações reais
          </h2>
          <div className="ornament-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias de mulheres que decidiram mudar sua realidade emocional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-sage/20 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age} anos
                    </p>
                  </div>
                  <span className="text-xs font-medium text-sage bg-sage/10 px-3 py-1 rounded-full">
                    {testimonial.transformation}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
