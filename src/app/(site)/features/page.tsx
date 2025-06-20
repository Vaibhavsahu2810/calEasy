"use client";

import Link from "next/link";
import {
  Calendar,
  Users,
  Globe,
  Bell,
  Code,
  ArrowLeft,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "One-click Scheduling",
    description:
      "Share links for meetings in seconds. No back-and-forth emails needed.",
  },
  {
    icon: Globe,
    title: "Calendar Integrations",
    description: "Sync seamlessly with Google Calendar, Outlook, and iCal.",
  },
  {
    icon: Users,
    title: "Time-Zone Detection",
    description:
      "Automatically adjust to your invitee's local time zone for convenience.",
  },
  {
    icon: Bell,
    title: "Team Pages",
    description:
      "Round-robin and pooled scheduling for groups and team meetings.",
  },
  {
    icon: Code,
    title: "Notifications & Reminders",
    description:
      "Email and SMS alerts to reduce no-shows and keep everyone informed.",
  },
  {
    icon: Code,
    title: "Open-Source",
    description:
      "Inspect, modify, or contribute to the code on GitHub. Full transparency.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-gray-50">
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your scheduling workflow and
              save time
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Back to Home Link */}
          <div className="text-center">
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
      `}</style>
    </div>
  );
}
