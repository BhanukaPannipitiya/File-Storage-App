"use client";
import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useSession,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const files = useQuery(api.files.getFiles);
  const createFile = useMutation(api.files.createFile); 

  //onClick handler that calls the createFile mutation with a static name
  const handleCreateFileClick = () => {
    createFile({ name: "NewFile" });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <Button>Sign out</Button>
        <SignOutButton></SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}
      <Button onClick={handleCreateFileClick}>Press me to create a file</Button>

    </main>
  );
}
