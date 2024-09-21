import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const WaitingForMagicLink = ({
  toggleState,
}: {
  toggleState: () => void;
}) => {
  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-sm max-w-sm w-full">
          <h1 className="block text-center text-xl font-bold text-gray-800 dark:text-white">
            Check your email
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We've emailed you a magic link to access your account.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Hint: it might be in your spam folder.
            </p>
          </div>
          <div>
            <Button
              onClick={toggleState}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium 
            rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 hover:text-white 
            focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              size="sm"
            >
              <ArrowLeft size={14} />
              Go back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
