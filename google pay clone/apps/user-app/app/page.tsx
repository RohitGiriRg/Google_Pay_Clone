import { PrismaClient } from "@repo/db/common";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return <div className="text-2xl">hi there</div>;
}
