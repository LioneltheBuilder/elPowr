
import { mission } from "@/src/presentation/constant/mission";

export default function MissionSection() {
  

  return (
    <div className="text-white py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
              <span className="mr-1">+</span> Our Values
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Delivering <span className="text-[#9AE662]">Excellence</span> in
              <br />
              Project <span className="text-[#9AE662]">Management</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {mission.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#BFFF00]/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#BFFF00]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
