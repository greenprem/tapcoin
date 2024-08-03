// types/Player.ts
export interface Player {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    score: number;
    ref_id: string;
    referrals: string[];
    is_premium: boolean;
    not: number;
}
