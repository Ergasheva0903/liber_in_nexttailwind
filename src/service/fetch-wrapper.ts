"use server"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface FetchOptions extends RequestInit {
    headers?: HeadersInit;
}

export interface ErrorData {
    error: {
        message: string;
    };
}

//Define a generic FetchWrapper type
type FetchWrapper = <T> (
    url: string,
    options?: FetchOptions,
    revalidate?: string,
) => Promise<T>;

const fetchWrapper: FetchWrapper = async <T>(
    url: string,
    options: FetchOptions = {},
    revalidate?: string
): Promise<T> => {
    const defaultHeaders: HeadersInit = {
        "Content-Type": "application/json",
    };

    const token = (await cookies()).get('token')?.value

    if (token) {
        defaultHeaders["Authorizaton"] = `Bearer ${token}`;
    }

    const baseUrl = process.env.BACKEND_BASE_URL as string;

    const response = await fetch(`${baseUrl}${url}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorData = (await response.json()) as ErrorData;

        if (response.status === 401) {
            redirect("/login");
        }

        throw new Error(errorData.error?.message);
    }

    if (revalidate) {
        revalidateTag(revalidate);
    }

    return response.json() as Promise<T>;
}

export default fetchWrapper;