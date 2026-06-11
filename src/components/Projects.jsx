function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-list">
        <div className="project">
          <h3>MailLense – RAG over Personal Emails</h3>
          <p>
            A cloud-native RAG platform for semantic search and AI-powered Q&A over personal inbox data. Built as a full-stack
            solution integrating the Gmail API to fetch and process real-time email content using secure OAuth 2.0 authorization.
          </p>
          <p>
            The system uses Amazon Bedrock (Titan) for embedding generation and Claude for natural language responses. Emails are
            vectorized, indexed in OpenSearch, and made queryable via a React frontend deployed with S3 + CloudFront.
          </p>
          <p>
            <strong>Tech:</strong> Gmail API, OAuth 2.0, React, AWS Lambda, API Gateway, S3, OpenSearch, Bedrock (Titan & Claude)
          </p>
          <a
            href="https://github.com/BasitTramboo/MailLense"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>AI Summarizer – Intelligent Document Processing</h3>
          <p>
            A serverless, cloud-native application for intelligent document processing using generative AI. Automates ingestion,
            text extraction, and summarization of PDF and JPG documents, delivering concise summaries via email.
          </p>
          <p>
            Built with a React + TypeScript frontend on S3 and CloudFront, event-driven Lambda processing with Textract and Bedrock
            Titan, and infrastructure defined in AWS CloudFormation with CI/CD via GitHub Actions.
          </p>
          <p>
            <strong>Tech:</strong> React, TypeScript, AWS Lambda, API Gateway, S3, DynamoDB, Textract, Bedrock, SES, CloudFormation
          </p>
          <a
            href="https://github.com/BasitTramboo/AISummarizer"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Adaptive Beam Search – Enhancing Sequence Prediction</h3>
          <p>
            A novel modification to the classic beam search algorithm that introduces a prediction window to delay pruning decisions.
            This allows initially weak candidate sequences additional time to evolve, leading to higher-quality outputs for machine
            translation and text generation tasks.
          </p>
          <p>
            Evaluated on custom-trained and pre-trained language models (DistilGPT, GPT-2, GPT-2 Medium) using SacreBLEU, ROUGE-L,
            BERTScore, and MAUVE metrics, with measurable gains over standard beam search.
          </p>
          <p>
            <strong>Tech:</strong> Python, PyTorch, DistilGPT, GPT-2, WMT14, WikiText-103
          </p>
          <a
            href="https://github.com/BasitTramboo/AdaptiveBeamSearch"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Community Smell Detection</h3>
          <p>
            Web app to detect code community smells in GitHub repos using Flask, Docker, and CI/CD. Built with AGILE + TDD
            methodology.
          </p>
          <p><strong>Tech:</strong> Flask, Docker, GitHub Actions, HTML/CSS</p>
        </div>

        <div className="project">
          <h3>Cloud-Native ETL Pipeline</h3>
          <p>
            Built a distributed ETL pipeline using Hadoop and GCP to perform sentiment analysis over large datasets.
          </p>
          <p><strong>Tech:</strong> Hadoop, Google Cloud, Java</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
