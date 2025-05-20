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
            <a href="#">GitHub Link (coming soon)</a>
        </div>


        <div className="project">
          <h3>Cloud-Native Subtitle Generator</h3>
          <p>
            Serverless video subtitle generator using AWS services. Automates transcription and NLP, delivers subtitle files
            by email with event-driven workflows.
          </p>
          <p><strong>Tech:</strong> AWS Lambda, Transcribe, EventBridge, Bedrock, S3, SES</p>
          <a href="#">GitHub Link (coming soon)</a>
        </div>

        <div className="project">
          <h3>Community Smell Detection</h3>
          <p>
            Web app to detect code community smells in GitHub repos using Flask, Docker, and CI/CD. Built with AGILE + TDD
            methodology.
          </p>
          <p><strong>Tech:</strong> Flask, Docker, GitHub Actions, HTML/CSS</p>
          <a href="#">GitHub Link (coming soon)</a>
        </div>

        <div className="project">
          <h3>Cloud-Native ETL Pipeline</h3>
          <p>
            Built a distributed ETL pipeline using Hadoop and GCP to perform sentiment analysis over large datasets.
          </p>
          <p><strong>Tech:</strong> Hadoop, Google Cloud, Java</p>
          <a href="#">GitHub Link (coming soon)</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
