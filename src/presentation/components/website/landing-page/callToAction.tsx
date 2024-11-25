import { Button } from "@/src/presentation/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-screen-xl mx-auto md:px-8 border p-2 md:p-4 rounded-lg">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-lg sm:rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl md:px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-[#9AE662] font-semibold">
              Professional services
            </h3>
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Build Your Dream Project with Digital Builders
            </p>
            <p className="mt-3 text-gray-400">
              Partner with our team of experienced developers and tech
              enthusiasts to bring your ideas to life. From concept to
              deployment, we provide tailored solutions to create innovative web
              apps, SaaS platforms, and more. Let’s transform your vision into
              reality and help you scale effortlessly.
            </p>
            <Link href="/services" className="inline-flex gap-x-1 items-center">
              <Button className="bg-transparent gap-4 bg-[#9AE662] hover:bg-[#9AE662]/90 text-black">
                Get Started Today
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
