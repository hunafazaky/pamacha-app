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
import Link from "next/link";

export default function Authentication() {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh">
      <h1 className="text-2xl font-bold">PaMacha</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up to create new account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="yourname@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Pen Name</Label>
                <Input
                  id="pen_name"
                  type="pen_name"
                  placeholder="Your Pen Name"
                  required
                />
              </div>
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <CardAction>
            Or
            <Link href="/signin" className="font-bold mx-1">
              Sign In
            </Link>
            to your account
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
}
