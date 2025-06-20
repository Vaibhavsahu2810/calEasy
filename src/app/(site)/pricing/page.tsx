"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, X, ArrowLeft, Zap, Users, Building } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for individuals getting started",
    features: [
      "1 meeting type",
      "Unlimited bookings",
      "Basic calendar sync",
      "Email notifications",
      "Mobile responsive booking page",
    ],
    limitations: [
      "No custom branding",
      "No team features",
      "Basic support only",
    ],
    cta: "Get Started Free",
    popular: false,
    ctaVariant: "outline" as const,
  },
  {
    name: "Pro",
    icon: Users,
    price: { monthly: 12, yearly: 120 },
    description: "For professionals who need more control",
    features: [
      "Unlimited meeting types",
      "Custom branding & colors",
      "Advanced calendar sync",
      "SMS & email reminders",
      "Buffer times & availability rules",
      "Intake forms & questions",
      "Analytics & insights",
      "Priority support",
    ],
    limitations: [],
    cta: "Start Pro Trial",
    popular: true,
    ctaVariant: "default" as const,
  },
  {
    name: "Team",
    icon: Building,
    price: { monthly: 20, yearly: 200 },
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team scheduling & round-robin",
      "Shared team pages",
      "Admin dashboard",
      "User management",
      "Advanced integrations",
      "Custom workflows",
      "White-label options",
      "Dedicated support",
    ],
    limitations: [],
    cta: "Start Team Trial",
    popular: false,
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a 14-day free trial for Pro and Team plans. No credit card required to start your trial.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can pay by invoice.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "You can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer:
      "Yes! We offer 50% discounts for qualified nonprofit organizations. Contact our support team to learn more.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your scheduling needs. Start free,
              upgrade when you&apos;re ready.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span
                className={`text-sm font-medium ${
                  !isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isYearly ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Yearly
              </span>
              {isYearly && (
                <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Save 17%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              const price = isYearly ? plan.price.yearly : plan.price.monthly;
              const period = isYearly ? "year" : "month";

              return (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">
                          ${price}
                        </span>
                        {price > 0 && (
                          <span className="text-gray-500">/{period}</span>
                        )}
                      </div>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 mb-6 ${
                        plan.ctaVariant === "default"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                        What&apos;s included:
                      </h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}

                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div
                          key={limitationIndex}
                          className="flex items-start gap-3"
                        >
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
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
    </div>
  );
}
