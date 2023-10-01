"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../UI/signUpForm/Form";
import { Button } from "../UI/signUpForm/Button";
import { InputField } from "../UI/signUpForm/InputField";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
// import Image from "next/image";

const FormSchema = z.object({
  email: z.string().min(1, "ایمیل الزامی است!").email("ایمیل نامعتبر است!"),
  password: z
    .string()
    .min(1, "رمز عبور الزامی است!")
    .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد!"),
});

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast.error("اوه، یک خطائی رخ داده است!", {});
    } else {
      router.push("/");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ایمیل</FormLabel>
                <FormControl>
                  <InputField placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <InputField
                    type="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          ورود
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        یا
      </div>

      {/* <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <button
          className="flex items-center justify-between text-lg md:text-2xl font-bold"
          onClick={() => signIn("github")}
        >
          <span className=" ml-3">ورود با گیت‌هاب</span>
          <Image
            src="/images/github.png"
            alt=""
            width={20}
            height={20}
            className=" object-contain"
          />
        </button>
      </div> */}

      <p className="text-center text-sm text-gray-600 mt-2">
        اگر هنوز حساب کاربری ندارید:
        <Link className="text-blue-500 hover:underline mr-1" href="/signup">
          ثبت‌نام
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
