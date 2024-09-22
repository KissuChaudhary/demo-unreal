"use client";

import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { modelRowWithSamples } from "@/types/utils";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaImages, FaRocket} from "react-icons/fa";
import ModelsTable from "../ModelsTable";
import ClearModels from "../ClearModels";

export const revalidate = 0;

type ClientSideModelsListProps = {
  serverModels: modelRowWithSamples[] | [];
};

export default function ClientSideModelsList({
  serverModels,
}: ClientSideModelsListProps) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  const [models, setModels] = useState<modelRowWithSamples[]>(serverModels);

  useEffect(() => {
    const channel = supabase
      .channel("realtime-models")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "models" },
        async (payload: any) => {
          const samples = await supabase
            .from("samples")
            .select("*")
            .eq("modelId", payload.new.id);

          const newModel: modelRowWithSamples = {
            ...payload.new,
            samples: samples.data,
          };

          const dedupedModels = models.filter(
            (model) => model.id !== payload.old?.id
          );

          setModels([...dedupedModels, newModel]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, models, setModels]);

  const handleDeleteModels = () => {
    setModels([]);
  };

 return (
  <div id="train-model-container" className="w-full max-w-3xl mx-auto px-4 py-16">
    {models && models.length > 0 && (
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4 w-full justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Your Models</h1>
          <div className="flex gap-2">
            <ClearModels onClear={handleDeleteModels} />
            <Link href="/overview/models/train" className="w-fit">
              <Button size={"sm"}>Train model</Button>
            </Link>
          </div>
        </div>
        <ModelsTable models={models} />
      </div>
    )}
    {models && models.length === 0 && (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
        <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Create Best Version of You!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Train your own AI model to generate custom headshots with ease. It's fast, simple, and tailored just for you!
        </p>
        <Link href="/overview/models/train">
          <Button size="lg" className="bg-indigo-800 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
            Train Your First Model
          </Button>
        </Link>
      </div>
    )}
  </div>
);
}
