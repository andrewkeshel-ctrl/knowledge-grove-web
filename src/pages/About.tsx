import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Fostering psychoanalytic excellence and professional collaboration since 1985
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground/90 leading-relaxed mb-6">
              The Georgian Society of Contemporary Psychoanalysis serves as a vital hub for psychoanalysts, 
              psychotherapists, and mental health professionals dedicated to advancing psychoanalytic theory 
              and practice. Our organization brings together leading practitioners to share insights, 
              collaborate on clinical initiatives, and contribute to the broader psychoanalytic community in Georgia.
            </p>
            
            <p className="text-foreground/90 leading-relaxed mb-6">
              Founded with a commitment to rigorous clinical practice and intellectual exchange, we have grown 
              into a respected institution that supports both established psychoanalysts and emerging practitioners. 
              Our programs span conferences, workshops, publications, and collaborative clinical research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-foreground/80">
                      To advance psychoanalytic practice and promote clinical dialogue that addresses 
                      contemporary mental health challenges and contributes to therapeutic progress.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Our Community</h3>
                    <p className="text-foreground/80">
                      A diverse network of psychoanalysts and mental health professionals from 
                      across Georgia, fostering interdisciplinary clinical collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Publications</h3>
                    <p className="text-foreground/80">
                      Supporting the dissemination of psychoanalytic research through our quarterly journal 
                      and annual conference proceedings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Recognition</h3>
                    <p className="text-foreground/80">
                      Annual awards program celebrating outstanding contributions to psychoanalytic practice 
                      and clinical excellence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="font-serif text-2xl font-bold mb-4">History</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                <strong className="text-foreground">1985:</strong> Founded by a group of distinguished 
                psychoanalysts committed to advancing contemporary psychoanalytic practice in Georgia.
              </p>
              <p>
                <strong className="text-foreground">1990:</strong> Launched our flagship annual symposium, 
                which has become a premier gathering for psychoanalysts across the region.
              </p>
              <p>
                <strong className="text-foreground">2000:</strong> Established our peer-reviewed journal, 
                providing a platform for cutting-edge psychoanalytic research and clinical case studies.
              </p>
              <p>
                <strong className="text-foreground">2010:</strong> Expanded our digital presence and 
                introduced virtual participation options for international accessibility.
              </p>
              <p>
                <strong className="text-foreground">2020:</strong> Celebrated 35 years of psychoanalytic 
                excellence with a thriving community of practitioners and numerous published clinical contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
