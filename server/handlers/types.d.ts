import { Request } from "express";

export interface CreateLinkReq extends Request {
  body: {
    reuse?: boolean;
    password?: string;
    customurl?: string;
    title?: string;
    image_url?: string;
    description?: string;
    expire_in?: string;
    domain?: Domain;
    target: string;
  };
}
