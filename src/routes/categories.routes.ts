import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoruesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    if (categoriesRepository.findByName(name)) {
        return response.status(400).json({ error: "Category already exists!" });
    }

    categoriesRepository.create({ name, description });

    return response.status(201).json(categoriesRepository.list());
});

categoriesRoutes.get("/", (request, response) => {
    return response.status(201).json(categoriesRepository.list());
});

export { categoriesRoutes };
