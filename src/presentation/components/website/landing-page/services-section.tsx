import {
  BarChart3,
  Cloud,
  CreditCard,
  Settings2,
  ShieldCheck,
  User2,
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-[#131412] rounded-xl p-6 transition-all">
      <div className="flex gap-4">
        <div className="mt-1 text-green-400">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesGrid() {
  const features = [
    {
      icon: <User2 className="h-6 w-6" />,
      title: 'Web Development',
      description:
        'Custom websites, eCommerce platforms, and scalable applications',
    },
    {
      icon: <Settings2 className="h-6 w-6" />,
      title: 'Marketing',
      description: 'Data-driven digital strategies to grow your brand',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Events',
      description:
        'Hosting impactful conferences, activations, and networking events',
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Easy Payment',
      description:
        'Comprehend the behavior of group participants in relation to tasks, standards.',
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud based access',
      description:
        'The cloud offers easy setup, high availability and lower to maintenance costs.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description:
        'We believe in pushing the boundaries of what is possible explore emerging technology',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
            <span className="mr-1">+</span> What We Offer
          </div>
          <h2 className="text-4xl md:text-3xl text-white w-[650px] mx-auto pt-3">
            We’re passionate about helping businesses grow and developers
            thrive. Here’s how we can help you
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
