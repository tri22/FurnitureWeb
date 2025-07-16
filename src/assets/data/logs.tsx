// src/types/Log.ts
export type Log = {
  id: number;
  action: string;
  dataIn: string;
  dataOut: string;
  date: string;      // log timestamp
  ip: string;
  level: "INFO" | "WARN" | "ERROR";
  resource: string;
  user: {
    id: number;
    fullName: string;
    email: string;
  } | null;
};
