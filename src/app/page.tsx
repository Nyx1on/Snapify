import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-bold w-1/2">
        <h2>Login via Spotify to use</h2>
        <Button title="Login" />
      </div>
    </main>
  );
}
