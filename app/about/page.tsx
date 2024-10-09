import Navbar from "@/components/nav";
import Link from "next/link";

export default function About(){
    return(
        <div>
            <h1>About-Page</h1> <br />
            <Navbar/> <br />
            <ol>
                <li><Link href="/about/product">Product-1</Link></li>
                <li><Link href="/about/product">Product-2</Link></li>
                <li><Link href="/about/product">Product-3</Link></li>
                <li><Link href="/about/product">Product-4</Link></li>
                <li><Link href="/about/product">Product-5</Link></li>
                <li><Link href="/about/product">Product-6</Link></li>
            </ol>
        </div>

    )
}