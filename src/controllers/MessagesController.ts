import { json, Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
    async create(request: Request, response: Response): Promise<Response> {
        const { admin_id, text, user_id } = request.body;

        const messageService = new MessagesService();

        const message = await messageService.create({ admin_id, text, user_id });

        return response.json(message);
    }

    //localhost:3000/messages/idDoUsuario
    async showByUser(request: Request, response: Response) {
        const { id } = request.params;

        const messageService = new MessagesService();

        const list = await messageService.listByUser(id);

        return response.json(list);
    }
}

export { MessagesController };