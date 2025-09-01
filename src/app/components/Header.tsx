'use server';
import RightNav from "@/app/components/RightNav";
import {getSessionEmail} from "@/libs/getSessionEmail";
import {CalendarDays} from "lucide-react";
import Link from "next/link";

export default async function Header() {
  const finalEmail = await getSessionEmail();
  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600">
      <div className="flex items-center gap-10">
        <Link href={'/'} className="text-blue-600 font-bold text-2xl flex gap-1 items-center">
          <CalendarDays size={24}/>
          CalEasy
        </Link>
        <nav className="flex gap-4">
          <Link href={'/features'}>Features</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/pricing'}>Pricing</Link>
        </nav>
      </div>
      <RightNav email={finalEmail} />
    </header>
  );
}