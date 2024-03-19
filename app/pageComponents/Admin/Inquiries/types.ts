export type InquiriesDataTypes = {
    id: string;
    COMPANY: string;
    COUNTRY: {
        code: string;
        label: string;
        phone: string;
        suggested: boolean;
    };
    EMAIL: string;
    MESSAGE: string;
    NAME: string;
    currentTime: string;
};