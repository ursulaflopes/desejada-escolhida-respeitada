import { motion } from "framer-motion";
import { 
  Brain, 
  Heart, 
  MessageSquare, 
  Shield, 
  Sparkles, 
  AlertCircle,
  Lightbulb,
  Users
} from "lucide-react";

const modules = [
  {
    number: "01",
    icon: Brain,
    title: "Mentalidade e Postura da Mulher Desejada",
    description: "Construa a base mental que sustenta uma mulher emocionalmente valiosa e magnética.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Psicologia Masculina e Dinâmica da Atração",
    description: "Entenda como a mente masculina funciona e o que realmente gera atração duradoura.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Comunicação Emocional Madura",
    description: "Aprenda a expressar necessidades sem pressão, cobrança ou perda de valor.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Limites, Autovalor e Seletividade",
    description: "Estabeleça limites saudáveis e desenvolva a arte de ser seletiva sem culpa.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Como Manter o Interesse Sem Perder Valor",
    description: "Estratégias práticas para manter a atração viva sem se anular ou correr atrás.",
  },
  {
    number: "06",
    icon: AlertCircle,
    title: "Identificação de Comportamentos Tóxicos",
    description: "Reconheça red flags e padrões nocivos antes de investir emocionalmente.",
  },
  {
    number: "07",
    icon: Lightbulb,
    title: "Relacionamentos Inteligentes e Escolha Consciente",
    description: "Desenvolva clareza para fazer escolhas que honrem seu valor e seus objetivos.",
  },
  {
    number: "08",
    icon: Users,
    title: "Construindo Intimidade e Parceria Verdadeira",
    description: "Crie conexão profunda e parceria genuína baseada em respeito mútuo.",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-foreground mb-4">
            O que você vai aprender
          </h2>
          <div className="ornament-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo prático, aplicável e transformador dividido em 8 módulos completos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-cream hover:bg-cream-dark transition-colors group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-sage flex items-center justify-center">
                    <module.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -left-2 w-7 h-7 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-warm-brown">
                    {module.number}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-sage transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
