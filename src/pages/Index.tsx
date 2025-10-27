import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookOpen, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Advancing Scholarship Through Collaboration
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join our community of distinguished researchers and scholars dedicated to 
              fostering intellectual dialogue and advancing knowledge across disciplines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Academic Events</CardTitle>
                <CardDescription>
                  Attend lectures, seminars, workshops, and conferences led by leading scholars
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link">
                  <Link to="/events">View Calendar →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-2xl">Publications</CardTitle>
                <CardDescription>
                  Access cutting-edge research articles and scholarly publications from our network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link">
                  <Link to="/publications">Browse Research →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Community</CardTitle>
                <CardDescription>
                  Connect with distinguished analysts and researchers from institutions worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link">
                  <Link to="/people">Meet Our Team →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Latest Updates
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="font-serif text-xl">
                        Annual Research Symposium 2025
                      </CardTitle>
                      <CardDescription>March 15, 2025</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Registration is now open for our flagship annual event. Join us for keynote 
                    presentations, panel discussions, and networking opportunities with leading researchers.
                  </p>
                  <Button asChild variant="link" className="px-0">
                    <Link to="/events">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="font-serif text-xl">
                        New Publication: Research Methods Quarterly
                      </CardTitle>
                      <CardDescription>February 2025</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Our latest journal issue features groundbreaking research on qualitative methodologies 
                    and innovative approaches to data analysis.
                  </p>
                  <Button asChild variant="link" className="px-0">
                    <Link to="/publications">Read Now →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Join Our Academic Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with scholars, access exclusive resources, and contribute to advancing 
              research in your field.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
