"use client";

import { FaImages, FaRocket } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { modelRowWithSamples } from "@/types/utils";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaImages } from "react-icons/fa";
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
  <div id="train-model-container" className="w-full max-w-4xl mx-auto px-4 py-8">
    {models && models.length > 0 && (
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4 w-full justify-between items-center text-center">
          <h1 className="text-2xl font-bold text-gray-800">Your Models</h1>
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg p-8">
        <div className="bg-blue-100 p-6 rounded-full mb-6">
          <FaImages size={64} className="text-blue-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Get Started with Your First Model
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Train your first AI model and unlock the power of custom image generation. It's quick, easy, and opens up a world of creative possibilities!
        </p>
        <Link href="/overview/models/train">
          <Button size={"lg"} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
            <FaRocket className="mr-2" />
            Train Your First Model
          </Button>
        </Link>
      </div>
    )}
  </div>
);
}
