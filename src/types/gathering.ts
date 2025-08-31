export interface gathering {
    name: string;
    size: number;
    location: string;
    date: string;
    description: string;
    coverImage: File | null;
    deposit: number;
    termAgreed: boolean;
}
