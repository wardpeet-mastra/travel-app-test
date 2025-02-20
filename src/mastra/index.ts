import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";
import { Memory } from "@mastra/memory";
// import { PostgreStore } from "@mastra/pg";

import { travelAgent, travelAnalyzer } from "./agents";
import { syncCsvDataWorkflow } from "./workflows/attractions";

// const url = "postgresql://postgres:postgres@localhost:5433/mastra";

// const storage = new PostgresStore({
//   connectionString: url,
// });

export const mastra = new Mastra({
  workflows: { syncCsvDataWorkflow },
  memory: new Memory(),
  // storage,
  agents: { travelAgent, travelAnalyzer },
  logger: createLogger({
    name: "CONSOLE",
    level: "info",
  }),
});
