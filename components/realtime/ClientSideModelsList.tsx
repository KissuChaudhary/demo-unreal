"use client";
import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { modelRowWithSamples } from "@/types/utils";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModelsTable from "../ModelsTable";
import ClearModels from "../ClearModels";
import PhotoRequirementsModal from "./PhotoRequirementsModal";

export const revalidate = 0;

type ClientSideModelsListProps = {
  serverModels: modelRowWithSamples[] | [];
};

const PhotoUploadInstructions: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => (
  <div className="mb-6 max-w-3xl mx-auto px-2">
    <h2 className="text-2xl font-bold mb-3">Upload your best photos</h2>
    <p className="text-blue-600 mb-2">
      IMPORTANT: The headshots depend completely on the photos you upload.
      Upload at least 10 photos. Follow the photo requirements carefully.
    </p>
    <p className="text-red-600 mb-3">⚠️ Bad photos = Bad Headshots</p>
    <div className="flex sm:grid sm:grid-cols-3 gap-3 mb-3 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 scrollbar-hide">
      <div className="border border-red-500 rounded-lg p-2 min-w-[200px] sm:w-full aspect-[4/5] flex-shrink-0">
        <img src="/content/headshot5.webp" alt="No group shots" className="w-full h-full object-cover mb-2 rounded-lg" />
        <p className="text-center">👥 No group shots</p>
      </div>
      <div className="border border-red-500 rounded-lg p-2 min-w-[200px] sm:w-full aspect-[4/5] flex-shrink-0">
        <img src="/content/headshot5.webp" alt="No blurry or low resolution photos" className="w-full h-full object-cover mb-2 rounded-lg" />
        <p className="text-center">🖼️ No blurry or low resolution photos</p>
      </div>
      <div className="border border-red-500 rounded-lg p-2 min-w-[200px] sm:w-full aspect-[4/5] flex-shrink-0">
        <img src="/content/headshot5.webp" alt="No old photos" className="w-full h-full object-cover mb-2 rounded-lg" />
        <p className="text-center">👴 No old photos</p>
      </div>
    </div>
    <button
      className="text-blue-500 underline"
      onClick={onOpenModal}
    >
      📋 Read complete photo requirements
    </button>
  </div>
);


export default function ClientSideModelsList({
  serverModels,
}: ClientSideModelsListProps) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  const [models, setModels] = useState<modelRowWithSamples[]>(serverModels);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div id="train-model-container" className="w-full mx-auto px-4 py-16">
      <PhotoUploadInstructions onOpenModal={openModal} />
      <PhotoRequirementsModal isOpen={isModalOpen} onClose={closeModal} />
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
        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
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
        </div>
      )}
    </div>
  );
}
