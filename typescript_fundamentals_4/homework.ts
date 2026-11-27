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
    email: string;
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

