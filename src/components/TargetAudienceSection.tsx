import { motion } from "framer-motion";
import { Heart, ShieldX, Sparkles, Crown, Users, AlertTriangle } from "lucide-react";

const targetAudienceItems = [
  {
    icon: ShieldX,
    text: "Cansaram de correr atrás de homens emocionalmente indisponíveis",
  },
  {
    icon: Heart,
    text: "Querem parar de aceitar migalhas emocionais",
  },
  {
    icon: Users,
    text: "Desejam construir um relacionamento saudável, estável e respeitoso",
  },
  {
    icon: Crown,
    text: "Querem ser escolhidas, não apenas toleradas",
  },
  {
    icon: Sparkles,
    text: "Querem aprender a se posicionar com segurança emocional",
  },
  {
    icon: AlertTriangle,
    text: "Precisam identificar sinais de alerta antes de se envolver",
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-sage">
      <div className="section-container">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-primary-foreground mb-4">
            Para quem é esse método?
          </h2>
          <div className="ornament-divider mb-6" />
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Para mulheres inteligentes que cansaram de joguinhos emocionais e querem paz, respeito e reciprocidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudienceItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gold-light" />
                </div>
                <p className="text-primary-foreground font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
