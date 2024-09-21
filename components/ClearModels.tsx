import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

export const dynamic = "force-dynamic";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey =
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("MISSING NEXT_PUBLIC_SUPABASE_URL!");
}

if (!supabaseServiceRoleKey) {
  throw new Error("MISSING SUPABASE_SERVICE_ROLE_KEY!");
}

const supabaseAuth = createClientComponentClient();
const supabase = createClient<Database>(
  supabaseUrl as string,
  supabaseServiceRoleKey as string
);

type ClearAllButtonProps = {
  onClear: () => void;
};

export default function ClearModels({ onClear }: ClearAllButtonProps) {
  const handleClearAll = async () => {
    try {
      const {
        data: { user },
      } = await supabaseAuth.auth.getUser();

      const userID = user?.id ?? "";

      const { error } = await supabase
        .from("models")
        .delete()
        .eq("user_id", userID);

      if (!error) {
        console.log("All models have been deleted.", error);
        onClear();
      } else {
        console.error("Error deleting models:", error);
      }
    } catch (error) {
      console.error("We have an error:", error);
    }
  };

  return (
    <Button variant={"outline"} size={"sm"} onClick={handleClearAll}>
      Clear all
    </Button>
  );
}
