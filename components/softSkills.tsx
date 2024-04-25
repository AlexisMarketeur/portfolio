import { Check } from "lucide-react";

export const SoftSkills = () => (
  <div className="flex w-full justify-center bg-backgroundSecondary">
    <div className="w-11/12 md:w-9/12">
      <div className="flex w-full flex-col items-start gap-4 ">
        <h2 className="text-3xl font-bold uppercase md:text-8xl">
          SOFT SKILLS
        </h2>

        <div className="flex w-full flex-col gap-10 pt-12">
          <div className="grid grid-cols-2 items-start gap-10 lg:grid-cols-3">
            <div className="flex w-full flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
