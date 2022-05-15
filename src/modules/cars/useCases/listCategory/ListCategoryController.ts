import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}

    handle(request: Request, response: Response) {
        return response.status(201).json(this.listCategoryUseCase.execute());
    }
}

export { ListCategoryController };
