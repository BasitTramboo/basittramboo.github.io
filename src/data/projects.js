export const projects = [
  {
    title: 'MailLense – RAG over Personal Emails',
    featured: true,
    description:
      'Cloud-native RAG platform for semantic search and AI-powered Q&A over personal inbox data. Integrates Gmail API with OAuth 2.0, vectorizes emails with Bedrock Titan, indexes in OpenSearch, and serves responses via a React frontend on S3 + CloudFront.',
    tags: ['Gmail API', 'React', 'Lambda', 'OpenSearch', 'Bedrock', 'RAG'],
    github: 'https://github.com/BasitTramboo/MailLense',
  },
  {
    title: 'AI Summarizer – Intelligent Document Processing',
    featured: true,
    description:
      'Serverless IDP app that ingests PDF/JPG documents, extracts text with Textract, summarizes with Bedrock Titan, and delivers results via email. React + TypeScript frontend with CloudFormation IaC and GitHub Actions CI/CD.',
    tags: ['TypeScript', 'Lambda', 'Textract', 'Bedrock', 'CloudFormation'],
    github: 'https://github.com/BasitTramboo/AISummarizer',
  },
  {
    title: 'Adaptive Beam Search – Sequence Prediction',
    featured: false,
    description:
      'Novel beam search variant with delayed pruning via a prediction window, evaluated on DistilGPT, GPT-2, and GPT-2 Medium using SacreBLEU, ROUGE-L, BERTScore, and MAUVE metrics.',
    tags: ['Python', 'PyTorch', 'NLP', 'GPT-2'],
    github: 'https://github.com/BasitTramboo/AdaptiveBeamSearch',
  },
  {
    title: 'Community Smell Detection',
    featured: false,
    description:
      'Web app to detect code community smells in GitHub repos using Flask, Docker, and CI/CD — built with Agile and TDD methodology.',
    tags: ['Flask', 'Docker', 'GitHub Actions'],
    github: null,
  },
  {
    title: 'Cloud-Native ETL Pipeline',
    featured: false,
    description:
      'Distributed ETL pipeline using Hadoop and GCP to perform sentiment analysis over large datasets.',
    tags: ['Hadoop', 'GCP', 'Java'],
    github: null,
  },
];
