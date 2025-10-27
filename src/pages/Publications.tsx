import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data
const publications = [
  {
    id: 1,
    title: "Contemporary Approaches to Qualitative Research",
    author: "Dr. Sarah Johnson",
    year: 2024,
    category: "Research Methods",
    abstract: "This comprehensive study examines evolving methodologies in qualitative research across various academic disciplines.",
  },
  {
    id: 2,
    title: "Digital Transformation in Higher Education",
    author: "Prof. Michael Chen",
    year: 2024,
    category: "Education",
    abstract: "An analysis of technological integration in modern academic institutions and its impact on learning outcomes.",
  },
  {
    id: 3,
    title: "Ethics in Social Science Research",
    author: "Dr. Emily Rodriguez",
    year: 2023,
    category: "Ethics",
    abstract: "Exploring ethical frameworks and practical considerations for researchers in social sciences.",
  },
  {
    id: 4,
    title: "Data Analytics for Policy Making",
    author: "Dr. James Thompson",
    year: 2023,
    category: "Policy",
    abstract: "Examining how data-driven approaches are shaping contemporary policy development and evaluation.",
  },
];

const categories = ["All", "Research Methods", "Education", "Ethics", "Policy"];

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || pub.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">
              Publications
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore research articles and publications from our affiliated analysts
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, author, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Category:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub) => (
                <Card key={pub.id} className="hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="font-serif text-2xl">
                          {pub.title}
                        </CardTitle>
                        <CardDescription>
                          {pub.author} • {pub.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{pub.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{pub.abstract}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No publications found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
