import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import RIButton from "../components/RIButton";
import { RIInput } from "../components/RIInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosInstance } from "../lib/axios";

const FormSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, {
    message: "Password must be at least 6 chars",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const Auth = () => {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const handleLogin = async (values: FormValues) => {
  setIsPending(true);

  try {
    if (tab === "login") {
      // Login API
      await axiosInstance.post("/users/login", {
        login: values.email,
        password: values.password,
      });
      alert("Login success!");
    } else {
      // Register API
      await axiosInstance.post("/users/register", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      });
      alert("Registration success! You can now log in.");
      setTab("login"); // Switch to login after successful registration
    }
  } catch (error) {
    console.log(error);
    alert(tab === "login" ? "Login failed!" : "Registration failed!");
  } finally {
    setIsPending(false);
  }
};

  return (
    <MainLayout>
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <div className="border border-border bg-card p-8">
            
            {/* Tabs */}
            <div className="flex border-b border-border mb-8">
              <button
                onClick={() => setTab("login")}
                className={`flex-1 pb-3 text-sm font-heading font-semibold uppercase tracking-widest ${
                  tab === "login"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setTab("register")}
                className={`flex-1 pb-3 text-sm font-heading font-semibold uppercase tracking-widest ${
                  tab === "register"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                Register
              </button>
            </div>

            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className="space-y-5"
            >
              {tab === "register" && (
                <RIInput
                  label="Full Name"
                  placeholder="Enter your name"
                  {...form.register("fullName")}
                />
              )}

              <RIInput
                label="Email"
                type="email"
                placeholder="operator@rhodes.io"
                {...form.register("email")}
              />

              <RIInput
                label="Password"
                type="password"
                placeholder="••••••••"
                {...form.register("password")}
              />

              <div className="pt-2">
                <RIButton
                  variant="primary"
                  type="submit"
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending
                    ? "Loading..."
                    : tab === "login"
                    ? "Access Terminal"
                    : "Register Operator"}
                </RIButton>
              </div>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6 font-mono">
              {tab === "login"
                ? "No credentials? Switch to Register."
                : "Already registered? Switch to Login."}
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Auth;