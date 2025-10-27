import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data
const people = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Research Fellow",
    specialization: ["Qualitative Research", "Social Sciences", "Education Policy"],
    bio: "Dr. Johnson has over 15 years of experience in qualitative research methodologies with a focus on educational equity and access. She has published extensively on research methods and social policy.",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Distinguished Professor",
    specialization: ["Digital Learning", "Technology Integration", "Higher Education"],
    bio: "Professor Chen leads research initiatives on digital transformation in higher education. His work examines the intersection of technology, pedagogy, and institutional change.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Associate Fellow",
    specialization: ["Research Ethics", "Human Subjects", "IRB Protocols"],
    bio: "Dr. Rodriguez specializes in ethical frameworks for research involving human participants. She serves on multiple institutional review boards and consults on research ethics internationally.",
  },
  {
    id: 4,
    name: "Dr. James Thompson",
    title: "Policy Analyst",
    specialization: ["Data Analytics", "Public Policy", "Program Evaluation"],
    bio: "Dr. Thompson combines quantitative methods with policy analysis to evaluate social programs. His research informs evidence-based policy making at local and national levels.",
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    title: "Research Scientist",
    specialization: ["Mixed Methods", "Community Engagement", "Participatory Research"],
    bio: "Dr. Park develops innovative approaches to community-based participatory research. Her work bridges academic research and community action for social change.",
  },
  {
    id: 6,
    name: "Prof. Robert Williams",
    title: "Emeritus Fellow",
    specialization: ["Historical Analysis", "Archival Research", "Scholarly Communication"],
    bio: "Professor Williams brings decades of expertise in historical research methods and scholarly communication. He mentors early-career researchers and advises on archival practices.",
  },
];

const People = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">
              Our People
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet our distinguished community of scholars and researchers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {people.map((person) => (
              <Card key={person.id} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    {person.name}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-secondary">
                    {person.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {person.specialization.map((spec) => (
                      <Badge key={spec} variant="outline">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {person.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default People;
