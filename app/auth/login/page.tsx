import { Header } from "@/components/Header";
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
