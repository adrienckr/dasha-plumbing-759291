import { ModernTemplate } from "@plumber-ai/modern-template";
import type { DesignTokens } from "@plumber-ai/modern-template/types";
import data from "../data.json";

export default function Home() {
  return (
    <main>
      <ModernTemplate data={data as DesignTokens} />
    </main>
  );
}