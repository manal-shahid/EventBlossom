"use client"

import { useState, useMemo } from "react"
import { Search, Calendar, MapPin, Users, Heart, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample event data with girly themes
const sampleEvents = [
  {
    id: 1,
    name: "Enchanted Garden Music Festival",
    date: "2025-06-15",
    time: "6:00 PM",
    location: "Gulberg Greens, Islamabad",
    description:
      "A magical evening of live music surrounded by blooming flowers. Featuring indie artists, fairy lights, and artisanal treats.",
    category: "Music",
    attendees: 250,
  },
  {
    id: 2,
    name: "Startup Connect",
    date: "2025-06-20",
    time: "11:00 AM",
    location: "NUST Incubation Center",
    description:
      "Meet startups, investors, and innovators. Featuring keynote speakers and empowerment workshops.",
    category: "Business",
    attendees: 150,
  },
  {
    id: 3,
    name: "Music Fest 2025",
    date: "2025-06-25",
    time: "6:00 PM",
    location: "Centaurus Mall, Islamabad",
    description: "Enjoy a night full of music, food, and fun.",
    category: "Music",
    attendees: 300,
  },
  {
    id: 4,
    name: "Cupcakes Tasting",
    date: "2025-07-02",
    time: "4:00 PM",
    location: "Layers Bakers, Islamabad",
    description:
      "Indulge in gourmet cupcakes in an Instagram-worthy setting with floral backdrops.",
    category: "Food",
    attendees: 120,
  },
  {
    id: 5,
    name: "Pilates in the Park",
    date: "2025-07-05",
    time: "8:00 AM",
    location: "F-9 Park, Islamabad",
    description:
      "Gentle morning pilates session among cherry blossoms. Includes yoga mats, healthy smoothies, and good vibes only!",
    category: "Fitness",
    attendees: 45,
  },
]

export default function FeaturedEventsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter events based on search term
  const filteredEvents = useMemo(() => {
    return sampleEvents.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Music: "bg-purple-100 text-purple-700 border border-purple-200",
      Business: "bg-pink-100 text-pink-700 border border-pink-200",
      Art: "bg-rose-100 text-rose-700 border border-rose-200",
      Food: "bg-orange-100 text-orange-700 border border-orange-200",
      Fitness: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Heart className="h-8 w-8 text-pink-500 mr-2" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  EventBlossom
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-pink-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 px-3 py-2 text-sm font-medium transition-colors rounded-full bg-pink-50"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-pink-50"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-pink-600">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 opacity-20">
          <Sparkles className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Star className="h-12 w-12 text-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Discover Events Near You ✨</h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto drop-shadow">
              Connect with your community through magical local events, workshops, and dreamy gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Sparkles className="h-8 w-8 text-pink-500 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Featured Events
              </h2>
              <Sparkles className="h-8 w-8 text-pink-500 ml-2" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these absolutely dreamy upcoming events in your area 💕
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for magical events... ✨"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 w-full text-lg rounded-full border-2 border-pink-200 focus:border-pink-400 focus:ring-pink-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-2 border-pink-100 rounded-3xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                      className={`${getCategoryColor(event.category)} rounded-full px-3 py-1 text-xs font-semibold`}
                    >
                      {event.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 bg-white/60 rounded-full px-2 py-1">
                      <Users className="h-4 w-4 mr-1 text-pink-400" />
                      {event.attendees}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 leading-tight">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 bg-pink-50 rounded-xl p-3">
                      <Calendar className="h-5 w-5 mr-3 flex-shrink-0 text-pink-500" />
                      <div>
                        <p className="font-medium text-gray-800">{formatDate(event.date)}</p>
                        <p className="text-sm text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600 bg-purple-50 rounded-xl p-3">
                      <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-purple-500" />
                      <p className="text-sm font-medium text-gray-800">{event.location}</p>
                    </div>
                    <CardDescription className="text-gray-700 line-clamp-3 leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    Register Now 💖
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-pink-300 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">No magical events found ✨</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse all our dreamy events.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Heart className="h-8 w-8 text-pink-200 mr-2" />
              <h3 className="text-2xl font-bold">EventBlossom</h3>
              <Heart className="h-8 w-8 text-pink-200 ml-2" />
            </div>
            <p className="text-pink-100 mb-6">Connecting communities through magical local events ✨</p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-pink-200 hover:text-white transition-colors rounded-full hover:bg-white/10 px-3 py-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-pink-200 hover:text-white transition-colors rounded-full hover:bg-white/10 px-3 py-1"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-pink-200 hover:text-white transition-colors rounded-full hover:bg-white/10 px-3 py-1"
              >
                Contact Us
              </a>
            </div>
            <p className="text-pink-200 text-sm mt-6">© 2025 EventBlossom. Made with 💕</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
