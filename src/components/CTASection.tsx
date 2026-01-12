import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock, ShieldCheck } from "lucide-react";
import lotusOrnament from "@/assets/lotus-ornament.png";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src={lotusOrnament} 
        alt="" 
        className="absolute top-0 left-0 w-32 opacity-20 -translate-x-1/2 -translate-y-1/2"
      />
      <img 
        src={lotusOrnament} 
        alt="" 
        className="absolute bottom-0 right-0 w-32 opacity-20 translate-x-1/2 translate-y-1/2"
      />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-foreground mb-6">
            Está pronta para a transformação?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Invista em você e na qualidade dos seus relacionamentos. 
            Aprenda a ser a mulher que você sempre quis ser.
          </p>

          {/* Pricing Card */}
          <motion.div 
            className="bg-sage rounded-3xl p-8 md:p-12 shadow-elevated mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-2">
              O Método da Mulher Desejada
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-primary-foreground/60 text-lg line-through">R$ 497</span>
              <span className="bg-gold text-warm-brown text-sm font-bold px-3 py-1 rounded-full">
                -40% OFF
              </span>
            </div>
            <div className="text-primary-foreground mb-2">
              <span className="text-xl">12x de </span>
              <span className="text-5xl md:text-6xl font-serif font-bold">R$ 24,70</span>
            </div>
            <p className="text-primary-foreground/70 mb-8">
              ou R$ 297 à vista
            </p>

            <Button variant="gold" size="xl" className="w-full md:w-auto">
              Quero me tornar uma mulher desejada
            </Button>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <Zap className="w-5 h-5 text-gold" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <Clock className="w-5 h-5 text-gold" />
                <span>Acesso vitalício</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>7 dias de garantia</span>
              </div>
            </div>
          </motion.div>

          {/* What's included */}
          <div className="bg-background rounded-2xl p-6 shadow-soft">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              O que está incluso:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                "8 módulos completos em vídeo",
                "Material complementar em PDF",
                "Exercícios práticos",
                "Acesso vitalício ao conteúdo",
                "Atualizações gratuitas",
                "Comunidade exclusiva de alunas",
                "Suporte por 1 ano",
                "Bônus: Guia de conversas"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Check className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
