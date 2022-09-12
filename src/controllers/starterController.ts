import { Request, Response, NextFunction } from "express";

export const starter = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from Virtual Game");
};