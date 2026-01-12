import { motion } from "framer-motion";
import coupleSilhouette from "@/assets/couple-silhouette.png";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-sage-dark">
      <div className="section-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={coupleSilhouette} 
            alt="" 
            className="w-14 mx-auto mb-6 opacity-50"
          />
          
          <h3 className="font-serif text-2xl text-primary-foreground mb-2 italic">
            O Método da Mulher Desejada
          </h3>
          
          <p className="text-primary-foreground/60 mb-6">
            Transformando mulheres em suas melhores versões desde 2024
          </p>

          <div className="flex items-center justify-center gap-1 text-primary-foreground/50 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <span>para mulheres que escolhem se valorizar</span>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/40 text-sm">
              © 2024 O Método da Mulher Desejada. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
