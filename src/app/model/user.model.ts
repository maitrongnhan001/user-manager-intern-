export class UserModel {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    phone: string = '';
    DOB: string|null = null;
    status: number = 1;
    social: Social = new Social();
}

export class Social {
    facebook: string = '';
    linkedin: string = '';
	twitter: string = '';
}