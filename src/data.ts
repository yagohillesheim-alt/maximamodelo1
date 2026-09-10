import { Service, FAQItem, Article, Segment } from './types';

export const SERVICES: Service[] = [
  {
    id: 'twm',
    title: 'Total Waste Management',
    category: 'Gestão Integrada',
    description: 'Implantação de rotinas ambientais completas in company, desde a separação no setor fabril até a homologação de destinatários e prestação de contas ESG.',
    resolve: 'Desorganização e passivos ocultos.',
    indicatedFor: 'Indústrias, polos logísticos e grandes geradores.',
    icon: 'LayoutGrid',
    color: 'primary'
  },
  {
    id: 'transport',
    title: 'Coleta & Transporte MOPP',
    category: 'Frota Certificada',
    description: 'Caminhões específicos com sinalização de risco, kits de emergência para derramamento, laudos vigentes do Inmetro e motoristas com capacitação técnica de produtos perigosos.',
    resolve: 'Risco de autuações em trânsito e acidentes.',
    indicatedFor: 'Frotas, químicas e agronegócio.',
    icon: 'Truck',
    color: 'secondary'
  },
  {
    id: 'cdf',
    title: 'Destinação Final com CDF',
    category: 'Garantia Legal',
    description: 'Encaminhamento auditado para Coprocessamento em fornos de cimento, incineração controlada, reciclagem de alto padrão ou aterros industriais devidamente licenciados.',
    resolve: 'Responsabilidade solidária e poluição ambiental.',
    indicatedFor: 'Qualquer CNPJ gerador de resíduos.',
    icon: 'ShieldCheck',
    color: 'primary'
  },
  {
    id: 'classe1',
    title: 'Soluções para Resíduos Classe I',
    category: 'Crítico e Regulado',
    description: 'Fornecimento de tambores homologados pela Marinha/Inmetro, bacias de contenção móvel, acondicionamento seguro de químicos, borras e efluentes perigosos.',
    resolve: 'Vazamentos e multas severas de órgãos de proteção.',
    indicatedFor: 'Oficinas, revendas e farmacêuticas.',
    icon: 'TriangleAlert',
    color: 'secondary'
  },
  {
    id: 'classe2',
    title: 'Soluções para Resíduos Classe II',
    category: 'Economia Circular',
    description: 'Separação mecânica, trituração, enfardamento e destinação inteligente para materiais recicláveis com logística reversa e aterro industrial para a fração não reciclável.',
    resolve: 'Custos elevados com caçambas desordenadas.',
    indicatedFor: 'Construção civil, centros de distribuição.',
    icon: 'Recycle',
    color: 'primary'
  },
  {
    id: 'pgrs',
    title: 'Diagnóstico & PGRS',
    category: 'Engenharia Consultiva',
    description: 'Elaboração e ART de Planos de Gerenciamento de Resíduos Sólidos (PGRS), adequação de abrigo temporário, auditorias preventivas e suporte para renovação de licenças de operação.',
    resolve: 'Exigências de renovação de licença ambiental.',
    indicatedFor: 'Novas instalações ou ampliações fabris.',
    icon: 'LayoutDashboard',
    color: 'tertiary'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: '1. O que é o MTR Eletrônico e por que minha empresa precisa dele?',
    answer: 'O Manifesto de Transporte de Resíduos (MTR) é um documento obrigatório nacional expedido via sistema SINIR do Ministério do Meio Ambiente. Ele acompanha a carga desde o gerador até a destinação final. A emissão correta garante que sua empresa não seja multada em fiscalizações da Polícia Rodoviária Federal, Polícia Ambiental ou órgãos estaduais de meio ambiente.'
  },
  {
    id: 2,
    question: '2. Qual a diferença fundamental entre resíduo Classe I e Classe II?',
    answer: 'Os resíduos Classe I são perigosos, possuindo características como inflamabilidade, corrosividade, toxicidade ou patogenicidade (ex.: óleos, filtros usados, solventes, borras químicas). Os resíduos Classe II são não perigosos, dividindo-se em II A (não inertes, como papelão, madeira e matéria orgânica) e II B (inertes, como concreto, entulhos de construção e plásticos limpos).'
  },
  {
    id: 3,
    question: '3. O que é o CDF (Certificado de Destinação Final) e quando o recebo?',
    answer: 'O CDF é o documento conclusivo emitido pelo destinador homologado, atestando que a quantidade exata de resíduos foi devidamente tratada, coprocessada, incinerada ou aterrada em estrita conformidade com a legislação. O CDF é entregue ao cliente após a consolidação da destinação no sistema ambiental.'
  },
  {
    id: 4,
    question: '4. Vocês realizam atendimento pontual ou somente sob contrato mensal?',
    answer: 'Atendemos em ambas as modalidades. Para demandas pontuais (limpezas emergenciais, fechamento de obras ou descarte esporádico), montamos propostas rápidas por lote. Para indústrias e empresas com rotinas contínuas, ofertamos contratos com cronograma fixo de retiradas e condições comerciais otimizadas.'
  },
  {
    id: 5,
    question: '5. Quais recipientes e acondicionamentos são aceitos para a coleta?',
    answer: 'Para resíduos Classe I, os materiais devem estar acondicionados em tambores de 200L metálicos ou plásticos homologados, bombonas ou IBCs de 1.000L sem vazamentos. Para resíduos Classe II e RCC, operamos com caçambas estacionárias Roll-on/Roll-off ou contêineres plásticos industriais. Caso sua empresa não possua os recipientes, a Máxima pode fornecê-los.'
  },
  {
    id: 6,
    question: '6. Qual o prazo habitual entre a solicitação e a retirada da carga?',
    answer: 'Para clientes contratuais na Baixada Cuiabana (Cuiabá e Várzea Grande), o atendimento habitual ocorre em 24 a 48 horas após a solicitação. Demandas em polos industriais do interior do estado seguem cronogramas semanais de rotas ou programações customizadas.'
  },
  {
    id: 7,
    question: '7. A Máxima Ambiental auxilia na elaboração do PGRS da minha empresa?',
    answer: 'Sim! Contamos com equipe de engenharia ambiental habilitada para elaboração do Plano de Gerenciamento de Resíduos Sólidos (PGRS) com recolhimento de ART junto ao CREA, além de suporte técnico para renovação de Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO).'
  },
  {
    id: 8,
    question: '8. Como é realizada a pesagem e a cobrança dos serviços?',
    answer: 'A cobrança pode ser estruturada por diária/locação de caçamba, por tambor/unidade coletada ou por tonelada efetiva pesada em balança rodoviária aferida pelo IPEM/Inmetro. O ticket de pesagem acompanha o faturamento para total transparência e conciliação contábil.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Gestão de Resíduos Classe I: O que toda indústria precisa saber sobre segurança',
    category: 'Compliance Classe I',
    readTime: '6 min',
    excerpt: 'A responsabilidade solidária do gerador prevista na Lei 12.305/2010 e como o acondicionamento incorreto de inflamáveis pode acarretar em multas ambientais pesadas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo7tvXRG_ep3eNG-mLomARhDnQPqLX9X4IDswGHtfJlr4N8ni7r4XjPELAZGT_XJJvi836JOcF46xNzESmLDEH-mBvwCcrhoIbVoFRDlyBIIZGfXM3ueMHai7JSpnRx2iweRCzDbgWQPYoJz87WEaoDO87bJHctLjNyblG-Yi2m4VaYjuh1ZSk2GYKC3viJN0s2HjIkj169o7ooFZZ5ygdYnDw1N8WdR4ga5b2BEpBU2dMteqNVYfhyA'
  },
  {
    id: 2,
    title: 'Como a segregação na fonte reduz custos de destinação em até 30%',
    category: 'Gestão Financeira',
    readTime: '4 min',
    excerpt: 'Quando resíduos recicláveis Classe II são contaminados por resíduos perigosos, todo o lote se torna Classe I. Entenda o impacto no seu orçamento.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5MqYBLcbJHZn9sV9mzfZWjUoNyCeO4MxjuRjvRHFAWqk3N2z2CDkxMMKduBtXogAZGR6gJeD8Kx_L9kAH8_lfqfF-gn6FTm5PbTjthUB8HoQzKZlaQl_oqVA39yk46ASWvYOf3GvKTEFtM06Q51kJcGcw0mYJBxd2vNpcKynqvIgmPZPu64yWEMpTxwA5APgsuHOZ4rY4PVNg8UQyQbdwf_Ir_09AZnKEX8f-6ZBBzXttXqjEPNJGUg'
  },
  {
    id: 3,
    title: 'Rastreabilidade e MTR: A importância da documentação para evitar autuações',
    category: 'Digitalização Fiscal',
    readTime: '5 min',
    excerpt: 'Como o cruzamento automatizado de dados pelo SINIR fiscaliza a emissão de MTRs e como o CDF definitivo protege a diretoria da empresa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzSsw5m8sQE6AL0m9vuEQEXPzaiWUuP8N8BNgsDHqg-QQFTTloW_ilhhF-0gzFfH3Zt3J6UayKnmA5meprPdMELJwsl0xtaboR4eG87wTmYJ-FW55mOgzDk6BZDjp6f7TOvWEMH7sL3pYckl8B9UuOQvSQzsdhJs1dvDYKRNfvOfkdetrWgncjR5HDKaG3SnT0JuUznp8n-Zhggo9X4TY-pVb81Ccd-G3M0ziqz6kS6JAyjXcKwJd9vQ'
  }
];

