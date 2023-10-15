import { Request } from "express";
import { User } from "@/users/users.model";

export type AuthenticatedRequest = Request & { user: User };
