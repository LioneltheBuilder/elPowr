"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/src/presentation/components/ui/button";
import { Input } from "@/src/presentation/components/ui/input";
import { Label } from "@/src/presentation/components/ui/label";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);

  const schema = z.object({
    email: z
      .string()
      .min(1, {
        message: "This field is required",
      })
      .regex(emailRegex, {
        message: "Email format is not valid. Example: user@mail.com",
      })
      .transform((val) => val.toLowerCase()),

    password: z
      .string()
      .min(6, {
        message: "The password must contain at least 6 characters",
      })
      .regex(passwordRegex, {
        message: "The password must contain at least one letter and one number",
      })
     
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = async () => {
    setIsLoading(true);

    setLoginSuccess(null);
    try {
      
      setTimeout(() => {
        router.push("/home");
      }, 2000); 
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="hidden bg-muted lg:block ">
        {/* <Image
          src={Bghero}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>

      <div className="flex items-center justify-center py-12 md:h-full">
        <form
          className="mx-auto grid w-[350px] gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-2 text-center text-white">
            <div className="flex justify-center py-5">
              {/* <Image
                src={Logo}
                alt="Logo"
                width={250}
                height={260}
                className="object-fit"
              /> */}
            </div>
            <h1 className="text-2xl font-bold">
            Access Your Digital Builders Dashboard
            </h1>
          </div>
          <div className="grid gap-4 pt-8">
            <div className="grid gap-2 text-white">
              <Label htmlFor="email">Email Address</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Enter email address"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <small className="text-red-500 mt-1">{errors.email.message}</small>}
            </div>
            <div className="grid gap-2 text-white">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Enter password"
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <small className="text-red-500 mt-1">{errors.password.message}</small>}
            </div>
            <div className="flex justify-between py-2 text-gray-300">
            
              <Link
                href="/recover-password"
                className="ml-auto inline-block text-sm hover:underline"
              >
                Recover password?
              </Link>
            </div>

            {loginSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{loginSuccess}</span>
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-[#9AE662] text-black hover:bg-[#9AE662]/90"
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-300">
            Don&apos;t have an account?{" "}
            <Link href="sign-up" className="text-[#9AE662] hover:underline">
              Register Now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;