import { useState } from "react";
import { Calendar, Clock, MapPin, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - can be replaced with actual data
const events = [
  {
    id: 1,
    title: "Annual Research Symposium 2025",
    date: "2025-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "Main Conference Hall",
    type: "Conference",
    description: "Join us for our flagship annual event featuring keynote speakers and research presentations.",
  },
  {
    id: 2,
    title: "Introduction to Quantitative Methods",
    date: "2025-02-20",
    time: "2:00 PM - 4:00 PM",
    location: "Room 301",
    type: "Workshop",
    description: "Hands-on workshop covering fundamental quantitative research methods.",
  },
  {
    id: 3,
    title: "Distinguished Scholar Lecture Series",
    date: "2025-02-28",
    time: "6:00 PM - 7:30 PM",
    location: "Virtual",
    type: "Lecture",
    description: "Monthly lecture featuring leading scholars in various fields.",
  },
  {
    id: 4,
    title: "Research Ethics Seminar",
    date: "2025-03-05",
    time: "3:00 PM - 5:00 PM",
    location: "Room 205",
    type: "Seminar",
    description: "Discussion on ethical considerations in contemporary research.",
  },
];

const eventTypes = ["All", "Conference", "Workshop", "Lecture", "Seminar"];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredEvents = selectedType === "All" 
    ? events 
    : events.filter(event => event.type === selectedType);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">
              Events
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover upcoming lectures, seminars, workshops, and conferences
            </p>
          </div>

          {/* Filter */}
          <div className="mb-8 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by type:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="font-serif text-2xl">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
