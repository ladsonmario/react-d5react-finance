export type ItemsType = {
    date: Date;
    category: string;
    title: string;
    value: number;
}

export type CategoryType = {
    [key: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}

export type UserType = {
    id: string;
    name: string;
    image: string;
}

export type UserLoginType = {
    uid: string;
    displayName: string;
    photoURL: string;
}

export type ResultLoginType = {
    user: UserLoginType;
}