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
              Fostering academic excellence and scholarly collaboration since 1985
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground/90 leading-relaxed mb-6">
              The Academic Association serves as a vital hub for researchers, scholars, and analysts 
              dedicated to advancing knowledge across diverse fields of study. Our organization brings 
              together leading minds to share insights, collaborate on research initiatives, and contribute 
              to the broader academic community.
            </p>
            
            <p className="text-foreground/90 leading-relaxed mb-6">
              Founded with a commitment to rigorous scholarship and intellectual exchange, we have grown 
              into a respected institution that supports both established researchers and emerging scholars. 
              Our programs span conferences, workshops, publications, and collaborative research projects.
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
                      To advance scholarly research and promote intellectual dialogue that addresses 
                      contemporary challenges and contributes to societal progress.
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
                      A diverse network of over 500 affiliated researchers from institutions 
                      worldwide, fostering interdisciplinary collaboration.
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
                      Supporting the dissemination of research through our quarterly journal 
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
                      Annual awards program celebrating outstanding contributions to research 
                      and scholarly excellence.
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
                scholars committed to interdisciplinary research collaboration.
              </p>
              <p>
                <strong className="text-foreground">1990:</strong> Launched our flagship annual symposium, 
                which has become a premier gathering for researchers worldwide.
              </p>
              <p>
                <strong className="text-foreground">2000:</strong> Established our peer-reviewed journal, 
                providing a platform for cutting-edge research across disciplines.
              </p>
              <p>
                <strong className="text-foreground">2010:</strong> Expanded our digital presence and 
                introduced virtual participation options for global accessibility.
              </p>
              <p>
                <strong className="text-foreground">2020:</strong> Celebrated 35 years of academic 
                excellence with over 500 affiliated researchers and 1000+ published articles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
