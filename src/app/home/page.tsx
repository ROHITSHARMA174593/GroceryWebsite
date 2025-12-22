import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#00a63a]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-[#00a63a] mb-4">Welcome Home, {session.user.name}</h1>
        <p className="text-gray-600 mb-2">You are successfully logged in.</p>
        <p className="text-gray-500 text-sm font-mono bg-gray-100 p-2 rounded">User ID: {session.user.email}</p>
      </div>
    </div>
  );
}
