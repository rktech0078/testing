import Link from "next/link"

export default function Navbar(){
    return(
        <div>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>Contacts</li></Link>
            </ul>
        </div>
    )
}