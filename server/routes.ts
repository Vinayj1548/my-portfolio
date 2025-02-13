import type { Express } from "express";
import { createServer } from "http";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";
import { ZodError } from "zod";

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      await storage.createContact(contact);
      res.json({ success: true });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return createServer(app);
}
