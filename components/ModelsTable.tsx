import React from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus } from "lucide-react";
import { modelRowWithSamples } from "@/types/utils";

type ModelsTableProps = {
  models: modelRowWithSamples[];
};

export default function ModelsTable({ models }: ModelsTableProps) {
  const router = useRouter();

  const handleRedirect = (id: number) => {
    router.push(`/overview/models/${id}`);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[300px] font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Samples</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models?.map((model) => (
            <TableRow
              key={model.id}
              onClick={() => handleRedirect(model.id)}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <TableCell className="font-medium">{model.name}</TableCell>
              <TableCell>
                <Badge 
                  variant={model.status === "processing" ? "secondary" : "default"}
                  className={`flex items-center space-x-1 ${
                    model.status === "processing" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                  }`}
                >
                  {model.status === "processing" && (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  )}
                  <span>{model.status === "processing" ? "Training" : "Ready"}</span>
                </Badge>
              </TableCell>
              <TableCell>{model.type}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  {model.samples.slice(0, 3).map((sample, index) => (
                    <Avatar key={index} className="h-8 w-8">
                      <AvatarImage src={sample.image_url} alt={`Sample ${index + 1}`} />
                      <AvatarFallback>{index + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                  {model.samples.length > 3 && (
                    <Badge variant="outline" className="rounded-full">
                      <Plus className="h-3 w-3 mr-1" />
                      {model.samples.length - 3}
                    </Badge>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
