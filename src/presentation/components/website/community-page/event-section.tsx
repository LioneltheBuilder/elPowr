import Image from 'next/image';
import { Button } from '@/src/presentation/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/presentation/components/ui/card';

const eventTypes = [
  {
    title: 'Conferences',
    description:
      'Dive into cutting-edge topics with experts leading the way. Our conferences are where innovation takes the stage.',
    image: '/community/events.png',
  },
  {
    title: 'Activations',
    description:
      'Experience hands-on activations that bring your ideas to life and immerse yourself in innovation.',
    image: '/community/activations.png',
  },
  {
    title: 'Workshops',
    description:
      'Practical, skill-based sessions to level up your abilities and apply knowledge immediately.',
    image: '/community/events1.jpg',
  },
  {
    title: 'Networking',
    description:
      'Build connections with peers and industry leaders in curated networking events.',
    image: '/community/network.jpg',
  },
];

export function EventsSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 relative py-12">
      <div className="container mx-auto px-4">
        <div className='flex flex-col justify-center items-center'>
          <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
            <span className="mr-1">+</span> Events
          </div>
          <h2 className="text-4xl md:text-4xl leading-tight text-white py-6">
            Events That Empower You to Build Boldly
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {eventTypes.map((event, index) => (
            <Card key={index} className="overflow-hidden bg-transparent border-gray-500/50">
              <CardHeader className="p-0">
                <Image
                  src={event.image}
                  alt={`${event.title} event`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="px-3 py-2">
                <CardTitle className="text-lg text-white mb-2">{event.title}</CardTitle>
                <p className="text-gray-400">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">See Upcoming Events</Button>
        </div>
      </div>
    </section>
  );
}
