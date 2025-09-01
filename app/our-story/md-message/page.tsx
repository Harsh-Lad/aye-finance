import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message from Our MD | Sanjay Sharma - Aye Finance",
  description:
    "Read the inspiring message from Sanjay Sharma, Managing Director of Aye Finance, about our vision to empower micro-entrepreneurs across India.",
  keywords:
    "Sanjay Sharma, MD message, Aye Finance leadership, micro-entrepreneurs, financial inclusion",
  openGraph: {
    title: "Message from Our MD | Sanjay Sharma - Aye Finance",
    description:
      "A message from our Managing Director about Aye Finance's mission to support micro-entrepreneurs across India",
    type: "article",
  },
};

export default function MDMessagePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/our-story"
                  className="hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
                <span>/</span>
                <span className="text-gray-900">MD's Message</span>
              </div>
            </nav>

            {/* Title Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                A Message from Our Managing Director
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sanjay Sharma shares his vision for empowering
                micro-entrepreneurs across India
              </p>
            </div>

            {/* MD Image and Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Sanjay Sharma - Managing Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Sanjay Sharma
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Managing Director, Aye Finance
                </p>
                <div className="text-sm text-gray-500">
                  Published on September 1, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-gray max-w-none">
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p className="text-xl font-light text-gray-800 italic border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg">
                  "Aye Finance is built on a vision to help micro-entrepreneurs
                  across India."
                </p>

                <div className="space-y-6">
                  <p>
                    Many small and micro businesses in India face a huge
                    obstacle to their progress – lack of access to capital. Many
                    of them are in unorganized sectors, do not maintain detailed
                    business accounts, do not have any credit history and loan
                    needs are often very small. Formal credit providers have
                    shunned them because it is not easy to underwrite these
                    loans.
                  </p>

                  <p>
                    Aye has picked up the gauntlet to break this vicious cycle.
                    As the conventional data sets were not available, we
                    pioneered a method that relies on using the unique patterns
                    of an industry cluster backed by our time-tested data
                    science models. Our ability to underwrite these 'edge'
                    cases, where little formal data exists, differentiates us in
                    our markets.
                  </p>

                  <p>
                    Our strength goes beyond just technology. We have a deep
                    branch network and a large team spread across the country.
                    Our 'high tech, high-touch' approach has helped us reimagine
                    and expand the boundaries of possibilities for our unique
                    clientele.
                  </p>

                  <p>
                    We have gone beyond being a lender and helped these
                    businesses in market development, quality management and
                    financial competence. Thanks to this all-round approach, we
                    have seen positive social impact in cross-sectional studies
                    done to evaluate the impact on our customers.
                  </p>

                  <p>
                    We do not want to be merely recognized for what we have done
                    but also for how we have done it. We will not hesitate to
                    explore and experiment, we will keep our customers at the
                    center of all that we do, we will always be honest and
                    worthy of trust placed in us by our investors and regulators
                    and we will always strive to make a difference to the
                    communities we serve.
                  </p>

                  <p className="text-xl font-medium text-gray-800 pt-6">
                    Above all we will stay humble and grateful.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        Sanjay Sharma
                      </p>
                      <p className="text-gray-600">
                        Managing Director, Aye Finance
                      </p>
                    </div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                        alt="Sanjay Sharma"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Learn More About Our Journey
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Discover how we've grown from a vision in 2013 to empowering over
              a million micro-entrepreneurs across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/our-story">Read Our Complete Story</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/about">About Aye Finance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
