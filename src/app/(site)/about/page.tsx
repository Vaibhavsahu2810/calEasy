"use client";
import Image from "next/image";
import Link from "next/link";
import vaibhavAvatar from "@/libs/image.png";
import {
  ArrowLeft,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

const principles = [
  "Simplicity",
  "Openness",
  "Reliability",
  "Privacy-First",
  "User-Centric",
];

const teamMembers = [
  {
    name: "Vaibhav Sahu",
    role: "Founder & CEO",
    avatar: vaibhavAvatar,
    bio: "",
    social: {
      twitter: "https://twitter.com/@Vaibhav02971972",
      github: "https://github.com/Vaibhavsahu2810",
      linkedin: "https://www.linkedin.com/in/vaibhav-sahu-93664a28a/",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 animate-fade-in">
            About CalEasy
          </h1>

          <div className="text-lg md:text-xl text-gray-600 text-center mb-16 animate-fade-in-delay-1">
            Making scheduling simple, transparent, and accessible for everyone.
          </div>

          {/* Our Mission */}
          <article className="mb-12 animate-fade-in-delay-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              We built CalEasy because we were tired of the endless
              back-and-forth emails trying to find a time that works for
              everyone. Traditional scheduling tools were either too complex,
              too expensive, or locked behind proprietary walls.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our mission is to democratize scheduling by providing a powerful,
              open-source platform that anyone can use, modify, and contribute
              to. We believe that great tools should be accessible to
              individuals, small businesses, and enterprises alike—without
              breaking the bank.
            </p>
          </article>

          {/* Key Principles */}
          <article className="mb-12 animate-fade-in-delay-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Key Principles
            </h2>
            <div className="flex flex-wrap gap-3">
              {principles.map((principle, index) => (
                <span
                  key={principle}
                  className="bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {principle}
                </span>
              ))}
            </div>
          </article>

          {/* Meet the Team */}
          <article className="mb-12 animate-fade-in-delay-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <figure
                  key={member.name}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${(index + 1) * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <Image
                    src={member.avatar || "/image.png"}
                    alt={`${member.name} - ${member.role}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    width={80}
                    height={80}
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </figure>
              ))}
            </div>
          </article>

          {/* Open Source */}
          <article className="mb-12 animate-fade-in-delay-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Open Source
            </h2>
            <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Github className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Built in the Open
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    CalEasy is completely open source. View our code, report
                    issues, suggest features, or contribute improvements. We
                    believe transparency builds trust and creates better
                    software.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://github.com/Vaibhavsahu2810/calEasy"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                    <a
                      href="https://github.com/Vaibhavsahu2810/calEasy"
                      className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 rounded-md px-4 py-2 font-medium hover:bg-gray-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Contributing Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Contact */}
          <article className="mb-12 animate-fade-in-delay-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Have questions, feedback, or want to collaborate? We&apos;d love
                to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@caleasy.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  hello@caleasy.com
                </a>
                <a
                  href="https://twitter.com/caleasyapp"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                  @caleasyapp
                </a>
              </div>
            </div>
          </article>

          {/* Back to Home Link */}
          <div className="text-center animate-fade-in-delay-7">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.6s ease-out 0.1s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.3s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.6s ease-out 0.4s both;
        }

        .animate-fade-in-delay-5 {
          animation: fade-in 0.6s ease-out 0.5s both;
        }

        .animate-fade-in-delay-6 {
          animation: fade-in 0.6s ease-out 0.6s both;
        }

        .animate-fade-in-delay-7 {
          animation: fade-in 0.6s ease-out 0.7s both;
        }
      `}</style>
    </div>
  );
}
