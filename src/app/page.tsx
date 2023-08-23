import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-between">
        <div
          className="flex flex-col justify-center align-middle h-screen w-full md:w-1/2 p-24"
          style={{ backgroundColor: "#191414", color: "white" }}
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl lg:text-5xl py-1 font-lora">
              Elevate Your Music Mood
            </h1>
            <p className="text-2xl md:2xl lg:2xl py-2 font-thin">
              Custom Playlists, Artist & Genre Options, and Enriched Spotify
              Profile View
            </p>
            <Button
              title="Login"
              style={{
                fontSize: "1.25rem",
                borderRadius: "30px",
                padding: "10px 30px",
              }}
            />
          </div>
        </div>
        <div
          className="w-1/2 relative"
          style={{
            backgroundImage: `url("/images/bg3.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "-100px",
            minHeight: "100vh",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#1DB954",
              opacity: "0.3",
            }}
          />
        </div>
      </main>
    </>
  );
}
