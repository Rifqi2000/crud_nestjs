import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] =[ 
        {
            id: 1,
            name: 'Rifqi',
            username: 'rifqimk',
            password: 'rif123'
        },
        {
            id: 2,
            name: 'Mulya',
            username: 'mulyak',
            password: 'mul123'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
