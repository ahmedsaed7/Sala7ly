'use server';

import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

type LoginData = {
  email: string;
  password: string;
};

export async function login(data: LoginData) {
  // Validate the credentials
  if (!data.email || !data.password) {
    return { error: "Email and password are required" };
  }
  
  try {
    // Here you would make a request to your authentication API
    // Example:
    // const response = await fetch(`${process.env.API_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   return { error: errorData.message || "Authentication failed" };
    // }
    
    // const userData = await response.json();
    
    // For demonstration, we'll simulate a successful login
    const token = "example_jwt_token";
    
    // Set auth cookie
    (await
          // Set auth cookie
          cookies()).set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    
    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "An unexpected error occurred" };
  }
}

// export async function logout() {
//     cookies().delete("auth_token");
//     redirect("/login");
//   }