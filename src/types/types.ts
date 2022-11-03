export type ItemsType = {
    id?: string;
    date: Date;
    category: string;
    title: string;
    value: number;
    expense?: boolean;
}

export type CategoryType = {
    [key: string]: {
        title: string;
        color: string;        
        slug: string;
    }
}

export type UserType = {
    id: string;
    name: string;
    image: string;
    finance: string;
}

export type UserLoginType = {
    uid: string;
    displayName: string;
    photoURL: string;
}

export type ResultLoginType = {
    user: UserLoginType;
}

export type ResultListType = {
    items: ItemsType[];
}

export type PriceValuesType = {
    formattedValue: string;
    value: string;
    floatValue: number;
}