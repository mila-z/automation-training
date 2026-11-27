type Category = "Roads & Infrastructure" | "Waste Management" | "Water & Utilities" | "Parks & Recreation" | "Public Safety";

type Priority = "Low" | "Medium" | "High" | "Urgent";

type BasicInformation = {
    requestTitle: string;
    desription: string;
    requestDate: string;
    category: Category;
    priority: Priority;
    emergency: boolean;
};