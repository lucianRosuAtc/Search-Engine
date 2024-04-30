"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
    variant={"link"}
      onClick={() => router.back()}
      className="flex gap-2 items-center text-sm pb-2"
    >
      <ChevronLeft className="h-4 w-4" />
      Back
    </Button>
  );
}

// MARK:  const router = useRouter(); <Button onClick={() => router.back()} is like pressing the Back button from the browser. It will take you back to the previous page in the browser history. The Button component is a custom button component that we created in the previous section. We are using it here to create a back button. The onClick event handler is used to handle the click event on the button. When the button is clicked, the router.back() function is called, which takes the user back to the previous page in the browser history. This is a common pattern for creating back buttons in web applications. The className prop is used to apply custom styles to the button. In this case, we are adding some spacing and alignment styles to the button. This makes the button look more visually appealing and easier to use.
