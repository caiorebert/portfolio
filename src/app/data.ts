import exp from "constants";

const informacoes = {
    experiencias: [
        {
            empresa: 'Wilivro',
            cargo: 'Assistente de Programador',
            inicio: '02/08/2021',
            fim: '17/01/2022',
            periodo: '02/08/2021 - 17/01/2022',
            local: 'Não especificado',
            conteudo: 'Não especificado',
            linguagens: [
                'PHP',
                'JavaScript'
            ],
            frameworks: [
                'Yii Framework'
            ],
            bancos: [
                'MySQL'
            ]
        },
        {
            empresa: 'Esig Software e Consultoria',
            
            cargo: 'Analista de Sistemas I - A',
            inicio: '24/01/2022',
            fim: 'Trabalho atual',
            periodo: '24/01/2022 - Trabalho atual',
            local: 'Não especificado',
            conteudo: 'Não especificado',
            linguagens: [
                'PHP',
                'JavaScript',
                'C#',
                'Java'
            ],
            frameworks: [
                'Laravel',
                '.NET Framework',
                'VueJS',
                'Spring Boot'
            ],
            bancos: [
                'Oracle',
                'PostgreSQL'
            ]
        }
    ],
    formacoes: [
        {
            instituicao: 'Universidade Federal do Rio Grande do Norte',
            curso: 'Bacharelado em Tecnologia da Informação',
            inicio: '2021',
            fim: '2025',
            periodo: '2017 - 2022',
            local: 'Natal, RN',
            conteudo: 'Não especificado'
        },
        {
            instituicao: 'Universidade Federal do Rio Grande do Norte',
            curso: 'Técnico em Informática para Internet',
            inicio: '2019',
            fim: '2021',
            periodo: '2019 - 2021',
            local: 'Natal, RN',
            conteudo: 'Não especificado'
        }
    ],
    stacks: [
        {
            nome: 'PHP',
            experiencia: '+4 anos de experiência',
            frameworks: [
                'Laravel',
                'Yii Framework',
                'CodeIgniter'
            ]
        },
        {
            nome: 'JavaScript',
            experiencia: '+4 anos de experiência',
            frameworks: [
                'VueJS',
                'NextJS',
                'NestJS'
            ]
        },
        {
            nome: "VueJS",
            experiencia: "+-3 anos de experiência",
            frameworks: [
                'NuxtJS'
            ]
        },
        {
            nome: 'C#',
            experiencia: '+-3 anos de experiência',
            frameworks: [
                '.NET Framework',
                'ASP.NET Core'
            ]
        },
        {
            nome: 'Java',
            experiencia: '+1 ano de experiência',
            frameworks: [
                'Spring Boot'
            ]
        },
        {
            nome: "Flutter",
            experiencia: "Apenas estudos avulsos"
        },
        {
            nome: "ReactJS",
            experiencia: "Apenas estudos avulsos",
            frameworks: [
                'NextJS'
            ]
        },
        {
            nome: "NodeJS",
            experiencia: "Apenas estudos avulsos",
            frameworks: [
                'NestJS'
            ]
        }
    ],
    projetos: [
        {
            nome: "ArezDelivery",
            descricao: `Sistema de delivery de comida para a minha cidade natal, Arez/RN. 
                        Por enquanto ainda está em desenvolvimento.`,
            tecnologias: [
                'NestJS',
                'NextJS',
                'Postgres'
            ],
            link: [
                'https://arezdelivery-front.vercel.app/'
            ]
        },
        {
            nome: "Send2You",
            descricao: `Sistema de envio de mensagens para outras pessoas, com o uso de
                        SocketIO possibilitando a comunicacao em tempo real.`,
            tecnologias: [
                'Flutter',
                'Express',
                'Postgres',
                'SocketIO'
            ],
            link: [
                'https://github.com/caiorebert/send2you',
                'https://github.com/caiorebert/send2you-api'
            ]
        }
    ]
}

export default informacoes;