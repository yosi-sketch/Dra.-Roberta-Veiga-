"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  Gavel,
  Lock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5532999097028";
const PHONE_DISPLAY = "(32) 99909-7028";
const EMAIL_CONTACT = "contato@robertaveiga.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/ravgms.adv";
const INSTAGRAM_HANDLE = "@ravgms.adv";

const ADDRESS_TEXT =
  "R. Floripes Maria de Jesus, nº 15 – Loja 1 - Centro, Rio Pomba - MG, 36180-000, Brasil";
const ADDRESS_LANDMARKS =
  "Esquina com a Rua João Marcelino · Ao lado do LABCLIN · Em frente à AUTOESCOLA RIO POMBA";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Floripes+Maria+de+Jesus,+15+-+Centro,+Rio+Pomba+-+MG,+36180-000";

const LOGO_SRC = "/logo.png";
const LOGO_LIGHT_SRC = "/logo-light.png";
const FOTO_SOBRE_SRC = "/roberta-veiga.png";
const FOTO_PORTRAIT_SRC = "/roberta-portrait.png";
const FOTO_ENDERECO_SRC = "/escritorio-endereco.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Roberta Veiga! Gostaria de uma orientação jurídica criminal sobre meu caso.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
  isSpecialty?: boolean;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "execucao-penal-estrategica",
    title: "Execução Penal & Liberdade Antecipada",
    icon: UnlockIcon,
    tag: "Especialidade Principal · Progressão · Remição · Livramento",
    summary:
      "Acompanhamento analítico e diário do cumprimento da pena para assegurar que nenhum dia de direito seja desrespeitado e antecipar a soltura do apenado.",
    details:
      "A execução penal vai muito além de simples pedidos burocráticos. É sobre estratégia processual, recálculo criterioso de penas para sanar erros de guias prisionais, pedidos urgentes de progressão de regime (fechado para semiaberto e semiaberto para aberto), livramento condicional e remição por trabalho, estudo e leitura. Atuamos com dedicação diária para que o apenado conquiste sua liberdade no exato momento devido por lei.",
    topics: [
      "Progressão de regime de cumprimento de pena (fechado, semiaberto e aberto)",
      "Livramento condicional com análise antecipada de todos os requisitos",
      "Remição de pena por estudo, trabalho, leitura e aprovações no ENEM/ENCCEJA",
      "Saídas temporárias, indulto humanitário e comutação de pena",
      "Defesa técnica em Processo Administrativo Disciplinar (PAD / Falta Grave)",
      "Retificação minuciosa de Guia de Recolhimento e eliminação de erros de cálculo",
    ],
    whatsAppText:
      "Olá, Dra. Roberta Veiga! Gostaria de uma consultoria especializada em Execução Penal / Progressão de Regime / Liberdade.",
    isSpecialty: true,
  },
  {
    id: "plantao-criminal-24h-flagrante",
    title: "Plantão Criminal 24h & Prisão em Flagrante",
    icon: Zap,
    tag: "Plantão 24h · Delegacia · Audiência de Custódia · Urgência",
    summary:
      "Atendimento imediato e combativo em delegacias e unidades prisionais para proteger garantias constitucionais e postular a liberdade imediata.",
    details:
      "As primeiras horas após a abordagem policial são determinantes para o desfecho do processo. Dra. Roberta Veiga atua em regime de plantão penal 24 horas, acompanhando presencialmente oitivas e depoimentos em delegacias, verificando a regularidade do flagrante e sustentando com vigor na audiência de custódia pela concessão de liberdade provisória com ou sem fiança ou relaxamento da prisão ilegal.",
    topics: [
      "Plantão emergencial 24 horas para atendimento presencial imediato",
      "Acompanhamento em flagrantes, interrogatórios e termos circunstanciados na delegacia",
      "Atuação combativa na Audiência de Custódia com pedido de liberdade provisória",
      "Relaxamento imediato de prisão em flagrante arbitrária ou ilegal",
      "Orientação preventiva aos investigados e comunicação contínua aos familiares",
      "Fiscalização ininterrupta da integridade física e dos direitos do custodiado",
    ],
    whatsAppText:
      "Olá, Dra. Roberta! Preciso de atendimento urgente no Plantão Criminal 24h (Flagrante / Delegacia).",
    isSpecialty: true,
  },
  {
    id: "revogacao-de-preventiva-habeas-corpus",
    title: "Revogação de Preventiva & Habeas Corpus",
    icon: ShieldAlert,
    tag: "Habeas Corpus · Prisão Domiciliar · Medidas Cautelares",
    summary:
      "Ações judiciais enérgicas perante juizados de 1º grau, TJMG, STJ e STF contra prisões preventivas desnecessárias, ilegais ou desproporcionais.",
    details:
      "A prisão antes da condenação definitiva é medida excepcionalíssima no ordenamento jurídico brasileiro. Atuamos com pedidos fundamentados de revogação de prisão preventiva demonstrando a ausência dos requisitos do art. 312 do CPP, impetramos Habeas Corpus com pedido liminar em instâncias superiores e pleiteamos prisão domiciliar para mães, chefes de família ou pessoas com enfermidades graves.",
    topics: [
      "Pedido de revogação de prisão preventiva com substituição por medidas cautelares",
      "Impetração célere de Habeas Corpus com pedido liminar perante o TJMG, STJ e STF",
      "Substituição de prisão preventiva por prisão domiciliar humanitária",
      "Alegação de excesso de prazo na instrução e combate a constrangimentos ilegais",
      "Sustentação oral presencial e por videoconferência nos Tribunais de Justiça",
      "Recursos em Habeas Corpus perante os Tribunais Superiores em Brasília",
    ],
    whatsAppText:
      "Olá, Dra. Roberta! Gostaria de orientações sobre pedido de Revogação de Prisão Preventiva / Habeas Corpus.",
  },
  {
    id: "defesa-em-inqueritos-e-processos-criminais",
    title: "Defesa em Inquéritos & Processos Criminais",
    icon: Gavel,
    tag: "Investigação · Crimes Patrimoniais · Lei de Drogas · Júri",
    summary:
      "Estratégia defensiva de excelência, do início do inquérito policial até a sentença final, com análise técnica rigorosa e sustentação combativa.",
    details:
      "Cada acusação criminal exige uma teoria do caso personalizada e técnica. Atuamos na defesa de investigados e réus em crimes contra o patrimônio (furto, roubo, estelionato), crimes da Lei de Drogas (teses de desclassificação para porte e aplicação do tráfico privilegiado), crimes contra a pessoa e rito do Tribunal do Júri, assegurando contraditório pleno e ampla defesa.",
    topics: [
      "Defesa técnica em Inquéritos Policiais e investigações do Ministério Público",
      "Atuação combativa em crimes da Lei de Drogas (teses defensivas e desclassificação)",
      "Defesa em crimes patrimoniais (furto, roubo, receptação, apropriação indébita)",
      "Apresentação de Resposta à Acusação com arguição de preliminares e nulidades",
      "Participação incisiva em Audiências de Instrução e Julgamento com inquirição de testemunhas",
      "Acordo de Não Persecução Penal (ANPP), transação penal e suspensão condicional do processo",
    ],
    whatsAppText:
      "Olá, Dra. Roberta! Preciso de defesa técnica para um inquérito policial / processo criminal.",
  },
  {
    id: "crimes-digitais-fraudes-medicina-legal",
    title: "Crimes Digitais & Medicina Legal",
    icon: ShieldCheck,
    tag: "Golpes Virtuais · Perícias Técnicas · Cadeia de Custódia Forense",
    summary:
      "Atuação qualificada em delitos cibernéticos, fraudes eletrônicas e causas que exigem profundo domínio de perícia médica e científica.",
    details:
      "O avanço tecnológico e os métodos modernos de investigação demandam conhecimento técnico multidisciplinar. Dra. Roberta Veiga alia a prática penal a um estudo aprofundado em medicina legal e crimes digitais, atuando na verificação criteriosa da cadeia de custódia de dados eletrônicos apreendidos, na contestação de laudos periciais e na formulação de quesitos para peritos oficiais.",
    topics: [
      "Defesa em acusações de estelionato eletrônico, invasão de dispositivo e fraudes virtuais",
      "Verificação rigorosa da conformidade e higidez da cadeia de custódia de provas digitais",
      "Análise aprofundada de laudos de medicina legal, corpo de delito e necropsias",
      "Elaboração de quesitos técnicos e indicação de assistentes periciais",
      "Combate judicial a provas ilícitas obtidas sem autorização judicial específica",
      "Assessoria jurídica a pessoas e empresas vítimas de extorsão ou golpes digitais",
    ],
    whatsAppText:
      "Olá, Dra. Roberta! Gostaria de consultoria sobre crimes digitais / análise de perícia técnica.",
  },
  {
    id: "revisao-criminal-recursos-superiores",
    title: "Revisão Criminal & Recursos Superiores",
    icon: FileCheck2,
    tag: "Revisão de Sentença · Recurso de Apelação · STJ & STF",
    summary:
      "Instrumentos processuais para desconstituir condenações injustas transitadas em julgado e recorrer a instâncias revisoras para correção de penas.",
    details:
      "Mesmo após o trânsito em julgado da sentença condenatória, a justiça ainda pode ser restabelecida. Através da Ação de Revisão Criminal, fundada em novas provas, laudos contraditórios ou nulidades processuais insanáveis, buscamos a absolvição ou a drástica redução da pena do apenado, além de atuar no manejo de Recursos de Apelação, Recursos Especiais ao STJ e Recursos Extraordinários ao STF.",
    topics: [
      "Ação de Revisão Criminal para anular sentença condenatória ou reduzir pena",
      "Agravo em Execução Penal contra decisões indeferitórias do Juiz da VEC",
      "Recurso de Apelação Criminal contra sentenças de mérito injustas",
      "Recurso em Sentido Estrito (RESE) em decisões interlocutórias e pronúncia",
      "Recurso Especial (STJ) e Recurso Extraordinário (STF) com peças de alto rigor formal",
      "Unificação de penas em execuções concorrentes com cálculo favorável ao apenado",
    ],
    whatsAppText:
      "Olá, Dra. Roberta! Gostaria de analisar a viabilidade de uma Revisão Criminal ou recurso.",
  },
];

