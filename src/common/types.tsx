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

export interface ApplicationState {
    businessDetails: BusinessData;
}

