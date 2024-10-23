import Link from "next/link";
import * as motion from "framer-motion/client";
import { Button } from "~/components/ui/button";

export default function Login() {
  return (
    <div className="relative h-screen w-full bg-[url('/images/city-street.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex h-full flex-col items-center justify-center text-white"
      >
        <h1 className="drop-shadow-red text-6xl">MATH DETECTIVE</h1>
        <h2 className="mb-8 text-3xl">Operation Unknown</h2>
        <div className="flex flex-col gap-y-2">
          <Link href="/api/auth/signin">
            <Button size="lg" className="">
              LOGIN
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
