type Category = "Roads & Infrastructure" | "Waste Management" | "Water & Utilities" | "Parks & Recreation" | "Public Safety";

type Priority = "Low" | "Medium" | "High" | "Urgent";

type GPSCoordinates = {latitude: number; longtitude: number;};

type ContactMethod = "Email" | "Phone" | "SMS" | "Mail";

type MailingAddress = {streetAddress: string; city: string};

type AffetctedServices = "Water Supply" | "Electrical" | "Gas" | "Internet/Cable" | "Garbage Collection";

type BasicInformation = {
    requestTitle: string;
    desription: string;
    requestDate: string;
    category: Category;
    priority: Priority;
    emergency: boolean;
};

type LocationDetails = {
    streetAdress: string;
    city: string;
    postalCode: string;
    coordinates: GPSCoordinates;
    locationDescription: string;
};

type ContactInformation = {
    contactMethod: ContactMethod;
    email?: string;
    phone: string;
    mailingAddress?: MailingAddress;
    affectedServices?: AffetctedServices;
};

type AdditionalDetails = {
    filePath: string;
    termsAndConditions: boolean;
};

type NewRequest = {
    basicInformation: BasicInformation;
    locationDetails: LocationDetails;
    contactInformation: ContactInformation;
    additionalDetails: AdditionalDetails;
}

// valid object - all required fields are present, values match the declared types 
const validRequest2: NewRequest = {
    basicInformation: {
        requestTitle: "Title", 
        desription: "Description", 
        requestDate: "27.11.2026", 
        category: "Roads & Infrastructure", 
        priority: "Low", 
        emergency: false
    },
    locationDetails: {
        streetAdress: "Address",
        city: "City",
        postalCode: "1000",
        coordinates: {latitude: 0, longtitude: 0},
        locationDescription: "description"
    },
    contactInformation: {
        contactMethod: "Mail",
        email: "test@test.com",
        phone: "0000000000",
        mailingAddress: {streetAddress: "Address", city: "City"},
        affectedServices: "Water Supply",
    },
    additionalDetails: {
        filePath: "./somepath",
        termsAndConditions: true
    }
};

// valid object - email, mailing address and affected services are optionally populated, the rest 
//                of the values match the declared types
const validRequest1: NewRequest = {
    basicInformation: {
        requestTitle: "Title", 
        desription: "Description", 
        requestDate: "27.11.2026", 
        category: "Roads & Infrastructure", 
        priority: "Low", 
        emergency: false
    },
    locationDetails: {
        streetAdress: "Address",
        city: "City",
        postalCode: "1000",
        coordinates: {latitude: 0, longtitude: 0},
        locationDescription: "description"
    },
    contactInformation: {
        contactMethod: "Mail",
        phone: "0000000000"
    },
    additionalDetails: {
        filePath: "./somepath",
        termsAndConditions: true
    }
};

// valid - some optional fields are populated, some are not, the data is different from the first two
const validRequest3: NewRequest = {
    basicInformation: {
        requestTitle: "New Title", 
        desription: "New Description", 
        requestDate: "27.11.2026", 
        category: "Roads & Infrastructure", 
        priority: "Low", 
        emergency: false
    },
    locationDetails: {
        streetAdress: "Address",
        city: "City",
        postalCode: "1000",
        coordinates: {latitude: 0, longtitude: 0},
        locationDescription: "description"
    },
    contactInformation: {
        contactMethod: "Mail",
        phone: "0000000000",
        affectedServices: "Gas",
    },
    additionalDetails: {
        filePath: "./somepath",
        termsAndConditions: false
    }
};

// invalid object - the values do not match the reqired types
const invalidRequest1: NewRequest = {
    basicInformation: {
        requestTitle: 3, 
        desription: 4, 
        requestDate: "27.11.2026", 
        category: "Roads & Infrastructure", 
        priority: "Low", 
        emergency: false
    },
    locationDetails: {
        streetAdress: "Address",
        city: "City",
        postalCode: "1000",
        coordinates: {latitude: 0, longtitude: 0},
        locationDescription: "description"
    },
    contactInformation: {
        contactMethod: "Mail",
        email: "test@test.com",
        phone: "0000000000",
        mailingAddress: {streetAddress: "Address", city: "City"},
        affectedServices: "Water Supply",
    },
    additionalDetails: {
        filePath: "./somepath",
        termsAndConditions: true
    }
};

// invalid object - fields that are not optional are missing
const invalidRequest2: NewRequest = {
    basicInformation: {
        requestTitle: "Title", 
        desription: "Description",  
        category: "Roads & Infrastructure", 
        priority: "Low", 
        emergency: false
    },
    locationDetails: {
        streetAdress: "Address",
        city: "City",
        postalCode: "1000",
        locationDescription: "description"
    },
    contactInformation: {
        contactMethod: "Mail",
        mailingAddress: {streetAddress: "Address", city: "City"},
        affectedServices: "Water Supply",
    },
    additionalDetails: {
        termsAndConditions: true
    }
};

// invalid object - basicInformation is missing
const invalidRequest3: NewRequest = {
    locationDetails: {
        streetAdress: "Address",
        city: "City",
        postalCode: "1000",
        coordinates: {latitude: 0, longtitude: 0},
        locationDescription: "description"
    },
    contactInformation: {
        contactMethod: "Mail",
        email: "test@test.com",
        phone: "0000000000",
        mailingAddress: {streetAddress: "Address", city: "City"},
        affectedServices: "Water Supply",
    },
    additionalDetails: {
        filePath: "./somepath",
        termsAndConditions: true
    }
};

class TestDataFactory {
    validRequest(overrides?: Partial<NewRequest>): NewRequest {
        const defaults: NewRequest = {
            basicInformation: {
                requestTitle: "Broken street light",
                desription: "The street light is not working.",
                requestDate: "27.11.2026",
                category: "Roads & Infrastructure",
                priority: "Low",
                emergency: false
            },
            locationDetails: {
                streetAdress: "Address",
                city: "City",
                postalCode: "1000",
                coordinates: {
                    latitude: 0,
                    longtitude: 0
                },
                locationDescription: "Near the main road"
            },
            contactInformation: {
                contactMethod: "Email",
                email: "test@test.com",
                phone: "0000000000"
            },
            additionalDetails: {
                filePath: "./somepath",
                termsAndConditions: true
            }
        };

        return { ...defaults, ...overrides };
    }
}