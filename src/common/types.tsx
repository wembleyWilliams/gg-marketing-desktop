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

export interface NewUser {
    firstname: string,
    lastname: string,
    businessName: string,
    email: string,
    password: string | null,
    password2: string | null,
    profilePicture: string
}

export interface ApplicationState {
    businessDetails: BusinessData;
}

export interface UserState {
    newUser: NewUser
}

