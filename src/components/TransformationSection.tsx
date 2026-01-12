import { motion } from "framer-motion";
import womanNature from "@/assets/woman-nature.jpg";
import { Button } from "@/components/ui/button";

const TransformationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-sage-dark overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src={womanNature} 
                alt="Mulher caminhando com confiança" 
                className="rounded-3xl shadow-elevated w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-sage-dark/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-[-40px] bg-background rounded-2xl p-6 shadow-elevated max-w-xs"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-serif text-lg text-foreground italic">
                "Não é sobre conquistar qualquer homem. É sobre se tornar a mulher que o homem certo escolhe ficar."
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section text-primary-foreground mb-6">
              A promessa central do método
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                O Método da Mulher Desejada não ensina a conquistar qualquer homem.
              </p>
              <p className="text-xl text-gold font-serif font-semibold">
                Ele ensina a se tornar a mulher que o homem certo escolhe ficar.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Não é sobre manipulação, sedução artificial ou joguinhos. É sobre postura emocional, 
                autovalor e psicologia masculina aplicada para construir relacionamentos conscientes e maduros.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Seja desejada sem se anular",
                "Seja escolhida sem correr atrás",
                "Seja respeitada sem perder sua essência"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-primary-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <a href="https://pay.kiwify.com.br/eGP7JAG" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg">
                Quero essa transformação
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
