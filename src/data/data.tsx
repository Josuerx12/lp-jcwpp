import {
  CheckCircle,
  InfinityIcon,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const plans = [
  {
    name: "Plano Básico",
    price: "R$79,99",
    instances: "1 Instância",
    benefits: [
      {
        icon: <CheckCircle className="text-green-600 w-5 h-5" />,
        text: "1 Instância exclusiva",
      },
      {
        icon: <MessageCircle className="text-green-600 w-5 h-5" />,
        text: "Suporte via WhatsApp em horário comercial",
      },
      {
        icon: <Zap className="text-green-600 w-5 h-5" />,
        text: "Integração com Make",
      },
      {
        icon: <ShieldCheck className="text-green-600 w-5 h-5" />,
        text: "Documentação completa",
      },
    ],
    featured: false,
  },
  {
    name: "Plano Profissional",
    price: "R$199,99",
    instances: "3 Instâncias",
    benefits: [
      {
        icon: <CheckCircle className="text-green-600 w-5 h-5" />,
        text: "3 Instâncias simultâneas",
      },
      {
        icon: <MessageCircle className="text-green-600 w-5 h-5" />,
        text: "Suporte via WhatsApp 24h",
      },
      {
        icon: <Zap className="text-green-600 w-5 h-5" />,
        text: "Integração com Make e APIs personalizadas",
      },
      {
        icon: <ShieldCheck className="text-green-600 w-5 h-5" />,
        text: "Monitoramento ativo das instâncias",
      },
    ],
    featured: true,
  },
  {
    name: "Plano Ilimitado",
    price: "R$399,99",
    instances: "Instâncias Ilimitadas",
    benefits: [
      {
        icon: <InfinityIcon className="text-green-600 w-5 h-5" />,
        text: "Instâncias Ilimitadas para escalar sem limites",
      },
      {
        icon: <MessageCircle className="text-green-600 w-5 h-5" />,
        text: "Suporte VIP 24h via WhatsApp e email",
      },
      {
        icon: <Zap className="text-green-600 w-5 h-5" />,
        text: "Prioridade máxima no suporte técnico",
      },
      {
        icon: <Rocket className="text-green-600 w-5 h-5" />,
        text: "Acesso antecipado a novas funcionalidades",
      },
    ],
    featured: false,
  },
];
