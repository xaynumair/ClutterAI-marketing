"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="about-page">
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      
      <div className="grid-background"></div>
      
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        
        <article>
          <h1>About <span className="gradient">ClutterAI</span></h1>
          
          <section className="intro">
            <p className="large">
              We're building the future of knowledge work. ClutterAI helps professionals and teams 
              find information instantly across all their connected apps.
            </p>
          </section>
          
          <section>
            <h2>Our Mission</h2>
            <p>
              Knowledge workers spend an average of 2.5 hours per day searching for information. 
              That's 12.5 hours per week, or 650 hours per year—wasted on something computers 
              should handle automatically.
            </p>
            <p>
              ClutterAI's mission is to eliminate search friction. We believe you should be able to 
              ask a question in plain English and get an instant answer, no matter where your 
              information lives.
            </p>
          </section>
          
          <section>
            <h2>How It Works</h2>
            <p>
              Connect your Google Drive, Gmail, Slack, and other tools with one click. ClutterAI 
              securely indexes your content and makes it searchable through a simple chat interface.
            </p>
            <p>
              Ask questions like "What did Sarah say about the Q3 budget?" or "Find the contract 
              we sent to Acme Corp" and get instant answers with source links. It's that simple.
            </p>
          </section>
          
          <section>
            <h2>Privacy & Security</h2>
            <p>
              Your data is yours. We use enterprise-grade encryption for data in transit and at rest. 
              We never train AI models on your data. You can delete your data at any time, and we'll 
              remove it from our systems within 30 days.
            </p>
            <p>
              ClutterAI is SOC 2 Type II and HIPAA compliant and follows industry best practices 
              for data security and privacy.
            </p>
          </section>
          
          <section>
            <h2>Contact Us</h2>
            <p>
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
            <p>
              Email us at: <a href="support@clutter-ai.com">support@clutter-ai.com</a>
            </p>
            <Link href="/contact" className="contact-button">
              Get in Touch →
            </Link>
          </section>
        </article>
      </div>
      
      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .background-orbs {
          position: fixed;
          inset: 0;
          z-index: 0;
        }
        
        .grid-background {
          position: fixed;
          inset: 0;
          z-index: 1;
          background-image: 
            linear-gradient(to right, rgba(88, 28, 135, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(88, 28, 135, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: float 25s infinite ease-in-out;
          opacity: 0.2;
        }
        
        .orb-1 {
          top: 10%;
          left: 20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(88, 28, 135, 0.3) 0%, transparent 70%);
        }
        
        .orb-2 {
          bottom: 20%;
          right: 20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(107, 33, 168, 0.25) 0%, transparent 70%);
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -50px); }
        }
        
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
          position: relative;
          z-index: 2;
        }
        
        .back-link {
          display: inline-block;
          color: #a1a1aa;
          text-decoration: none;
          margin-bottom: 40px;
          transition: color 0.3s;
        }
        
        .back-link:hover {
          color: #c4b5fd;
        }
        
        article {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 40px;
          line-height: 1.2;
        }
        
        .gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        section {
          margin-bottom: 60px;
        }
        
        .intro {
          margin-bottom: 80px;
        }
        
        .large {
          font-size: 1.5rem;
          line-height: 1.8;
          color: #d4d4d8;
        }
        
        h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #c4b5fd;
        }
        
        p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #a1a1aa;
          margin-bottom: 20px;
        }
        
        a {
          color: #7c3aed;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        a:hover {
          color: #8b5cf6;
        }
        
        .contact-button {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #6d28d9, #5b21b6);
          color: white;
          border-radius: 10px;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(109, 40, 217, 0.4);
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          .large {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}