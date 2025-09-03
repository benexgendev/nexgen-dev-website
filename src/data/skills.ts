import { 
  Code2, 
  Server, 
  Globe, 
  Container, 
  Bot, 
  Zap ,
  Database,
} from "lucide-react";
import { Skill } from "@/types";

export const coreSkills: Skill[] = [
  { title: "Programming", icon: Code2, color: "#F7DF1E" },
  { title: "Frontend", icon: Code2, color: "#61DAFB" },
  { title: "Backend", icon: Server, color: "#339933" },
  { title: "Database", icon: Database, color: "#00758F" },
  { title: "Cloud", icon: Globe, color: "#FF9900" },
  { title: "DevOps", icon: Container, color: "#2496ED" },
  { title: "AI", icon: Bot, color: "#10A37F" },
  { title: "Automation", icon: Zap, color: "#FF4A00" }
];