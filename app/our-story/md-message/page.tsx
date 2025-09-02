import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <main className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto p-6 max-w-5xl">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-secondary" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-secondary" href="/our-story">
                  Our Story
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Message From Managing Director</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                A Message from Our Managing Director
              </h1>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Sanjay Sharma
                </h2>
                <p className="text-lg text-secondary font-medium">
                  Managing Director, Aye Finance
                </p>
                <p className="text-foreground">
                  Published on September 1, 2025
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/director-sanjay-sharma.jpg"
                  alt="Sanjay Sharma - Managing Director"
                  fill
                  className="object-cover scale-x-[-1]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">MD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <blockquote className="text-2xl font-light text-foreground italic border-l-4 border-primary pl-8 py-6 bg-primary/5 rounded-r-2xl mb-12">
              "Aye Finance is built on a vision to help micro-entrepreneurs
              across India."
            </blockquote>

            <div className="space-y-8 text-foreground/80 leading-relaxed text-lg">
              <p>
                Many small and micro businesses in India face a huge obstacle to
                their progress – lack of access to capital. Many of them are in
                unorganized sectors, do not maintain detailed business accounts,
                do not have any credit history and loan needs are often very
                small. Formal credit providers have shunned them because it is
                not easy to underwrite these loans.
              </p>

              <p>
                Aye has picked up the gauntlet to break this vicious cycle. As
                the conventional data sets were not available, we pioneered a
                method that relies on using the unique patterns of an industry
                cluster backed by our time-tested data science models. Our
                ability to underwrite these 'edge' cases, where little formal
                data exists, differentiates us in our markets.
              </p>

              <p>
                Our strength goes beyond just technology. We have a deep branch
                network and a large team spread across the country. Our 'high
                tech, high-touch' approach has helped us reimagine and expand
                the boundaries of possibilities for our unique clientele.
              </p>

              <p>
                We have gone beyond being a lender and helped these businesses
                in market development, quality management and financial
                competence. Thanks to this all-round approach, we have seen
                positive social impact in cross-sectional studies done to
                evaluate the impact on our customers.
              </p>

              <p>
                We do not want to be merely recognized for what we have done but
                also for how we have done it. We will not hesitate to explore
                and experiment, we will keep our customers at the center of all
                that we do, we will always be honest and worthy of trust placed
                in us by our investors and regulators and we will always strive
                to make a difference to the communities we serve.
              </p>

              <p className="text-2xl font-medium text-foreground pt-8 text-center">
                Above all we will stay humble and grateful.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Learn More About Our Journey
          </h3>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Discover how we've grown from a vision in 2013 to empowering over a
            million micro-entrepreneurs across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
            >
              <Link href="/our-story">Read Our Complete Story</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-8 bg-transparent"
            >
              <Link href="/about">About Aye Finance</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
