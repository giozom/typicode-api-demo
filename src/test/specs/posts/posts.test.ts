import { StatusCodes } from "http-status-codes";
import environment from "../../../../env";
import * as supertest from 'supertest';
import * as dotenv from 'dotenv';
import { TypicodeApi } from "../../payload/TypicodeApi";
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

            console.log('Response is >>', response.body);

    });
    it('POST Posts', async () => {
        const postPayload = TypicodeApi.createPosts();
        const response = await supertest(environment.typicodeUrl)
            .post('/posts')
            .send(postPayload)
            .set('Content-Type', 'application/json')
            .expect(StatusCodes.CREATED);

            const postId = response.body.id;
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('userId');
            expect(response.body).toHaveProperty('title');
            expect(response.body).toHaveProperty('body');
            expect(typeof response.body.title).toBe('string');

            console.log('Response is >>', response.body);
    });

        it('PUT Posts', async () => {

        const updatePost = TypicodeApi.updatePosts();
        const putResponse = await supertest(environment.typicodeUrl)
            .put('/posts/1')
            .send(updatePost)
            .set('Content-Type', 'application/json')
            .expect(StatusCodes.OK);

            expect(putResponse.body).toHaveProperty('id');
            expect(putResponse.body).toHaveProperty('userId');
            expect(putResponse.body).toHaveProperty('title');
            expect(putResponse.body).toHaveProperty('body');
            expect(typeof putResponse.body.title).toBe('string');

            console.log('Put Response is >>', putResponse.body);

    });

    //example of using process.env. 
    xit('Example of using process.env', async () => {
        const postPayload = TypicodeApi.createPosts();
        const response = await supertest(environment.typicodeUrl)
            .post('/posts')
            .send(postPayload)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${process.env.TOKEN}`)    
            .set('X-Api-Key', process.env.API_KEY as string)
            .expect(StatusCodes.CREATED);

    });

    //example using params and query
    xit('Example using Param and Query', async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const params = {
            client_id: process.env.CLIENT_ID as string,
            username: process.env.USERNAME as string,
            password: process.env.PASSWORD as string
        }

        const response = await supertest(environment.typicodeUrl)
            .post('/posts')
            .query(params)
            .set('Content-Type', 'application/json')
            .expect(StatusCodes.CREATED);

    });
})