import { User } from "lucide-react";

export const Bento = () => (
  <div className="flex w-full justify-center">
    <div className="w-11/12 md:w-9/12">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-left text-3xl font-bold uppercase tracking-tighter md:text-8xl">
              Les outils que j'utilise
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md border-2 border-b-4 border-black bg-white p-6 lg:col-span-2 lg:aspect-auto">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col ">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base text-secondary">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted flex  aspect-square flex-col justify-between rounded-md border-2 border-b-4 border-black bg-white p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base text-secondary">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted flex aspect-square flex-col justify-between rounded-md border-2 border-b-4 border-black bg-white p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base text-secondary">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted flex aspect-square h-full flex-col justify-between rounded-md border-2 border-b-4 border-black bg-white p-6 lg:col-span-2 lg:aspect-auto">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base text-secondary">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
