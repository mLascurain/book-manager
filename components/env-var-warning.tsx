import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function EnvVarWarning() {
  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        Supabase environment variables required
      </Badge>
      <div className="flex gap-2">
        <Button size="sm" variant={"outline"} className="shadow-xl" disabled>
          Sign in
        </Button>
        <Button size="sm" variant={"default"} className="shadow-xl" disabled>
          Sign up
        </Button>
      </div>
    </div>
  );
}
