import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <Button>Sign out</Button>
        <SignOutButton></SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
        <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
    </main>
  );
}