function UnlockIcon({
  size = 20,
  className = "",
  strokeWidth = 2,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}

const clientReviews = [
  {
    name: "David Alexandre Teles Farina",
    reviewsCount: "Local Guide · 10 avaliações · 7 fotos",
    date: "Google Meu Negócio · Verificado",
    badge: "expert em execução penal",
    content:
      "Dra. Roberta é uma expert em execução penal. Prestativa, empenhada, atenciosa e, sobretudo, humana. O seu foco é a liberdade antecipada do seu cliente, e percebo que é bem comum que ela consiga alcançar resultados exitosos além do esperado.",
  },
  {
    name: "Katia Ghedini Mantovani",
    reviewsCount: "Local Guide · 9 avaliações · 1 foto",
    date: "Google Meu Negócio · Verificado",
    badge: "criminalista renomada",
    content:
      "Dra Roberta é especialista na advocacia criminal, defendendo amplamente os direitos e interesses de seus clientes. É uma criminalista renomada e conhecida pela garra e comprometimento com a causa.",
  },
  {
    name: "João Fidelis",
    reviewsCount: "Cliente Verificado · 1 avaliação",
    date: "Google Meu Negócio · Verificado",
    badge: "conquista da liberdade",
    content:
      "Gostaria de agradecer, Dra pelo excelente trabalho, pela atenção e pelo tamanho desempenho que foi dado no meu caso e se hoje consegui minha liberdade eu agradeço a Deus e a Dra. Deus abençoe e tenha um ótimo dia!",
  },
  {
    name: "Marlene Vieira",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · Verificado",
    badge: "trabalho impecável",
    content:
      "Seu trabalho foi impecável. A forma clara, atenta e responsável com que conduziu cada etapa fez toda a diferença. Parabéns pela competência e comprometimento. A melhor advogada de Rio Pomba.",
  },
  {
    name: "Gabriel Lellis",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · Verificado",
    badge: "confiança e clareza",
    content:
      "A Dra. Roberta prestou um atendimento excelente, sempre muito atenciosa, clara e profissional. Transmitiu confiança durante todo o processo e esclareceu todas as minhas dúvidas. Recomendo seu trabalho.",
  },
  {
    name: "Taís Nunes",
    reviewsCount: "Cliente Verificada · 5 avaliações",
    date: "Google Meu Negócio · Verificado",
    badge: "ágil e dedicada",
    content:
      "Dra Roberta é um exemplo de profissional. Compreensiva e direta nas suas informações. Extremamente dedicada e ágil para resolver os problemas.",
  },
  {
    name: "Jhonatan Botelho",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · Verificado",
    badge: "honestidade e segurança",
    content:
      "Excelente trabalho. Roberta explica tudo com clareza, é honesta sobre os riscos e transmite confiança. Me senti ouvido e seguro para seguir com o caso quando necessário. Sem sombra de dúvidas, eu recomendo.",
  },
  {
    name: "Joao Victor",
    reviewsCount: "Cliente Verificado · 4 avaliações · 3 fotos",
    date: "Google Meu Negócio · Verificado",
    badge: "atendimento resolutivo",
    content:
      "Excelente profissional, pontual, resolutiva. Nunca fui tão bem atendido. Obrigado Dra. Roberta.",
  },
  {
    name: "Alline Cardoso",
    reviewsCount: "Cliente Verificada · 5 avaliações · 2 fotos",
    date: "Google Meu Negócio · Verificado",
    badge: "rápida e eficiente",
    content:
      "A Dra Roberta é uma pessoa excepcional! Ajudou muito no meu processo! Rápida e extremamente eficiente!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={`font-serif text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.15rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            light ? "text-brand-100/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-pearl text-ink">
        {/* Navigation Bar - Dark Obsidian Wine with Warm Gold Accent */}
        <header className="sticky top-0 z-40 border-b border-brand-900/60 bg-brand-950/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[98px] lg:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dra. Roberta Veiga Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
            >
              <Image
                src={LOGO_LIGHT_SRC}
                width={1024}
                height={402}
                alt="Dra. Roberta Veiga - Advogada Criminalista - OAB/MG 210.863"
                priority
                loading="eager"
                className="h-[68px] w-auto object-contain sm:h-[82px] lg:h-[94px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Sobre a Roberta
              </a>
              <a className="nav-link" href="#execucao-penal">
                Execução Penal
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Nova Sede & Plantão
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Dra. Roberta Veiga"
                className="grid size-10 place-items-center rounded-full border border-gold-400/35 text-gold-400 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title="Instagram @ravgms.adv"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para o Plantão Penal da Dra. Roberta Veiga"
                className="grid size-10 place-items-center rounded-full border border-gold-400/35 text-gold-400 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title={`Plantão 24h: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl("Olá, Dra. Roberta! Gostaria de falar com o plantão criminal.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Roberta Veiga"
                className="grid size-10 place-items-center rounded-full border border-gold-400/35 text-gold-400 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Roberta Veiga! Gostaria de consultar sobre meu caso no plantão penal.")}
                target="_blank"
                size="sm"
                variant="burgundy"
                className="rounded-full shadow-sm"
              >
                Plantão 24h WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-gold-400/35 text-gold-300 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-brand-900/60 bg-brand-950 px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre a Roberta", "#sobre"],
                    ["Execução Penal & Liberdade", "#execucao-penal"],
                    ["Áreas de Atuação Criminal", "#atuacao"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Nova Sede & Plantão em Rio Pomba", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-brand-100 hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl("Olá, Dra. Roberta! Gostaria de consultar o plantão penal.")}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Plantão 24h: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/35 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-gold-300 transition-all hover:border-gold-300"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> R. Floripes Maria de Jesus, 15 - Rio Pomba
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-brand-200/50 bg-gradient-to-b from-brand-50/70 via-pearl to-white"
        >
          {/* Subtle wine & warm gold ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-gold-200/25 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="eyebrow mb-6">
                <span className="size-2 shrink-0 rounded-full bg-brand-600 animate-pulse" />
                <span>
                  Rio Pomba - MG · Plantão Criminal 24h · 5,0 ★ no Google (114 Avaliações)
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[4.15rem]"
              >
                Defesa criminal técnica, ágil e combativa para{" "}
                <span className="font-serif italic text-brand-700">
                  resguardar sua liberdade e seu futuro.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Sob a liderança da{" "}
                <strong className="font-semibold text-ink">
                  Dra. Roberta Veiga
                </strong>{" "}
                (OAB/MG 210.863), especialista em Execução Penal e pós-graduada em Ciências Criminais pela PUC MG, atuamos com método, rigor obsessivo aos detalhes e transparência total — sem juridiquês inútil. Da prisão em flagrante e audiência de custódia ao cumprimento da pena: quando a liberdade está em jogo, cada minuto e cada detalhe importam.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Roberta Veiga! Gostaria de uma análise jurídica criminal urgente para meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no Plantão 24h WhatsApp
                </GlowingButton>
                <a
                  href="#execucao-penal"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
                >
                  Conhecer Execução Penal{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-brand-200/70 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-amber-500 text-amber-500" />{" "}
                  5,0 estrelas no Google (114 avaliações reais)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-brand-700" /> Plantão Criminal Aberto 24 Horas
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> R. Floripes Maria de Jesus, 15 - Loja 1 · Rio Pomba
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Retrato e Autoridade Dra. Roberta Veiga */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-3xl border border-brand-700/35 bg-brand-950 shadow-2xl ring-1 ring-gold-400/30">
                <Image
                  src={FOTO_PORTRAIT_SRC}
                  alt="Dra. Roberta Veiga — Advogada Criminalista e Especialista em Execução Penal"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950 via-brand-950/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      OAB/MG 210.863
                    </span>
                    <p className="mt-2 font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Roberta Veiga
                    </p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-gold-300">
                      Advogada Criminalista · PUC MG
                    </p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold-400/50 bg-brand-950/85 text-gold-300 shadow-md backdrop-blur-sm">
                    <Scale size={20} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-full border border-gold-400/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-900 shadow-card backdrop-blur-md sm:-left-5">
                ESPECIALISTA EM EXECUÇÃO PENAL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-2xl border border-brand-200/80 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1 text-brand-800">
                    <Star size={13} className="fill-amber-500 text-amber-500" />
                    <span className="font-serif text-base font-bold text-ink">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                  114 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-brand-200/60 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima de excelência com 114 avaliações reais verificadas no Google",
              ],
              [
                "Execução Penal",
                "especialista pós-graduada pela PUC MG com foco em liberdade antecipada",
              ],
              [
                "Plantão 24h",
                "atendimento emergencial imediato em flagrantes, delegacias e custódias",
              ],
              [
                "Nova Sede",
                "espaço moderno na R. Floripes Maria de Jesus, 15 - Loja 1, Centro de Rio Pomba",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-brand-200/70"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-brand-700 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Roberta Veiga ("Quem sou eu") */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Apresentação Visual Oficial da Roberta */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-brand-300/60 bg-white shadow-card">
                <Image
                  src="/roberta-veiga.jpg"
                  alt="Dra. Roberta Veiga — Quem sou eu, Prazer Roberta Veiga"
                  width={790}
                  height={1024}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-brand-200 bg-white px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia Criminal Estratégica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Dra. Roberta Veiga
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-700">
                  Roberta Andrade Veiga Medeiros · OAB/MG 210.863
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  R. Floripes Maria de Jesus, 15 - Loja 1, Centro, Rio Pomba - MG.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-brand-400/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Texto Descritivo: Tom Pessoal, Claro e Firme */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                QUEM SOU EU · PRAZER, ROBERTA VEIGA
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3.25rem]"
              >
                Execução penal não é só trabalho:{" "}
                <span className="italic text-brand-700">
                  é propósito, método e compromisso real.
                </span>
              </motion.h2>

              <motion.div variants={reveal} className="mt-6 space-y-4 text-[15px] leading-7 text-ink-soft">
                <p>
                  <strong className="text-ink">Oiê, prazer! Roberta Veiga por aqui 👋🏻</strong>{" "}
                  (e sem formalidades… &ldquo;Dra.&rdquo; a gente deixa pro processo e pra audiência 🤍).
                </p>
                <p>
                  Sou advogada criminalista e apaixonada pelo que faço. Me encontrei na <strong className="text-ink">execução penal</strong> — e te garanto: vai muito além de progressão de regime ou saída temporária. É sobre direitos fundamentais, estratégia minuciosa e fazer diferença de verdade na vida de quem acredita que, depois da sentença, está tudo perdido.
                </p>
                <p>
                  Sou extremamente organizada (talvez um pouco obcecada 😅), então tudo por aqui segue método, estrutura e atenção máxima aos detalhes. Minha conexão com o Direito Penal começou na prática, ainda na faculdade, com experiências na delegacia e no sistema prisional — e desde então nunca mais saí dessa área.
                </p>
                <p>
                  Tenho um interesse por medicina legal e crimes digitais, e estou em constante atualização acadêmica. E apesar da cara de brava (eu sei que engana rs), meu atendimento é leve, direto e transparente — sem juridiquês desnecessário. Aqui não tem complicação: tem clareza, estratégia e compromisso real com cada caso.
                </p>
              </motion.div>

              {/* Pillars Badges */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-medium text-ink sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                  <span>Pós-graduada em Ciências Criminais pela PUC MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                  <span>Especialista em Execução Penal e Liberdade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                  <span>Plantão Penal 24 Horas em Rio Pomba e região</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                  <span>Nota máxima 5,0 ★ no Google com 114 avaliações</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Oiê, Roberta! Gostaria de conversar com você sobre um caso criminal."
                  )}
                  target="_blank"
                  size="md"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar Diretamente com a Roberta
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-brand-900"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Seção Especial: Por que a Execução Penal é Decisiva? */}
        <section
          id="execucao-penal"
          className="scroll-mt-24 border-y border-brand-200/60 bg-brand-50/50 py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="EXECUÇÃO PENAL ESTRATÉGICA & LIBERDADE"
                description="Muitas pessoas cumprem meses ou anos a mais na prisão por meros erros de cálculo na guia ou inércia da defesa. Nós recalculamos cada dia de pena para antecipar a liberdade."
              >
                Depois da sentença, não está tudo perdido:{" "}
                <span className="italic text-brand-700">
                  é onde a verdadeira luta pelo direito começa.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Roberta! Gostaria de uma análise para cálculo de pena / progressão de regime na Execução Penal."
                )}
                target="_blank"
                size="md"
                variant="burgundy"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Caso de Execução Penal
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Execução Penal e Liberdade Antecipada */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-2xl border border-brand-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-300/40 bg-brand-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <UnlockIcon size={14} /> Foco na Liberdade
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Especialidade Principal
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Progressão de Regime, Remição e Livramento Condicional
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Analisamos folha por folha do processo de execução penal. Verificamos frações legais aplicáveis, tempo de prisão cautelar não computado (detração), dias remidos por trabalho, leitura ou cursos e formulamos pedidos objetivos e céleres para destravar a ida ao regime semiaberto, aberto ou livramento condicional.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Cálculo minucioso para antecipar progressão e livramento condicional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Remição de pena por estudo, ENEM/ENCCEJA, trabalho e leitura</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Defesa técnica vigorosa contra faltas disciplinares graves (PAD)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Roberta! Gostaria de consultar sobre a execução penal e cálculo de pena de um familiar."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Execução Penal no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Plantão Criminal 24 Horas & Prisão em Flagrante */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-2xl border border-brand-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-300/40 bg-brand-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <Zap size={14} /> Plantão 24 Horas
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Atendimento Imediato
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Audiência de Custódia e Acompanhamento em Delegacia
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Prisões e abordagens não escolhem dia nem horário. Nosso plantão penal atua 24 horas para prestar assistência técnica imediata, evitando arbitrariedades, resguardando o direito ao silêncio e lutando pela concessão da liberdade provisória já na audiência de custódia.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Chegada rápida à delegacia para orientação do custodiado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Audiência de custódia com foco em liberdade provisória sem fiança</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Habeas Corpus de urgência perante o Tribunal de Justiça (TJMG)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Roberta! Preciso de atendimento urgente para prisão em flagrante / delegacia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Chamar Plantão Criminal 24h
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação Criminal */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="PILARE DE ATUAÇÃO PENAL & SERVIÇOS"
                description="Soluções defensivas de alto padrão técnico em Rio Pomba, Ubá, Juiz de Fora, Minas Gerais e Tribunais Superiores em Brasília."
              >
                Advocacia criminal focada em{" "}
                <span className="italic text-brand-700">
                  liberdade, rigor técnico e estratégia combativa.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Clique em qualquer especialidade para conferir o escopo completo de atuação e falar diretamente pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className={`group flex min-h-[350px] flex-col rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-8 ${
                      area.isSpecialty
                        ? "border-brand-300/80 bg-brand-50/40 hover:border-brand-600"
                        : "border-brand-200/80 bg-pearl hover:border-brand-500"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-white text-brand-700 shadow-sm transition-colors group-hover:bg-brand-900 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-950"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Nosso Método & Compromisso Profissional */}
        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-gold-500/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="MÉTODO & ESTRUTURA"
                light
                description="A avaliação 5,0 ★ no Google reflete a união entre preparo técnico, organização minuciosa e empatia real com quem está enfrentando o momento mais difícil da vida."
              >
                Aqui não tem complicação:{" "}
                <span className="italic text-gold-300">
                  tem clareza, estratégia e compromisso real.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-gold-400/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Dra. Roberta é uma expert em execução penal. Prestativa, empenhada, atenciosa e, sobretudo, humana. O seu foco é a liberdade antecipada do seu cliente, e alcança resultados exitosos além do esperado.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-gold-300">
                  — David Alexandre Teles Farina · Google Meu Negócio (Local Guide)
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Organização Obsessiva & Atenção Aos Detalhes",
                  "No processo penal, um detalhe despercebido ou um prazo negligenciado custa a liberdade. Analisamos cada folha dos autos, certidões carcerárias e cálculos com método rigoroso.",
                ],
                [
                  "02",
                  "Atendimento Leve, Direto e Sem Juridiquês",
                  "Você e sua família entendem tudo o que está acontecendo. Explicamos cada passo em linguagem transparente e acessível, com honestidade sobre os riscos e as reais possibilidades.",
                ],
                [
                  "03",
                  "Combatividade Incisiva & Presença Constante",
                  "Não aceitamos inércia processual nem decisões arbitrárias. Interpomos os recursos cabíveis com agilidade e mantemos presença ativa em audiências, delegacias e no presídio.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-gold-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-brand-100/75">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 114 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes e colegas advogados que confiam na competência técnica e dedicação incansável da Dra. Roberta Veiga."
              >
                Avaliação máxima 5,0 ★ pela{" "}
                <span className="italic text-brand-700">
                  garra, técnica jurídica e conquistas de liberdade.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-2xl border border-brand-200 bg-pearl p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-brand-300/40 bg-white shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-ink">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900">
                    Dra. Roberta Veiga
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    114 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-brand-200/80 bg-pearl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-card sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-amber-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
                        <GoogleIcon size={13} />
                        <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-800 shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-ink/90">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-brand-200/60 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-white font-serif text-sm font-semibold text-brand-900 shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-ink">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-brand-200/60 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Especialista em Execução Penal",
                  "Plantão Criminal 24 Horas",
                  "Liberdade Antecipada & Remição",
                  "Comunicação Clara e Direta",
                  "Nota 5,0 no Google com 114 Avaliações",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-[11px] font-medium text-ink-soft shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-brand-700" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 transition-colors hover:text-brand-950"
              >
                Ver todas as 114 avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Nova Sede & Contato */}
        <section
          id="contato"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOVA SEDE & PLANTÃO 24 HORAS"
                description="Conheça nosso novo endereço no Centro de Rio Pomba (MG) ou acione o plantão criminal imediatamente via WhatsApp para casos urgentes a qualquer hora."
              >
                Estamos prontas para{" "}
                <span className="italic text-brand-700">
                  defender sua liberdade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Roberta Veiga! Gostaria de falar sobre meu caso com o escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Chamar no WhatsApp Agora
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Plantão e WhatsApp direto:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-700"
                  />
                  <div>
                    <p className="font-semibold text-ink">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-brand-800 font-medium">
                      Aberto 24 Horas · Plantão Penal Permanente
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Atendimento presencial com agendamento e plantão emergencial para flagrantes e custódias 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-brand-700" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-ink transition-colors hover:text-brand-800"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp 24h)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-brand-700" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-brand-800"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-brand-700" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-brand-800"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-700"
                  />
                  <div>
                    <span className="font-medium text-ink">{ADDRESS_TEXT}</span>
                    <p className="mt-0.5 text-[11px] text-brand-700 font-medium">
                      {ADDRESS_LANDMARKS}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Novo Endereço & Visual Card com Foto da Sede */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-200/80 bg-white p-7 shadow-card sm:p-9">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-800">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Novo Endereço · Sede Própria
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Rio Pomba · Minas Gerais
                  </p>
                </div>
              </div>

              {/* Foto da Nova Sede - Sem cortes */}
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-200 shadow-sm">
                <Image
                  src={FOTO_ENDERECO_SRC}
                  alt="Novo endereço - Rua Floripes Maria de Jesus, 15 - Loja 1, Centro, Rio Pomba - MG"
                  width={837}
                  height={832}
                  className="h-auto w-full object-contain"
                />
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-6 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Dra. Roberta Veiga Advocacia Criminal
                </strong>
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Referências de Localização */}
              <div className="mt-5 rounded-xl border border-brand-200/60 bg-pearl p-4 text-xs">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-800">
                  Pontos de Referência & Facilidade de Acesso
                </p>
                <div className="grid grid-cols-1 gap-2 text-ink sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-brand-700" />
                    <span>Esquina com a Rua João Marcelino</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-brand-700" />
                    <span>Ao lado do LABCLIN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-brand-700" />
                    <span>Em frente à AUTOESCOLA RIO POMBA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-brand-700" />
                    <span>Loja 1 com fácil estacionamento</span>
                  </div>
                </div>
              </div>

              <div className="my-6 h-px bg-brand-200/60" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Plantão 24h ativo para atendimento em toda a região
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-900"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Ruby Wine with Warm Gold Accent */}
        <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                <Sparkles size={13} /> DRA. ROBERTA VEIGA · ADVOCACIA CRIMINAL
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica urgente em Execução Penal ou Flagrante?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Roberta! Gostaria de consultar sobre um caso criminal com urgência."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-burgundy"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp 24h{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Dra. Roberta Veiga Advocacia"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_LIGHT_SRC}
                  width={1024}
                  height={402}
                  alt="Dra. Roberta Veiga - Logotipo Oficial - OAB/MG 210.863"
                  className="h-[82px] w-auto object-contain sm:h-[96px]"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                ⚖️ Advocacia criminal estratégica com método, combatividade e atendimento humano. Especialista em Execução Penal, Liberdade Antecipada, Prisões em Flagrante e Habeas Corpus.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-gold-300">
                Roberta Andrade Veiga Medeiros · OAB/MG 210.863
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-brand-100/75">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre a Roberta
                </a>
                <a className="footer-link" href="#execucao-penal">
                  Execução Penal & Liberdade
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação Criminal
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Nova Sede & Plantão em Rio Pomba
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-brand-100/75">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Roberta! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-gold-300"
                >
                  <WhatsAppIcon size={15} /> WhatsApp 24h: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Plantão:{" "}
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-brand-200/80">
                  <Clock size={14} className="shrink-0" /> Aberto 24 Horas · Plantão Permanente
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DRA. ROBERTA VEIGA ADVOCACIA (OAB/MG 210.863). Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Roberta Veiga! Gostaria de tirar uma dúvida sobre meu caso criminal."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp 24h com a Dra. Roberta Veiga"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Plantão 24h WhatsApp
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-brand-200/80 bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-brand-300/60 text-ink transition-colors hover:border-brand-800 hover:text-brand-800"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA CRIMINAL</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-brand-200/60 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-brand-700" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="burgundy"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft transition-colors hover:text-ink"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
