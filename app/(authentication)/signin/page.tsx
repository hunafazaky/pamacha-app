"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Authentication() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center min-h-dvh">
      <h1 className="text-2xl font-bold">PaMacha</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {isSignIn ? "Sign In to your account" : "Create new account"}
          </CardTitle>
          <CardAction>
            <Button variant="link" onClick={() => setIsSignIn((prev) => !prev)}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  required
                />
              </div>
              {isSignIn ? (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              ) : (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                  <div className="flex items-center">
                    <Label htmlFor="password">Retype Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