export const SEGMENTS: Segment[] = [
  {
    id: 'industria',
    title: 'Indústrias & Manufatura',
    painPoints: 'Fiscalizações rigorosas da SEMA/IBAMA, acúmulo volumoso de borras e solventes químicos, necessidade de comprovação ESG para auditorias de clientes globais.',
    solution: 'Contratos dedicados com caçambas estanques, relatórios de massa mensais e CDF rápido.',
    icon: 'Factory'
  },
  {
    id: 'construcao',
    title: 'Construção Civil & Obras',
    painPoints: 'Prazos exíguos de entrega de canteiro, multas por caçambas irregulares nas calçadas e exigência do Habite-se com comprovante de descarte de RCC.',
    solution: 'Trocas ágeis de caçambas estacionárias e destinação homologada para triagem e reciclagem de agregados.',
    icon: 'Construction'
  },
  {
    id: 'oficinas',
    title: 'Concessionárias & Oficinas',
    painPoints: 'Óleo lubrificante usado (OLUC), filtros prensados, estopas e peças contaminadas acumuladas em áreas operacionais com risco de contaminação.',
    solution: 'Fornecimento de tambores padronizados, coleta programada e emissão de certificado para fabricantes.',
    icon: 'CarFront'
  },
  {
    id: 'condominios',
    title: 'Condomínios Empresariais',
    painPoints: 'Mistura de resíduos de múltiplos inquilinos, proliferação de vetores em abrigos temporários e sobrecarga na coleta pública municipal.',
    solution: 'Gestão compartilhada, contêineres fechados e campanhas educativas de segregação com valorização de recicláveis.',
    icon: 'Building2'
  },
  {
    id: 'logistica',
    title: 'Transportadoras & Frotas',
    painPoints: 'Descarte de pneus inutilizados, paletes quebrados, lodo de lavadores de caminhões e exigência de planos de atendimento a sinistros.',
    solution: 'Coleta periódica de insumos pesados e limpeza periódica de caixas separadoras de água e óleo (SAO).',
    icon: 'Truck'
  },
  {
    id: 'publico',
    title: 'Órgãos Públicos & Autarquias',
    painPoints: 'Licitações complexas que demandam certidões negativas ambientais inquestionáveis e auditoria pelo Tribunal de Contas.',
    solution: 'Regularidade fiscal e jurídica absoluta, com laudos técnicos prontos para validação pública e transparência.',
    icon: 'Gavel'
  }
];
