export class TypicodeApi {
    public static getPosts(): {
        userId: number;
        id: number;
        title: string;
        body: string;
    } {
        return {
            userId: 1,
            id: 1,
            title: 'foo',
            body: 'bar'
        }
    }
    public static createPosts(): {
        userId: number;
        title: string;
        body: string;
    } {
        return {
            userId: 1,
            title: 'foo',
            body: 'bar'
        }
    }
    public static updatePosts(): {
        userId: number;
        title: string;
        body: string;
        id: number
    } {
        return {
            id: 1,
            userId: 1,
            title: 'update foo',
            body: 'update bar'
        }
    }       
}