import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutMe = () => (
  <div className="flex w-full justify-center">
    <div className="w-11/12 md:w-9/12">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex h-full flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold uppercase md:text-7xl">
              A PROPOS DE MOI
            </h1>
            <p className="text-muted-foreground max-w-md text-left text-xl leading-relaxed tracking-tight">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-square rounded-md border-2 border-b-4 border-black bg-white"></div>
          <div className="row-span-2 rounded-md border-2 border-b-4 border-black bg-white"></div>
          <div className="aspect-square rounded-md border-2 border-b-4 border-black bg-white"></div>
        </div>
      </div>
    </div>
  </div>
);
