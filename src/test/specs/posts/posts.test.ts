import { StatusCodes } from "http-status-codes";
import environment from "../../../../env";
import * as supertest from 'supertest';
import * as dotenv from 'dotenv';
dotenv.config();

describe('CRUD on Posts', () => {
    beforeAll(async()=>{
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }, 2000);

    it('GET Posts', async () => {
        const response = await supertest(environment.typicodeUrl)
            .get('/posts/1')
            .set('Content-Type', 'application/json')
            .expect(StatusCodes.OK);

            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('userId');
            expect(response.body).toHaveProperty('title');
            expect(response.body).toHaveProperty('body');
            expect(typeof response.body.title).toBe('string');

    })
})