import Link from "next/link"

export default function InnerF2() {  
    return (<>
        <h1>
            Inner F2 Page
            <div>
                <Link href="/f5">Go to F5 Page</Link>
            </div>
        </h1>
        </>
    )
}