import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { data } from "@/public/data.json";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Modal() {
  const certifications = data.certifications;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="flex transform gap-2 transition-all duration-300 hover:opacity-75"
        >
          Voir plus <GraduationCap />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Mes diplômes et certifications</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4 ">
          <div className="no-scrollbar h-80 w-full overflow-y-scroll">
            {/* <hr /> */}
            {certifications.map((certification, index) => (
              <div key={index} className="flex w-full flex-col">
                <div className="flex w-full py-3 sm:py-1">
                  <Image
                    src={certification.logo}
                    alt={certification.name}
                    height={60}
                    width={60}
                    className="mt-1"
                    objectFit="none"
                  />
                  <div className="flex w-full flex-col justify-center gap-1 pl-4">
                    <div>
                      <div className="flex justify-between">
                        <h3 className=" text-sm">{certification.title}</h3>
                        <Button
                          variant="link"
                          size="default"
                          className="hidden justify-start text-xs font-normal text-neutral-500 underline hover:opacity-75 md:flex"
                          asChild
                        >
                          <Link href={certification.link} target="_blank">
                            afficher
                          </Link>
                        </Button>
                      </div>
                      <p className="text-xs text-neutral-500">
                        {certification.name} | {certification.date}
                      </p>
                      <Button
                        variant="link"
                        size="default"
                        className="justify-start text-xs font-normal text-neutral-500 underline hover:opacity-75 md:hidden"
                        asChild
                      >
                        <Link href={certification.link} target="_blank">
                          afficher
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          {/* <p className="text-xs text-neutral-500">Alexis Rodrigues</p> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
