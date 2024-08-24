'use client'

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PlaceholderDocument() {
  const router = useRouter();
  
  const handleClick = () => {
    // check is user is free and if they are over the file limit, push them to the upgrade page
    router.push("/dashboard/upload");
  }

  return (
    <Button onClick={handleClick} className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
        <PlusCircleIcon className="h-16 w-16" />
        <p>Add a document</p>
    </Button>
  );
}
export default PlaceholderDocument;