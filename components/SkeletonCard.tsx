import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-50">
        {/* Ajusta la altura para coincidir con la imagen */}
        <Skeleton className="h-60 w-full" />
      </div>
      <div className="p-4">
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-full h-8" /> {/* Ajusta para el título */}
          <Skeleton className="w-3/4 h-6" /> {/* Ajusta para la descripción */}
          <Skeleton className="w-1/2 h-6" /> {/* Ajusta si es necesario */}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="w-1/3 h-8" /> {/* Ajusta para el precio */}
          <Skeleton className="w-1/4 h-10" /> {/* Ajusta para el botón */}
        </div>
      </div>
    </div>
  );
}
