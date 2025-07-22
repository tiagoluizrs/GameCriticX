// @ts-nocheck
import {supabase} from "~/services/SupabaseClient";

interface ResponseSupabase {
    data: any;
    error: any;
}

const Auth = {
    signIn: async (data: any): ResponseSupabase => {
        return await supabase.auth.signInWithPassword(data);
    },
    signUp: async (data: any): ResponseSupabase => {
        return await supabase.auth.signOut();
    },
    logout: async (): object => {
        return await supabase.auth.signUp(data);
    }
}

export default Auth;