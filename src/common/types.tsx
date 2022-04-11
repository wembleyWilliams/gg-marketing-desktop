//
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
    businessHandles?: Array<{
        socialMedia: string,
        profileName: string,
        profileUrl: string,
    }>,
    businessId: string
}

export type businessHandle = {
    profileName: string,
    profileUrl: string,
    socialMedia: string
}

export interface UserData {
    firstname: string,
    lastname: string,
    businessName: string,
    email: string,
    password?: string | Promise<any>,
    profilePicture: string,
    businessId?: string
}

export interface UserState {
  userDetails: UserData
}

export interface ApplicationState {
    businessDetails: BusinessData;
}

export interface Logo {
    data: string,
    mime: string
}

export type Nullable<T> = T | null | undefined;
