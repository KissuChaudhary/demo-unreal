"use client";

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
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
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="py-3 px-4 font-semibold text-gray-900">Name</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-900">Status</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-900">Type</TableHead>
            <TableHead className="py-3 px-4 font-semibold text-gray-900">Samples</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models?.map((model) => (
            <TableRow
              key={model.id}
              onClick={() => handleRedirect(model.id)}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <TableCell className="py-4 px-4 font-medium text-gray-900">{model.name}</TableCell>
              <TableCell className="py-4 px-4">
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={model.status === "processing" ? "secondary" : "default"}
                    className={`px-2 py-1 text-xs font-medium ${
                      model.status === "processing" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {model.status === "processing" ? "Training" : model.status}
                  </Badge>
                  {model.status === "processing" && (
                    <Loader2 className="h-4 w-4 animate-spin text-yellow-600" />
                  )}
                </div>
              </TableCell>
              <TableCell className="py-4 px-4 text-gray-700">{model.type}</TableCell>
              <TableCell className="py-4 px-4">
                <div className="flex items-center space-x-2">
                  {model.samples.slice(0, 3).map((sample, index) => (
                    <Avatar key={index} className="h-8 w-8 border-2 border-white shadow-sm">
                      <AvatarImage src={sample.uri} alt={`Sample ${index + 1}`} />
                      <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                        {index + 1}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {model.samples.length > 3 && (
                    <Badge variant="outline" className="rounded-full px-2 py-1 text-xs font-medium text-gray-600 border-gray-300">
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
