import Link from "next/link";
import * as motion from "framer-motion/client";
import { Button } from "~/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "~/lib/utils";
import { HydrateClient, api } from "~/trpc/server";

const menuItems = [
  { label: "New Case", href: "/" },
  { label: "Continue Case", href: "/", requiresCase: true },
  { label: "Logout", href: "/api/auth/signout" },
];

export default async function TitleMenu() {
  const hasCase = await api.case.hasCase();

  return (
    <HydrateClient>
      <div className="relative h-screen w-full bg-[url('/images/home-office.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex h-full flex-col items-center justify-center text-white"
        >
          <h1 className="text-6xl drop-shadow-red">MATH DETECTIVE</h1>
          <h2 className="mb-8 text-3xl">Operation Unknown</h2>
          <div className="flex flex-col items-center gap-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group flex items-center",
                  item.requiresCase &&
                    !hasCase &&
                    "pointer-events-none opacity-50",
                )}
              >
                <Button size="lg" disabled={item.requiresCase && !hasCase}>
                  <Search className={cn("hidden group-hover:block")} />{" "}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </HydrateClient>
  );
}
