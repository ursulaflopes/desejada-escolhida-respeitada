import { motion } from "framer-motion";
import { 
  Shield, 
  Heart, 
  MessageCircle, 
  Eye, 
  Sparkles, 
  Lock,
  Target,
  TrendingUp
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Postura que gera respeito",
    description: "Desenvolva postura emocional que gera respeito automático, sem precisar exigir.",
  },
  {
    icon: Heart,
    title: "Mantenha o interesse",
    description: "Aprenda a manter o interesse masculino sem cobranças, controle ou pressão emocional.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação madura",
    description: "Comunique suas necessidades de forma clara, sem drama e sem perder sua dignidade.",
  },
  {
    icon: Eye,
    title: "Identifique os sinais",
    description: "Reconheça rapidamente homens errados antes de investir tempo e energia emocional.",
  },
  {
    icon: Sparkles,
    title: "Atração autêntica",
    description: "Crie atração baseada em segurança e autovalor, não em carência ou desespero.",
  },
  {
    icon: Lock,
    title: "Intimidade verdadeira",
    description: "Construa intimidade emocional genuína que fortalece o relacionamento.",
  },
  {
    icon: Target,
    title: "Seja seletiva",
    description: "Aprenda a ser seletiva sem culpa e a sair cedo de relações que não te servem.",
  },
  {
    icon: TrendingUp,
    title: "Evolução constante",
    description: "Desenvolva clareza emocional para fazer escolhas conscientes em relacionamentos.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="section-container">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-foreground mb-4">
            O que você vai conquistar
          </h2>
          <div className="ornament-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefícios práticos e aplicáveis ao seu dia a dia que transformarão sua vida amorosa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card-elegant group hover:bg-card/80 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
