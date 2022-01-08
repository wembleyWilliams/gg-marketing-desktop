export interface BusinessData  {
    _id: string,
    logo: {
        data?: string,
        mime?: string
    },
    title: string,
    description: string,
    socialData?: {
        totalFollowers?: Number,
        rating?: Number,
        newFollowers?: Number
    },
    businessHandles: [{
        profileName?: string,
        profileUrL?: string,
    }]
}

export interface User {
    firstname: string,
    lastname: string,
    businessName: string,
    email: string,
    password?: string | null,
    password2?: string | null,
    profilePicture: string
}

export interface UserState {
    firstname: string,
    lastname: string,
    businessName: string,
    email: string,
    profilePicture: string
}

export interface ApplicationState {
    businessDetails: BusinessData;
}


export type Nullable<T> = T | null | undefined;
