import { motion } from "framer-motion";
import heroImage from "@/assets/hero-woman.jpg";
import coupleSilhouette from "@/assets/couple-silhouette.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-cream-dark">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={coupleSilhouette} 
          alt="" 
          className="absolute top-6 left-1/2 -translate-x-1/2 w-20 md:w-24 opacity-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="section-container relative z-10 pt-8 pb-16 md:pt-12">
        {/* Logo/Brand */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-xl md:text-2xl text-sage italic">
            O Método da Mulher Desejada
          </h2>
        </motion.div>

        {/* Main Hero Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className="heading-display text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Torne-se a mulher que o{" "}
            <span className="text-sage italic">homem certo</span>{" "}
            escolhe ficar
          </motion.h1>

          <motion.p 
            className="text-elegant text-muted-foreground max-w-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pare de aceitar migalhas emocionais. Aprenda a ser desejada, escolhida e respeitada — 
            sem implorar, sem manipular e sem perder sua essência.
          </motion.p>

          <motion.p 
            className="text-base text-sage font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Um método prático baseado em postura emocional, autovalor e psicologia masculina aplicada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="https://pay.kiwify.com.br/eGP7JAG" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="mb-4">
                Quero me tornar uma mulher desejada
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Acesso imediato • Transformação real
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="mt-12 md:mt-16 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-3xl" />
            <img 
              src={heroImage} 
              alt="Mulher elegante e confiante" 
              className="w-full rounded-3xl shadow-elevated object-cover aspect-[16/9]"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity }
        }}
      >
        <div className="w-6 h-10 border-2 border-sage/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-sage/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
